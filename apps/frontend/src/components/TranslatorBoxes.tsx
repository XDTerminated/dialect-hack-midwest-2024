import React, { useState } from "react";
import { NonEditableTextarea, Textarea } from "./ui/Textarea";
import Dropdown from "./ui/Dropdown";
import SwitchButton from "./ui/SwitchButton";
import TranslateButton from "./ui/TranslateButton";
import { fetchResponse } from "../api/fetchResponse";
import { Progress } from "./ui/Progress";
import { FaRegClipboard } from "react-icons/fa";
import TrashButton from "./ui/TrashButton";
import CopyButton from "./ui/CopyButton";

interface DropdownItem {
    label: string;
    description: string;
}

const TranslatorBoxes = () => {
    // State for dropdown items
    const [dropdownItems1, setDropdownItems1] = useState<DropdownItem[]>([
        { label: "English", description: "" },
        { label: "Shakespearean", description: "" },
        { label: "Gen Alpha", description: "" },
    ]);
    const [dropdownItems2, setDropdownItems2] = useState<DropdownItem[]>([
        { label: "English", description: "" },
        { label: "Shakespearean", description: "" },
        { label: "Gen Alpha", description: "" },
    ]);

    // State for selected values
    const [selectedValue1, setSelectedValue1] = useState("English");
    const [selectedValue2, setSelectedValue2] = useState("Shakespearean");
    const [selectedDescription1, setSelectedDescription1] = useState("");
    const [selectedDescription2, setSelectedDescription2] = useState("");

    // State to hold the content of the editable Textarea
    const [textareaValue, setTextareaValue] = useState("");
    // State to hold the content of the non-editable Textarea (translation result)
    const [translationValue, setTranslationValue] = useState("");
    // State to track if translation is in progress
    const [isTranslating, setIsTranslating] = useState(false);
    // State for progress bar value
    const [progressValue, setProgressValue] = useState(0);
    const [isFlashing, setIsFlashing] = useState(false);

    // Handle Switching Selected Components
    const handleSwitch = () => {
        // Swap dropdown items
        setDropdownItems1((prevItems1) => {
            setDropdownItems2(() => {
                return [...prevItems1];
            });
            return [...dropdownItems2];
        });

        // Swap selected values
        const tempValue = selectedValue1;
        setSelectedValue1(selectedValue2);
        setSelectedValue2(tempValue);

        // Swap descriptions
        const tempDescription = selectedDescription1;
        setSelectedDescription1(selectedDescription2);
        setSelectedDescription2(tempDescription);

        const tempTextareaValue = textareaValue;
        setTextareaValue(translationValue);
        setTranslationValue(tempTextareaValue);
    };

    // Handler for dropdown selection
    const handleSelect1 = (label: string, description?: string) => {
        setSelectedValue1(label);
        setSelectedDescription1(description || "");
        setDropdownItems1((prevItems) => {
            const updatedItems = prevItems.map((item) => (item.label === label ? { ...item, description: description || "" } : item));
            if (!prevItems.some((item) => item.label === label)) {
                updatedItems.unshift({ label, description: description || "" });
            }
            return updatedItems;
        });
    };

    const handleSelect2 = (label: string, description?: string) => {
        setSelectedValue2(label);
        setSelectedDescription2(description || "");
        setDropdownItems2((prevItems) => {
            const updatedItems = prevItems.map((item) => (item.label === label ? { ...item, description: description || "" } : item));
            if (!prevItems.some((item) => item.label === label)) {
                updatedItems.unshift({ label, description: description || "" });
            }
            return updatedItems;
        });
    };

    // Handler for Translate button click
    const handleTranslateClick = async () => {
        if (textareaValue.length > 0) {
            try {
                setIsTranslating(true);
                setProgressValue(0);

                const progressInterval = setInterval(() => {
                    setProgressValue((prev) => Math.min(prev + 10, 100));
                }, 100);

                const result = await fetchResponse(textareaValue, selectedValue1, selectedValue2, selectedDescription1, selectedDescription2);
                type ResultType = {
                    response?: string;
                };

                const typedResult = result as ResultType;
                const extractedText = typedResult.response || "No content available";

                console.log(extractedText);
                setTranslationValue(extractedText);

                clearInterval(progressInterval);
                setProgressValue(100);

                setTimeout(() => {
                    setIsTranslating(false);
                }, 500);
            } catch (error) {
                console.error("Error:", error);
                setTranslationValue("An error occurred during translation.");
                setIsTranslating(false);
            }
        } else {
            setTranslationValue("");
        }
    };

    // Function to clear the textarea

    const handleClearText = () => {
        setTextareaValue("");
        setTranslationValue("");
    };

    // Function to copy the translation text
    const handleCopyText = () => {
        navigator.clipboard.writeText(translationValue);
        setIsFlashing(true);
        setTimeout(() => setIsFlashing(false), 500);
    };

    return (
        <div className="p-4 flex flex-col justify-center items-start space-y-4 flex-[10_0_0%]">
            {/* Progress Bar */}
            {isTranslating && (
                <div className="w-full mb-4">
                    <Progress value={progressValue} />
                </div>
            )}

            {/* Flex Row for Dropdowns */}
            <div className="flex space-x-4 flex-1 w-full">
                <Dropdown label={selectedValue1} items={dropdownItems1} onSelect={handleSelect1} disabled={isTranslating} />
                <SwitchButton onClick={handleSwitch} disabled={isTranslating} />
                <Dropdown label={selectedValue2} items={dropdownItems2} onSelect={handleSelect2} disabled={isTranslating} />
            </div>

            {/* Flex Row for Textareas */}
            <div className="flex space-x-4 flex-[20_0_0%] w-full">
                {/* Editable Textarea (Left Box) */}
                <div className="relative flex-grow flex">
                    <Textarea className="rounded-md border border-input bg-background text-xl ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed resize-none" placeholder="Type here..." value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)} disabled={isTranslating} />
                    <TrashButton onClick={handleClearText} disabled={isTranslating} />
                </div>

                {/* Non-editable Textarea (Right Box) */}
                <div className="relative flex-grow flex">
                    <NonEditableTextarea className="rounded-md border border-input bg-background text-xl ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed opacity-100 resize-none" placeholder="Translation will appear here..." disabled={isTranslating} value={translationValue} readOnly />
                    <div className="absolute bottom-4 right-4 flex space-x-2 text-gray-500 hover:text-gray-700">
                        <FaRegClipboard
                            style={{
                                fontSize: "1.5rem",
                                opacity: isFlashing ? 1 : 0,
                                transition: "opacity 0.5s ease",
                            }}
                        />

                        <CopyButton onClick={handleCopyText} disabled={isTranslating} />
                    </div>
                </div>
            </div>

            {/* Translate Button */}
            <div className="flex space-x-4 flex-1 w-full">
                <TranslateButton onClick={handleTranslateClick} disabled={isTranslating} isTranslating={isTranslating} />
            </div>
        </div>
    );
};

export default TranslatorBoxes;
