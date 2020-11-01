import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="bg-blue-100 hover:bg-blue-200 border-2 border-blue-500 hover:border-blue-500 text-blue-500 hover:text-blue-500 text-xs font-bold px-2 py-1 rounded-full cursor-pointer transition-colors duration-200">
      {text}
    </button>
  );
};

export default Button;
