import pandas as pd
from preprocessing import preprocess_data
from feature_engineering import create_features
from model_training import train_model, save_model

# Step 1: Load and preprocess data
print("Loading and preprocessing data...")
df = preprocess_data('online_shoppers_intention.csv')

# Step 2: Create additional features for fraud detection modeling
print("Creating features...")
df = create_features(df)

# Step 3: Train a fraud detection classification model (target column is 'Revenue')
print("Training fraud detection model...")
target_column = 'Revenue'
model = train_model(df.drop(columns=['Administrative', 'Informational', 'SpecialDay']), target_column)

# Step 4: Save trained model for future use
print("Saving trained model...")
save_model(model, 'trained_model.pkl')
print("Trained model saved as 'trained_model.pkl'.")
