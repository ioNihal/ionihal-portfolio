import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

const getRandomChar = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return chars[Math.floor(Math.random() * chars.length)];
};

const encryptText = (text, step) => {
    const chars = text.split('');
    return chars.map((char, index) => {
        if (index < step) return char;
        return getRandomChar();
    }).join('');
};

const TextLine = ({ text, duration, onComplete }) => {
    const [displayText, setDisplayText] = useState(encryptText(text, 0));
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (step < text.length) {
            const timeout = setTimeout(() => {
                const nextStep = step + 1;
                setDisplayText(encryptText(text, nextStep));
                setStep(nextStep);
            }, duration / text.length);

            return () => clearTimeout(timeout);
        } else {
            onComplete();
        }
    }, [text, duration, step, onComplete]);

    return <span className='stroke-text'>{displayText}</span>;
};

const TextAni = ({ texts, duration }) => {
    const [index, setIndex] = useState(0);

    const handleComplete = () => {
        setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 500);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, duration + 1000);

        return () => clearInterval(interval);
    }, [texts, duration]);

    return (
        <>
            {/* Add a key prop to force remounting when index changes */}
            <TextLine key={index} text={texts[index]} duration={duration} onComplete={handleComplete} />
        </>
    );
};

export default TextAni;
