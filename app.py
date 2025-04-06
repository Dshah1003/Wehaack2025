from flask import Flask, request, jsonify
import yfinance as yf
import numpy as np
import requests
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import os
import logging
from sec_utils import download_sec_filings, analyze_sec_text_for_flags

# Setup
app = Flask(__name__)
NEWS_API_KEY = os.getenv("NEWS_API_KEY_V2")
logging.basicConfig(level=logging.INFO)

vader_analyzer = SentimentIntensityAnalyzer()

@app.route('/')
def home():
    return "CBRE Risk Analyzer Backend is running."

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    ticker = data.get('ticker', '').strip().upper()
    investment_type = data.get('type', '').strip()

    if not ticker or not investment_type:
        return jsonify({"error": "Missing 'ticker' or 'type' in request"}), 400

    try:
        # ===== MARKET RISK =====
        stock = yf.Ticker(ticker)
        hist = stock.history(period="1mo")
        if hist.empty:
            return jsonify({"error": "Invalid ticker or no data available"}), 400

        hist['daily_return'] = hist['Close'].pct_change()
        volatility = np.std(hist['daily_return'].dropna())
        market_risk_score = min(int((volatility / 0.1) * 100), 100)

        # ===== LIQUIDITY RISK =====
        avg_volume = hist['Volume'].mean()
        if avg_volume >= 10000000:
            liquidity_risk_score = 0
        elif avg_volume <= 100000:
            liquidity_risk_score = 100
        else:
            liquidity_risk_score = int(100 - ((avg_volume - 100000) / (10000000 - 100000)) * 100)

        # ===== FRAUD / NEWS RISK =====
        try:
            raw_name = stock.info.get("longName", ticker)
        except Exception:
            raw_name = ticker

        stopwords = ["Inc", "Inc.", "Co", "Co.", "Ltd", "Company"]
        company_name = " ".join([word for word in raw_name.split() if word not in stopwords])
        news_url = (
    f"https://newsapi.org/v2/everything?"
    f"q=\"{company_name}\" OR {ticker}&language=en&sortBy=relevancy&pageSize=10&apiKey={NEWS_API_KEY}"
)


        

        news_response = requests.get(news_url)
        news_json = news_response.json()

        if news_json.get("status") != "ok":
            return jsonify({"error": "NewsAPI returned error", "details": news_json}), 500

        articles = news_json.get("articles", [])
        negative_count = sum(1 for a in articles if vader_analyzer.polarity_scores(a['title'])['compound'] < -0.2)
        total_count = len(articles)

        if total_count == 0:
            fraud_risk_score = 50
            sentiment_result = "Neutral"
        else:
            fraud_risk_score = int((negative_count / total_count) * 100)
            ratio = negative_count / total_count
            sentiment_result = "Negative" if ratio > 0.6 else "Positive" if ratio < 0.2 else "Neutral"

        top_headlines = [a['title'] for a in articles[:3]] or ["No recent news headlines found."]

        # ===== SEC NLP SCAN =====
        sec_flags = []
        sec_folder = download_sec_filings(ticker, form_type="8-K", limit=1)
        if sec_folder:
            for root, dirs, files in os.walk(sec_folder):
                for file in files:
                    if file.endswith(".txt"):
                        full_path = os.path.join(root, file)
                        with open(full_path, 'r', encoding='utf-8', errors='ignore') as f:
                            text = f.read()
                            sec_flags = analyze_sec_text_for_flags(text)
                        break

        if sec_flags:
            fraud_risk_score = min(100, fraud_risk_score + 20)

        # ===== FINAL SCORE =====
        final_risk_score = round(
            0.40 * fraud_risk_score +
            0.35 * market_risk_score +
            0.25 * liquidity_risk_score, 2
        )

        # ===== RED FLAGS =====
        red_flags = []
        if fraud_risk_score > 60:
            red_flags.append("High fraud risk detected from recent news.")
        elif fraud_risk_score > 30:
            red_flags.append("Moderate fraud risk based on recent headlines.")
        if market_risk_score > 60:
            red_flags.append("High market volatility.")
        elif market_risk_score > 30:
            red_flags.append("Moderate market volatility.")
        if liquidity_risk_score > 50:
            red_flags.append("Liquidity risk: Trading volume may be too low.")
        if sentiment_result.lower() == "negative":
            red_flags.append("Negative news sentiment detected.")
        if not sec_flags:
            red_flags.append("No SEC flags found, but filings should still be reviewed manually.")

        # ===== CRITICAL ALERT SYSTEM =====
        critical_alerts = []
        if final_risk_score < 30:
            critical_alerts.append("This investment is considered low risk, with minimal red flags. Suitable for conservative portfolios.")
        elif final_risk_score < 60:
            critical_alerts.append("Moderate risk: A good balance between growth potential and risk. Stay informed.")
        elif final_risk_score < 85:
            critical_alerts.append("High risk due to volatility, liquidity issues, or legal concerns. Consider risk mitigation.")
        elif final_risk_score <= 100:
            critical_alerts.append("Extreme risk including potential fraud or financial distress. Immediate review advised.")

        return jsonify({
            "status": "success",
            "ticker": ticker,
            "type": investment_type,
            "company_name": company_name,
            "market_risk": market_risk_score,
            "liquidity_risk": liquidity_risk_score,
            "fraud_news_risk": fraud_risk_score,
            "final_risk_score": final_risk_score,
            "sentiment": sentiment_result,
            "headlines": top_headlines,
            "sec_flags": sec_flags,
            "red_flags": red_flags,
            "critical_alerts": critical_alerts
        })

    except Exception as e:
        logging.exception("Unexpected server error:")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
