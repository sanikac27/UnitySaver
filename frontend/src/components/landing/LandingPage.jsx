import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Shield, Users, TrendingUp, Lock, ChartBar, Building, Smartphone, Globe } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { useInView } from 'react-intersection-observer';
import '../../styles/components/landing.css';
import AuthModal from './AuthModal';

const LandingPage = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const features = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "AI-Powered Security",
      description: "Advanced anomaly detection and real-time transaction monitoring powered by machine learning algorithms to prevent financial fraud"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Group Management",
      description: "Create and manage savings groups with transparent policies, automated auditing, and clear financial reporting"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Track Progress",
      description: "Monitor savings goals and lending activities with detailed analytics and real-time transaction tracking"
    },
    {
      icon: <Lock className="w-10 h-10" />,
      title: "Secure Transactions",
      description: "UPI-integrated payment system with end-to-end verification and digital ledger for transparent record-keeping"
    }
  ];

  const benefits = [
    {
      icon: <ChartBar className="w-10 h-10" />,
      title: "Financial Inclusion",
      description: "Promoting digital financial tools for underserved communities"
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: "Trust Building",
      description: "Enhanced accountability and transparency in group activities"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Digital First",
      description: "Modern UPI-based solution for seamless transactions"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Community Focused",
      description: "Designed for both urban and rural group savings needs"
    }
  ];

  const FeatureSection = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true
    });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div 
        ref={ref}
        className="features-grid"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }
              }
            }}
            className="feature-item"
          >
            <Card className="feature-card">
              <CardHeader>
                <div className="feature-content">
                  <motion.div 
                    className="feature-icon-wrapper"
                    whileHover={{ scale: 1.1 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div className="feature-text">
                    <CardTitle className="feature-title">{feature.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="feature-description">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  const BenefitsSection = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      threshold: 0.2,
      triggerOnce: true
    });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div 
        ref={ref}
        className="benefits-section"
        initial="hidden"
        animate={controls}
      >
        <motion.h2 
          className="benefits-title"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Why Choose UnitySaver?
        </motion.h2>
        <motion.div 
          className="benefits-grid"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 12
                  }
                }
              }}
              className="benefit-item"
            >
              <div className="benefit-icon-wrapper">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="landing-page">
      <div className="hero-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Secure Group Savings & Lending
          </h1>
          <p className="hero-description">
            Transform your group savings with AI-powered security and complete transparency. 
            Build trust through automated monitoring and real-time tracking.
          </p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAuthModalOpen(true)}
          >
            Get Started Now
          </motion.button>
        </motion.div>

        <FeatureSection />
        <BenefitsSection />

        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
        />
      </div>
    </div>
  );
};

export default LandingPage;