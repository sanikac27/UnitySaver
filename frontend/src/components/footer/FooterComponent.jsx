import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import '../../styles/components/footer.css';

const Footer = () => {
  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Group', href: '/blog' },
    { label: 'Help Center', href: '/help' }
  ];

  const legalLinks = [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Security', href: '/security' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Compliance', href: '/compliance' }
  ];

  const socialLinks = [
    { icon: <Facebook className="social-icon-svg" />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <Twitter className="social-icon-svg" />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Instagram className="social-icon-svg" />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Linkedin className="social-icon-svg" />, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-heading">UnitySaver</h3>
            <p className="footer-description">
              Empowering groups with secure and transparent financial management solutions.
            </p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-list">
              <li className="contact-item">
                <Mail className="contact-icon" />
                <a href="mailto:support@unitysaver.com" className="footer-link">
                  support@unitysaver.com
                </a>
              </li>
              <li className="contact-item">
                <Phone className="contact-icon" />
                <a href="tel:+1234567890" className="footer-link">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="contact-item">
                <MapPin className="contact-icon" />
                <span className="contact-text">
                  123 Financial District,<br />Mumbai, India
                </span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-list">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              © 2025 UnitySaver. All rights reserved.
            </div>
            <div className="version-info">
              <span>Version 1.1.0</span>  
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;