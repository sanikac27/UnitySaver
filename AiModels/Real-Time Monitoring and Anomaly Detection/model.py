from sklearn.ensemble import IsolationForest

def train_model(df):
    """
    Trains an Isolation Forest model for anomaly detection.
    Returns the trained model and features used.
    """
    # Select features for training
    features = ['TransactionAmount', 'amount_deviation']
    X = df[features]

    # Train Isolation Forest model
    model = IsolationForest(n_estimators=100, contamination=0.02, random_state=42)
    model.fit(X)

    return model, features

def predict_anomalies(df, model, features):
    """
    Predicts anomalies in the dataset using the trained model.
    """
    X = df[features]
    
    # Predict anomalies (-1: anomaly, 1: normal)
    df['anomaly'] = model.predict(X)
    
    # Map anomalies to 1 (anomalous) and 0 (normal) for easier interpretation
    df['anomaly'] = df['anomaly'].map({1: 0, -1: 1})
    
    return df
