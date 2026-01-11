import React from "react";

interface TranslateButtonProps {
    onClick: () => void;
    disabled: boolean;
    isTranslating: boolean;
}

const TranslateButton: React.FC<TranslateButtonProps> = ({ onClick, disabled, isTranslating }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                flex-1 
                flex 
                items-center 
                justify-center 
                ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-[#3498db] hover:bg-[#2980b9] active:bg-[#1e6a92]"}
                text-white 
                p-3 
                rounded 
                transition 
                duration-300
                text-xl
            `}
        >
            {isTranslating ? "Translating..." : "Translate"}
        </button>
    );
};

export default TranslateButton;
