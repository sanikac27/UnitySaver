import pandas as pd

def create_features(df):
    """
    Creates additional features for predictive modeling.
    """
    # Extract time-based features from 'Timestamp'
    df['Year'] = df['Timestamp'].dt.year
    df['Month'] = df['Timestamp'].dt.month
    df['Day'] = df['Timestamp'].dt.day
    df['Hour'] = df['Timestamp'].dt.hour

    # Create a feature for transaction amount deviation from mean
    df['amount_deviation'] = abs(df['TransactionAmount'] - df['TransactionAmount'].mean())

    return df
