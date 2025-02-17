import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, accuracy_score
import joblib

def train_model(df):
    """
    Trains a Random Forest model to predict compliance labels.
    Saves the trained model to disk.
    """
    # Features and labels
    X = df.drop(columns=['Compliance_Label'])
    y = df['Compliance_Label']

    # Split into training and testing sets (80% train, 20% test)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Train a Random Forest Classifier
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    # Evaluate the model on the test set
    y_pred = model.predict(X_test)
    print("Model Evaluation:")
    print(classification_report(y_test, y_pred))
    
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Accuracy: {accuracy:.2f}")

    # Save the trained model to disk
    joblib.dump(model, 'trained_model.pkl')
    print("Trained model saved as 'trained_model.pkl'.")

def load_model():
    """
    Loads the trained model from disk.
    """
    return joblib.load('trained_model.pkl')
