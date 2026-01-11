// TrashButton.js
import React from 'react';
import { FaTrash } from 'react-icons/fa';

interface TrashButtonProps {
    onClick: () => void;
    disabled: boolean;
}

const TrashButton : React.FC<TrashButtonProps> = ({onClick, disabled}) => {
  return (
    <button
      onClick={onClick}
      disabled = {disabled}
      className={`
        absolute bottom-4 right-4 text-gray-500 
        ${disabled ? "text-gray-300 cursor-not-allowed" : "hover:text-gray-700 transition"}
      `}
      style={{ fontSize: "1.5rem" }}
    >
      <FaTrash />
    </button>
  );
};

export default TrashButton;
