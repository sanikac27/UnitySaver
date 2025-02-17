import React, { useState } from 'react';

const DropdownMenu = ({ options, onSelect, placeholder = 'Select an option' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onSelect?.(option);
  };

  return (
    <div className="relative">
      <button 
        className="bg-gray-200 p-2 rounded-md w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected || placeholder}
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white shadow-md rounded-md mt-1">
          {options.map((option, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;