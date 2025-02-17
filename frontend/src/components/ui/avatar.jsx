import React from 'react';

const Avatar = ({ src, alt, size = '40px', className = '' }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: size, height: size }}
      className={`rounded-full ${className}`}
    />
  );
};

export default Avatar;