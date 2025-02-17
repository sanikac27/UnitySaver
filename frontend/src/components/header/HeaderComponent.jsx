import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  Clock,
  Brain,
  FileCheck,
  Users,
  PiggyBank,
  Landmark,
  CreditCard,
  HelpCircle,
  Users as Group,
  User,
  Settings,
  Shield,
  LogOut,
} from 'lucide-react';
import '../../styles/components/header.css';
import logo from '../../styles/components/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDropdownSticky, setIsDropdownSticky] = useState(false);

  const navigate = useNavigate();

  // Handle scrolling effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dropdown click handler
  const handleDropdownClick = (dropdownName) => {
    if (activeDropdown === dropdownName && isDropdownSticky) {
      setIsDropdownSticky(false);
      setActiveDropdown(null);
    } else {
      setIsDropdownSticky(true);
      setActiveDropdown(dropdownName);
    }
  };

  // Dropdown hover handler
  const handleDropdownHover = (dropdownName) => {
    if (!isDropdownSticky) {
      setActiveDropdown(dropdownName);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    setActiveDropdown(null);
    setIsDropdownSticky(false);
  };

  // Navigate to Help & Support page
  const handleHelpSupportClick = () => {
    navigate('/help');
  };

  // Logout functionality
  const handleLogout = async () => {
  try {
    
    const response = await axios.post(
      'http://localhost:5000/api/auth/logout',
      {}, 
      { withCredentials: true } 
    );

  
    sessionStorage.clear();
    alert('You have been logged out successfully!');
    navigate('/');
  } catch (error) {
    // Log detailed error for debugging
    console.error('Error during logout:', error.response?.data || error.message);

    // Display appropriate error message to user
    alert(
      error.response?.data?.message ||
      'An error occurred while logging out. Please try again.'
    );
  }
};



  // Features dropdown items
  const features = [
    { label: 'Real-Time Tracking', icon: <Clock size={18} />, path: '/features/real-time-tracking' },
    { label: 'AI Fraud Detection', icon: <Brain size={18} />, path: '/features/ai-fraud-detection'},
    { label: 'Automated Auditing', icon: <FileCheck size={16} />, path: '/features/automated-auditing' },
  ];

  // Services dropdown items
  const services = [
    { label: 'Savings Management', icon: <PiggyBank size={18} />, path: '/dashboard' },
    { label: 'Lending Services', icon: <Landmark size={18} />, path: '/lending' },
    { label: 'Payment Services', icon: <CreditCard size={18} />, path: '/transactions' },
  ];

  // User menu dropdown items
  const userMenuItems = [
    { label: 'User Profile', icon: <User size={18} />, path: '/groups/member/:memberId' },
    { label: 'Settings', icon: <Settings size={18} />, path: '/settings' },
    { label: 'Security', icon: <Shield size={18} />, path: '/security' },
    { label: 'Logout', icon: <LogOut size={18} />, onClick: handleLogout },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          {/* Logo and Brand */}
          <div className="brand-container">
            <a href="/" className="brand-link">
              <div className="logo-wrapper">
                <img src={logo} alt="Logo" className="logo-image" />
              </div>
              <span className="brand-name">UnitySaver</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <a href="/" className="nav-link nav-glow">Home</a>

            {/* Features Dropdown */}
            <div
              className="nav-item"
              onMouseEnter={() => handleDropdownHover('features')}
              onMouseLeave={() => !isDropdownSticky && setActiveDropdown(null)}
              onClick={() => handleDropdownClick('features')}
            >
              <span className={`nav-link nav-glow ${activeDropdown === 'features' ? 'active' : ''}`}>
                Features
                <ChevronDown size={16} />
              </span>
              {activeDropdown === 'features' && (
                <div className="dropdown-menu">
                {features.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavigation(item.path)}
                    className="dropdown-item"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="nav-item"
              onMouseEnter={() => handleDropdownHover('services')}
              onMouseLeave={() => !isDropdownSticky && setActiveDropdown(null)}
              onClick={() => handleDropdownClick('services')}
            >
              <span className={`nav-link nav-glow ${activeDropdown === 'services' ? 'active' : ''}`}>
                Services
                <ChevronDown size={16} />
              </span>
              {activeDropdown === 'services' && (
                <div className="dropdown-menu">
                  {services.map((item) => (
                    <a key={item.label} href={item.path} className="dropdown-item">
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Group Link */}
            <a href="/groups" className="nav-link nav-glow">
              <Group size={18} />
              Group
            </a>

            {/* User Dropdown */}
            <div
              className="nav-item"
              onMouseEnter={() => handleDropdownHover('user')}
              onMouseLeave={() => !isDropdownSticky && setActiveDropdown(null)}
              onClick={() => handleDropdownClick('user')}
            >
              <span className={`nav-link nav-glow ${activeDropdown === 'user' ? 'active' : ''}`}>
                <User size={18} />
                <ChevronDown size={16} />
              </span>
              {activeDropdown === 'user' && (
                <div className="dropdown-menu user-dropdown">
                  {userMenuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.path}
                      className="dropdown-item"
                      onClick={
                        item.onClick ? (e) => {
                          e.preventDefault();
                          item.onClick();
                        } : undefined
                      }
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Help & Support Button */}
            <button
              className="help-support-button"
              onClick={handleHelpSupportClick}
            >
              <HelpCircle size={18} />
              Help & Support
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mobile-nav">
            {[...features, ...services].map((item) => (
              item.path ? (
                <a key={item.label} href={item.path} className="mobile-nav-link">
                  {item.icon}
                  {item.label}
                </a>
              ) : null
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
