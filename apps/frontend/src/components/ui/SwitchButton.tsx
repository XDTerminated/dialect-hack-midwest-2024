// SwitchButton.tsx
import React from "react";
import { GoArrowSwitch } from "react-icons/go";

interface SwitchButtonProps {
    onClick: () => void;
}

interface SwitchButtonProps {
    onClick: () => void;

    disabled?: boolean;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ color: "white" }} // Inline style to set text color to white
            className="
        flex-1 
        flex 
        items-center 
        justify-center 
        bg-[#3498db] 
        hover:bg-[#2980b9] 
        active:bg-[#1e6a92]
        p-3 
        rounded 
        transition 
        duration-300
      "
        >
            <GoArrowSwitch size={24} />
        </button>
    );
};

export default SwitchButton;
