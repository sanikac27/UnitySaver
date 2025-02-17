import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  X,
  User,
  Users,
  Lock,
  Mail,
  Eye,
  EyeOff,
  MapPin,
  Phone,
} from 'lucide-react';
import '../../styles/components/auth-modal.css';

const UserAuthForm = ({
  isLogin,
  formData,
  handleInputChange,
  handleSubmit,
  showPassword,
  setShowPassword,
  errorMessage,
  setIsLogin,
}) => (
  <form className="auth-form" onSubmit={handleSubmit}>
    {!isLogin && (
      <>
        <div className="form-group">
          <label>Full Name</label>
          <div className="input-wrapper">
            <User className="input-icon" size={18} />
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Location</label>
          <div className="input-wrapper">
            <MapPin className="input-icon" size={18} />
            <input
              type="text"
              name="location"
              placeholder="Enter your location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <div className="input-wrapper">
            <Phone className="input-icon" size={18} />
            <input
              type="tel"
              name="mobile"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </>
    )}
    <div className="form-group">
      <label>Email</label>
      <div className="input-wrapper">
        <Mail className="input-icon" size={18} />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
    <div className="form-group">
      <label>Password</label>
      <div className="input-wrapper">
        <Lock className="input-icon" size={18} />
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button
          type="button"
          className="password-toggle"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
    {errorMessage && <p className="error-message">{errorMessage}</p>}
    <button type="submit" className="submit-button">
      {isLogin ? 'Login' : 'Register'}
    </button>
    <p className="auth-switch">
      {isLogin ? "Don't have an account? " : "Already have an account? "}
      <button type="button" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Register' : 'Login'}
      </button>
    </p>
  </form>
);

const AuthModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [authType, setAuthType] = useState(null); // Admin or User selection
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    location: '',
    mobile: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const resetState = () => {
    setAuthType(null);
    setIsLogin(true);
    setFormData({ name: '', email: '', password: '', location: '', mobile: '' });
    setErrorMessage('');
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    if (!formData.email || !formData.password) {
      setErrorMessage('Email and password are required.');
      return false;
    }
    if (!isLogin && (!formData.name || !formData.location || !formData.mobile)) {
      setErrorMessage('All fields are required for registration.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      'http://localhost:5000/api/auth/login',
      { email: formData.email, password: formData.password },
      { withCredentials: true } // Include cookies for session handling
    );

    alert('Login successful!');
    localStorage.setItem('token', response.data.token);
    navigate('/dashboard');
  } catch (error) {
    console.error('Error during submission:', error.response?.data || error.message);

    if (error.response?.status === 403) {
      setErrorMessage('User already logged in elsewhere.');
    } else if (error.response?.status === 401) {
      setErrorMessage('Invalid credentials.');
    } else if (error.response?.status === 404) {
      setErrorMessage('User not found.');
    } else {
      setErrorMessage('An unexpected error occurred.');
    }
  }
};

  const SelectionScreen = () => (
    <div className="auth-selection">
      <button className="selection-button" onClick={() => setAuthType('admin')}>
        <Users size={24} />
        <span>Admin Login</span>
      </button>
      <button className="selection-button" onClick={() => setAuthType('user')}>
        <User size={24} />
        <span>User Login</span>
      </button>
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            <button className="close-button" onClick={handleClose}>
              <X size={24} />
            </button>
            <div className="modal-header">
              {authType ? (
                <>
                  <h2>
                    {authType === 'admin'
                      ? 'Admin Authentication'
                      : 'User Authentication'}
                  </h2>
                  <button
                    className="back-button"
                    onClick={() => setAuthType(null)}
                  >
                    Back to selection
                  </button>
                </>
              ) : (
                <h2>Welcome to UnitySaver</h2>
              )}
            </div>
            <div className="modal-body">
              {authType ? (
                <UserAuthForm
                  isLogin={isLogin}
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  errorMessage={errorMessage}
                  setIsLogin={setIsLogin}
                />
              ) : (
                <SelectionScreen />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
