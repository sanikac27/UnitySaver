import joblib

def load_model(file_name):
    """
    Loads a trained machine learning model from disk.
    
    Parameters:
        - file_name: File name of the saved model.
    
    Returns:
        - Loaded machine learning model.
    """
    return joblib.load(file_name)
