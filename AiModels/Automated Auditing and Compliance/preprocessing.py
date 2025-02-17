import pandas as pd
from sklearn.preprocessing import MinMaxScaler

def preprocess_data(file_path):
    """
    Preprocesses the dataset by handling missing values, scaling numerical features,
    and encoding categorical variables.
    """
    # Load the dataset
    df = pd.read_csv(file_path)

    # Fill missing values with 0 (or use other imputation methods if necessary)
    df.fillna(0, inplace=True)

    # Feature Engineering: Create a "Compliance_Ratio" feature (Revenue / Expenditure)
    df['Compliance_Ratio'] = df['Totals.Revenue'] / (df['Totals.Expenditure'] + 1e-5)

    # Normalize numerical columns using MinMaxScaler
    scaler = MinMaxScaler()
    numerical_features = ['Totals.Revenue', 'Totals.Expenditure', 'Compliance_Ratio']
    df[numerical_features] = scaler.fit_transform(df[numerical_features])

    # Encode categorical variables (if any)
    if 'State' in df.columns:
        df = pd.get_dummies(df, columns=['State'], drop_first=True)

    return df
