import React from 'react';
import { 
  Bell, 
  Lock, 
  Globe, 
  Palette, 
  User,
  ChevronRight,
  Moon,
  Sun,
  Volume2
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import Switch from '../ui/switch';
import '../../styles/components/settings.css';

const SettingsPage = () => {
  const settingSections = [
    {
      title: "Account Settings",
      icon: <User className="settings-icon" />,
      settings: [
        { name: "Profile Information", description: "Update your personal details" },
        { name: "Password & Security", description: "Manage your account security" },
        { name: "Connected Accounts", description: "Manage linked services" }
      ]
    },
    {
      title: "Notification Preferences",
      icon: <Bell className="settings-icon" />,
      settings: [
        { name: "Push Notifications", description: "Transaction alerts and updates", toggle: true },
        { name: "Email Notifications", description: "Weekly summaries and reports", toggle: true },
        { name: "Sound Alerts", description: "In-app notification sounds", toggle: true }
      ]
    },
    {
      title: "Privacy Controls",
      icon: <Lock className="settings-icon" />,
      settings: [
        { name: "Visibility", description: "Control who can see your activity" },
        { name: "Data Sharing", description: "Manage data sharing preferences", toggle: true },
        { name: "Two-Factor Authentication", description: "Extra security layer", toggle: true }
      ]
    },
   /* {
      title: "Language Settings",
      icon: <Globe className="settings-icon" />,
      settings: [
        { name: "App Language", description: "Choose your preferred language" },
        { name: "Region", description: "Set your local region" },
        { name: "Date Format", description: "Customize date display" }
      ]
    },*/
    {
      title: "Theme Customization",
      icon: <Palette className="settings-icon" />,
      settings: [
        { name: "Dark Mode", description: "Toggle dark/light theme", toggle: true },
        { name: "Color Scheme", description: "Choose accent colors" },
        { name: "Text Size", description: "Adjust display text size" }
      ]
    }
  ];

  return (
    <div className="settings-page">
      <div className="settings-container">
        <h1 className="settings-title">Settings & Preferences</h1>
        
        <div className="settings-sections">
          {settingSections.map((section, index) => (
            <Card key={index} className="settings-card">
              <CardHeader className="settings-card-header">
                <div className="section-header">
                  {section.icon}
                  <CardTitle className="section-title">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="settings-card-content">
                <div className="settings-list">
                  {section.settings.map((setting, settingIndex) => (
                    <div 
                      key={settingIndex}
                      className="settings-item"
                    >
                      <div className="setting-info">
                        <h3 className="setting-name">{setting.name}</h3>
                        <p className="setting-description">{setting.description}</p>
                      </div>
                      {setting.toggle ? (
                        <Switch className="setting-switch" />
                      ) : (
                        <ChevronRight className="setting-chevron" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;