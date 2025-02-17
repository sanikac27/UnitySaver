import pandas as pd
from preprocessing import preprocess_data
from rules_engine import apply_compliance_labels
from model_training import train_model

# Step 1: Load and preprocess data
print("Loading and preprocessing data...")
df = preprocess_data('finance.csv')

# Step 2: Apply compliance labels based on rules engine
print("Applying compliance labels...")
df = apply_compliance_labels(df)

# Step 3: Train and evaluate machine learning model for compliance prediction
print("Training machine learning model...")
train_model(df)

# Step 4: Log compliance results for auditing purposes (optional)
print("Logging compliance results...")
from custom_utils import log_compliance_report
log_compliance_report(df)

print("Process completed.")
