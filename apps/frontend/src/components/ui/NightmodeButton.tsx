// "use client";
// import React, { useEffect, useState } from "react";
// import { BsMoonStarsFill } from "react-icons/bs";
// import { MdOutlineWbSunny } from "react-icons/md";

// const NightmodeButton = () => {
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     useEffect(() => {
        // if (isDarkMode) {
        //     document.body.style.color = "#333333";
        //     document.body.style.backgroundColor = "#FFFFFF";
        // } else {
        //     document.body.style.color = "#FFFFFF";
        // //     document.body.style.backgroundColor = "#333333";
        // }
//     }, [isDarkMode]);

//     const toggleDarkMode = () => {
//         setIsDarkMode(!isDarkMode);
//     };

//     return (
//         <button
//             onClick={toggleDarkMode}
//             style={{
//                 position: "fixed",
//                 bottom: "5vh", 
//                 right: "5vw", 
//                 padding: "1rem", 
//                 fontSize: "2.5rem", 
//                 fontWeight: "normal",
//                 backgroundColor: isDarkMode ? "#6CB4EE" : "#FFD700",
//                 color: isDarkMode ? "#333333" : "#FFFFFF",
//                 border: "none",
//                 borderRadius: "50%",
//                 cursor: "pointer",
//                 width: "4rem", 
//                 height: "4rem", 
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
//                 transition: "background-color 0.3s, color 0.3s", 
//             }}
//         >
//             {isDarkMode ? <BsMoonStarsFill /> : <MdOutlineWbSunny />}
//         </button>
//     );
// };

// export default NightmodeButton;

"use client";
import React, { useEffect, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";

const NightmodeButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
        onClick={toggleDarkMode}
        className={`
            p-4
            text-4xl font-normal
            ${isDarkMode ? 'bg-[#6CB4EE] text-gray-800' : 'bg-[#FFD700] text-white'}
            rounded-full cursor-pointer
            w-16 h-16
            flex justify-center items-center
            shadow-lg
            transition-colors duration-300
        `}
        >
            {isDarkMode ? <BsMoonStarsFill /> : <MdOutlineWbSunny />}
        </button>
    );
};

export default NightmodeButton;
