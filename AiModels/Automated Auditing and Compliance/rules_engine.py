def label_compliance(row):
    """
    Labels a row as compliant (1) or non-compliant (0) based on predefined rules.
    """
    if row['Compliance_Ratio'] >= 1.0 and row['Details.Education.Education Total'] > 0:
        return 1  # Compliant
    else:
        return 0  # Non-Compliant

def apply_compliance_labels(df):
    """
    Applies compliance labels to the dataset.
    """
    df['Compliance_Label'] = df.apply(label_compliance, axis=1)
    return df
