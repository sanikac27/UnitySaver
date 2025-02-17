import pandas as pd
from sklearn.preprocessing import MinMaxScaler

def preprocess_data(file_path):
    """
    Preprocesses the dataset by handling missing values and formatting columns.
    """
    # Load the dataset
    df = pd.read_csv(file_path)

    # Fill missing values with 0 (or use other imputation methods if needed)
    df.fillna(0, inplace=True)

    # Convert categorical columns to numerical using one-hot encoding
    categorical_columns = ['Month', 'VisitorType', 'Weekend']
    df = pd.get_dummies(df, columns=categorical_columns, drop_first=True)

    # Normalize numerical features (optional)
    scaler = MinMaxScaler()
    numerical_features = ['Administrative_Duration', 'ProductRelated_Duration']
    df[numerical_features] = scaler.fit_transform(df[numerical_features])

    return df
