import React, { useState } from 'react';
import { 
  HelpCircle, 
  Book, 
  MessageCircle, 
  PlayCircle, 
  Search,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Lock,
  TrendingUp,
  Users,
  Calculator
} from 'lucide-react';
import '../../styles/components/help.css';

const HelpSupport = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: "How do I create a new savings group?",
      answer: "To create a new savings group, click the 'Create Group' button on your dashboard. Follow the setup wizard to define group rules, invite members, and set contribution schedules."
    },
    {
      question: "What payment methods are supported?",
      answer: "We currently support UPI payments, net banking, and major debit/credit cards. All transactions are secured and verified in real-time."
    },
    {
      question: "How is my data protected?",
      answer: "We use bank-grade encryption and AI-powered security systems to protect all transactions and personal data. Regular security audits ensure your information stays safe."
    },
    {
      question: "How does the loan application process work?",
      answer: "Members can apply for loans through their group dashboard. The application requires providing purpose, amount, and repayment terms. Group administrators review and approve loans based on group rules and member contribution history."
    },
    {
      question: "What are the interest rates and repayment terms for loans?",
      answer: "Interest rates are set by each group independently, typically ranging from 5-15% annually. Repayment terms are flexible and can be customized based on group policies and loan amount. All terms are transparently displayed before loan approval."
    }
  ];

  const guides = [
    {
      title: "Getting Started Guide",
      description: "Learn the basics of group savings and lending",
      icon: <Book className="guide-icon" />
    },
    {
      title: "Security Best Practices",
      description: "Keep your account and transactions secure",
      icon: <Lock className="guide-icon" />
    },
    {
      title: "Managing Group Finances",
      description: "Tips for effective group financial management",
      icon: <TrendingUp className="guide-icon" />
    }
  ];

  const tutorials = [
    {
      title: "Group Creation Tutorial",
      duration: "5:30",
      thumbnail: "/api/placeholder/320/180"
    },
    {
      title: "Managing Transactions",
      duration: "4:15",
      thumbnail: "/api/placeholder/320/180"
    },
    {
      title: "Security Features Overview",
      duration: "6:45",
      thumbnail: "/api/placeholder/320/180"
    }
  ];

  const tools = [
    {
      title: "Loan Calculator",
      description: "Calculate loan EMIs and total interest",
      icon: <Calculator className="tool-icon" />,
      link: "/tools/loan-calculator"
    },
    {
      title: "Group Analytics",
      description: "Track group savings and lending patterns",
      icon: <TrendingUp className="tool-icon" />,
      link: "/tools/analytics"
    },
    {
      title: "Member Directory",
      description: "Manage and connect with group members",
      icon: <Users className="tool-icon" />,
      link: "/tools/members"
    }
  ];

  return (
    <div className="help-page">
      <div className="container">
        <h1 className="page-title">Help & Support</h1>

        {/* Search Bar */}
        <div className="search-container">
          <div className="search-wrapper">
            <Search className="search-icon" />
            <input 
              type="text"
              className="search-input"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="card">
          <div className="card-header">
            <HelpCircle className="section-icon" />
            <h2 className="card-title">Frequently Asked Questions</h2>
          </div>
          <div className="card-content">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <span>{faq.question}</span>
                    {expandedFaq === index ? 
                      <ChevronUp className="faq-icon" /> :
                      <ChevronDown className="faq-icon" />
                    }
                  </button>
                  {expandedFaq === index && (
                    <p className="faq-answer">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User Guides */}
        <div className="card">
          <div className="card-header">
            <Book className="section-icon" />
            <h2 className="card-title">User Guides</h2>
          </div>
          <div className="card-content">
            <div className="guides-grid">
              {guides.map((guide, index) => (
                <div key={index} className="guide-card">
                  <div className="guide-header">
                    {guide.icon}
                    <h3 className="guide-title">{guide.title}</h3>
                  </div>
                  <p className="guide-description">{guide.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Financial Tools Section */}
        <div className="card">
          <div className="card-header">
            <Calculator className="section-icon" />
            <h2 className="card-title">Financial Tools</h2>
          </div>
          <div className="card-content">
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div key={index} className="tool-card">
                  <div className="tool-header">
                    {tool.icon}
                    <h3 className="tool-title">{tool.title}</h3>
                  </div>
                  <p className="tool-description">{tool.description}</p>
                  <a href={tool.link} className="tool-link">
                    <span>Access Tool</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="card">
          <div className="card-header">
            <MessageCircle className="section-icon" />
            <h2 className="card-title">Contact Support</h2>
          </div>
          <div className="card-content">
            <div className="contact-container">
              <p className="contact-text">
                Need additional help? Our support team is available 24/7 to assist you.
              </p>
              <div className="contact-buttons">
                <button className="btn-primary">
                  <MessageCircle className="btn-icon" />
                  Start Live Chat
                </button>
                <button className="btn-secondary">
                  <ExternalLink className="btn-icon" />
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
