
// Mock user settings stored in memory (replace with database logic if needed)
let userSettings = {
    darkMode: false,
    colorScheme: 'default',
    textSize: 'medium',
  };
const getuserSettingsController = (req, res) => {
    try {
      res.status(200).json(userSettings);
    } catch (error) {
      console.error('Error fetching user settings:', error);
      res.status(500).json({ message: 'Failed to fetch settings' });
    }
  }
const  putuserSettingsController=(req, res) => {
    try {
      const { darkMode, colorScheme, textSize } = req.body;
  
      // Update settings in memory
      if (darkMode !== undefined) userSettings.darkMode = darkMode;
      if (colorScheme !== undefined) userSettings.colorScheme = colorScheme;
      if (textSize !== undefined) userSettings.textSize = textSize;
  
      res.status(200).json({ message: 'Settings updated successfully', userSettings });
    } catch (error) {
      console.error('Error updating user settings:', error);
      res.status(500).json({ message: 'Failed to update settings' });
    }
  }

module.exports={getuserSettingsController,putuserSettingsController}