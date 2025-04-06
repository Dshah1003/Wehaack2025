import os
import re
from sec_edgar_downloader import Downloader
import spacy

# Define red flag keywords (all lowercase)
RED_FLAG_KEYWORDS = [
   "fraud", "misleading", "investigation", "resignation",
    "SEC subpoena", "misrepresentation", "auditor concern"
]

# Load NLP model
nlp = spacy.load("en_core_web_sm", disable=["ner", "parser"])

def download_sec_filings(ticker, form_type="8-K", limit=1):
    try:
        dl = Downloader("your_email@example.com", "sec_data", delay=0.5)
        dl.get(form_type, ticker, amount=limit)
        folder_path = f"sec_data/sec-edgar-filings/{ticker}/{form_type}"
        # Find the first file in the directory
        for root, dirs, files in os.walk(folder_path):
            if files:
                return os.path.join(root, files[0])  # Return full file path
        return None
    except Exception as e:
        print(f"[SEC DOWNLOAD ERROR] {e}")
        return None

def analyze_sec_text_for_flags(text):
    text = re.sub(r"<.*?>", " ", text)  # Remove HTML tags
    text = re.sub(r"\s+", " ", text).lower()  # Normalize whitespace & lowercase
    found_flags = [kw for kw in RED_FLAG_KEYWORDS if kw in text]  # Case-insensitive check
    return list(set(found_flags))  # Remove duplicates

