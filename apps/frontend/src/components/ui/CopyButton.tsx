import React from 'react';
import { FaRegCopy } from 'react-icons/fa';

interface CopyButtonProps {
    onClick: () => void;
    disabled: boolean;
}

const CopyButton : React.FC<CopyButtonProps> = ({onClick, disabled}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        text-gray-500 
        ${disabled ? "text-gray-300 cursor-not-allowed" : "hover:text-gray-700 transition"}
      `}
      style={{ fontSize: "1.5rem" }}
    >
      <FaRegCopy />
    </button>
  );
};

export default CopyButton;
