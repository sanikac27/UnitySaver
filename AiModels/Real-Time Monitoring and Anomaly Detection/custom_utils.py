import pandas as pd

def monitor_transactions(batch, model, features):
    """
    Monitors a batch of transactions in real-time to detect anomalies.
    """
    from preprocessing import preprocess_data
    
    # Preprocess batch data using the same preprocessing logic as training
    batch[features] = preprocess_data(batch)[features]
    
    # Predict anomalies in real-time
    batch['anomaly'] = model.predict(batch[features])
    
    # Map anomalies to 1 (anomalous) and 0 (normal)
    batch['anomaly'] = batch['anomaly'].map({1: 0, -1: 1})
    
    # Flag anomalies and issue alerts if any are detected
    anomalies = batch[batch['anomaly'] == 1]
    
    if not anomalies.empty:
        print("Anomalies detected!")
        print(anomalies[['TransactionID', 'UserID', 'TransactionAmount', 'anomaly']])
    
    return anomalies

def log_anomalies(anomalies):
    """
    Logs detected anomalies into a CSV file for auditing purposes.
    """
    if not anomalies.empty:
        anomalies.to_csv('flagged_anomalies.csv', mode='a', header=False, index=False)
        print("Anomalies logged for auditing.")
