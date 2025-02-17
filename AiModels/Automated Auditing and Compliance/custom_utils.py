def log_compliance_report(non_compliant_df):
    """
    Logs non-compliant records to a CSV file for auditing purposes.
    """
    if not non_compliant_df.empty:
        non_compliant_df.to_csv('compliance_report.csv', index=False)
        print("Compliance report saved to 'compliance_report.csv'.")
    else:
        print("All records are compliant.")

def create_digital_ledger(df):
    """
    Creates a digital ledger of all records.
    """
    df.to_csv('digital_ledger.csv', index=False)
    print("Digital ledger created as 'digital_ledger.csv'.")
