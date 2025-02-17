import pandas as pd
from sklearn.preprocessing import MinMaxScaler

def preprocess_data(df):
    """
    Preprocesses the dataset by handling missing values, feature engineering, 
    and normalizing numerical features.
    """
    # Fill missing values with 0
    df.fillna(0, inplace=True)

    # Feature engineering: Transaction amount deviation from mean
    df['amount_deviation'] = abs(df['TransactionAmount'] - df['TransactionAmount'].mean())

    # Normalize numerical features using MinMaxScaler
    scaler = MinMaxScaler()
    numerical_features = ['TransactionAmount', 'amount_deviation']
    df[numerical_features] = scaler.fit_transform(df[numerical_features])

    return df
