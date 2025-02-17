import React from 'react';

const Switch = ({ isOn, onToggle, className = '' }) => {
  return (
    <div
      onClick={onToggle}
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${
        isOn ? 'bg-blue-500' : 'bg-gray-300'
      } ${className}`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
          isOn ? 'translate-x-6' : ''
        }`}
      />
    </div>
  );
};

export default Switch;