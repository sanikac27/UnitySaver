import pandas as pd
from preprocessing import preprocess_data
from model import train_model, predict_anomalies
from custom_utils import monitor_transactions, log_anomalies

# Step 1: Load dataset (simulate real-time data stream)
print("Loading dataset...")
df = pd.read_csv('transactions.csv')

# Step 2: Preprocess data
print("Preprocessing data...")
df = preprocess_data(df)

# Step 3: Train anomaly detection model
print("Training anomaly detection model...")
model, features = train_model(df)

# Save trained model for future use (optional)
import joblib
joblib.dump(model, 'trained_model.pkl')
print("Trained model saved as 'trained_model.pkl'.")

# Step 4: Predict anomalies on the entire dataset (optional)
print("Predicting anomalies on the dataset...")
df = predict_anomalies(df, model, features)

# Step 5: Real-time monitoring simulation
print("Starting real-time transaction monitoring...")
for i in range(0, len(df), 2):  # Process in batches of 2 transactions (adjust batch size as needed)
    batch = df.iloc[i:i+2]
    
    anomalies = monitor_transactions(batch, model, features)
    
    log_anomalies(anomalies)

print("Real-time monitoring completed.")
