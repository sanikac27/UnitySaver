def create_features(df):
    """
    Creates additional features for fraud detection.
    """
    # Example: Create a feature for average time spent on pages
    df['Avg_Time_Per_Page'] = df['ProductRelated_Duration'] / (df['ProductRelated'] + 1e-5)

    return df
