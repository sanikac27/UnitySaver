import React from 'react';
import './card.css'; // Optional: Add styles for the Card components

export const Card = ({ children, className }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export const CardHeader = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

export const CardTitle = ({ children }) => {
  return <h3 className="card-title">{children}</h3>;
};

export const CardContent = ({ children }) => {
  return <div className="card-content">{children}</div>;
};
