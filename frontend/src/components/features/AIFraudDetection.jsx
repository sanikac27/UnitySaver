import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { PieChart, Pie, Cell, Legend, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { AlertCircle, ShieldCheck, TrendingUp, AlertTriangle } from 'lucide-react';
import '../../styles/components/aifrauddetection.css';

const AIFraudDetection = () => {
  const pieData = [
    { name: 'Legitimate', value: 92 },
    { name: 'Suspicious', value: 8 }
  ];

  const fraudTrendData = [
    { month: 'Jan', legitimate: 95, suspicious: 5 },
    { month: 'Feb', legitimate: 93, suspicious: 7 },
    { month: 'Mar', legitimate: 94, suspicious: 6 },
    { month: 'Apr', legitimate: 92, suspicious: 8 }
  ];

  const PIE_COLORS = ['#22d3ee', '#f97316'];
  const BAR_COLORS = ['#22d3ee', '#f97316'];

  const stats = [
    {
      title: 'Total Transactions',
      value: '2,847',
      icon: TrendingUp,
      description: 'Last 24 hours'
    },
    {
      title: 'Fraud Alerts',
      value: '24',
      icon: AlertCircle,
      description: 'Requires review'
    },
    {
      title: 'Risk Score',
      value: 'Low',
      icon: ShieldCheck,
      description: 'System status normal'
    },
    {
      title: 'High-Risk Cases',
      value: '3',
      icon: AlertTriangle,
      description: 'Immediate action needed'
    }
  ];

  const StatsSection = () => {
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
        className="stats-grid"
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
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
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
          >
            <Card className="stats-card">
              <CardContent className="stats-content">
                <motion.div
                  className="stats-icon-wrapper"
                  whileHover={{ scale: 1.1 }}
                >
                  <stat.icon className="h-6 w-6" />
                </motion.div>
                <p className="stats-title">{stat.title}</p>
                <p className="stats-value">{stat.value}</p>
                <p className="stats-description">{stat.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  const ChartsSection = () => {
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
        className="charts-grid"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
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
        >
          <Card className="chart-card">
            <CardHeader className="p-0">
              <CardTitle className="chart-title">Transaction Distribution</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="chart-container">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
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
        >
          <Card className="chart-card">
            <CardHeader className="p-0">
              <CardTitle className="chart-title">Monthly Fraud Trends</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="chart-container">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={fraudTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />
                    <Bar dataKey="legitimate" name="Legitimate" fill={BAR_COLORS[0]} />
                    <Bar dataKey="suspicious" name="Suspicious" fill={BAR_COLORS[1]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="fraud-detection-dashboard">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <StatsSection />
        <ChartsSection />
      </motion.div>
    </div>
  );
};

export default AIFraudDetection;