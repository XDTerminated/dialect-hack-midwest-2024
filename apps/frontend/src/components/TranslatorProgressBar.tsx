import React, { useState, useCallback, useEffect } from "react";
import { Progress } from "@/components/ui/Progress";
import { fetchResponse } from "@/api/fetchResponse";
import TranslateButton from "@/components/ui/TranslateButton";

const TranslatorApp = () => {
    const [text, setText] = useState("");
    const [isTranslating, setIsTranslating] = useState(false);
    const [progressValue, setProgressValue] = useState(0);
    const [translatedText, setTranslatedText] = useState("");

    useEffect(() => {
        console.log("isTranslating state changed:", isTranslating);
    }, [isTranslating]);

    // const handleTranslate = useCallback(async () => {
    //     console.log("handleTranslate called");
    //     if (isTranslating) {
    //         console.log("Translation already in progress, returning early");
    //         return;
    //     }

    //     setIsTranslating(true);
    //     setProgressValue(0);
    //     console.log("Starting translation, isTranslating set to true");

    //     const progressInterval = setInterval(() => {
    //         setProgressValue((prev) => {
    //             const newValue = Math.min(prev + 10, 90);
    //             console.log("Progress updated:", newValue);
    //             return newValue;
    //         });
    //     }, 100);

    //     try {
    //         console.log("Fetching translation");
    //         const response = await fetchResponse(text);

    //         if (response.success) {
    //             console.log("Translation successful");
    //             setTranslatedText(response.data as string);
    //         } else {
    //             console.log("Translation failed");
    //             setTranslatedText("Error translating text.");
    //         }
    //     } catch (error) {
    //         console.error("Translation error:", error);
    //         setTranslatedText("Error translating text.");
    //     } finally {
    //         clearInterval(progressInterval);
    //         setProgressValue(100);
    //         console.log("Translation process completed, progress set to 100");

    //         setTimeout(() => {
    //             setIsTranslating(false);
    //             console.log("isTranslating set back to false");
    //         }, 500);
    //     }
    // }, [text, isTranslating]);

    const handleTranslate = useCallback(async () => {
        console.log("handleTranslate called");
        if (isTranslating) {
            console.log("Translation already in progress, returning early");
            return;
        }

        setIsTranslating(true);
        setProgressValue(0);
        console.log("Starting translation, isTranslating set to true");

        const progressInterval = setInterval(() => {
            setProgressValue((prev) => {
                const newValue = Math.min(prev + 10, 90);
                console.log("Progress updated:", newValue);
                return newValue;
            });
        }, 100);

        try {
            const translate1 = "English"; // or whichever language you want
            const translate2 = "Spanish"; // or another target language
            const description1 = "US"; // a description for translate1
            const description2 = "ES"; // a description for translate2

            console.log("Fetching translation");
            const response = await fetchResponse(text, translate1, translate2, description1, description2);

            if (response.success) {
                console.log("Translation successful");
                setTranslatedText(response.data as string);
            } else {
                console.log("Translation failed");
                setTranslatedText("Error translating text.");
            }
        } catch (error) {
            console.error("Translation error:", error);
            setTranslatedText("Error translating text.");
        } finally {
            clearInterval(progressInterval);
            setProgressValue(100);
            console.log("Translation process completed, progress set to 100");

            setTimeout(() => {
                setIsTranslating(false);
                console.log("isTranslating set back to false");
            }, 500);
        }
    }, [text, isTranslating]);

    return (
        <div className="p-4">
            {isTranslating && (
                <div className="mb-4">
                    <Progress value={progressValue} />
                </div>
            )}

            <textarea className="w-full h-32 p-2 border" value={text} onChange={(e) => setText(e.target.value)} disabled={isTranslating} />

            <TranslateButton onClick={handleTranslate} disabled={isTranslating} isTranslating={isTranslating} />

            {translatedText && (
                <div className="mt-4 p-2 bg-gray-100 border">
                    <strong>Translated Text:</strong> {translatedText}
                </div>
            )}

            <div className="mt-4">
                <strong>Debug Info:</strong> isTranslating: {isTranslating.toString()}, Progress: {progressValue}
            </div>
        </div>
    );
};

export default TranslatorApp;
