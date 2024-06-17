import React, { useState, useEffect, useMemo } from 'react';

const Typewriter = ({ speed = 200 }) => {
    const words = useMemo(() => ["Batsman on strike",
        "Boundary hit",
        "Caught behind",
        "Run out",
        "No ball",
        "Wide delivery",
        "Clean bowled",
        "Umpire signals",
        "Big appeal",
        "Powerplay overs",
        "Helmet worn",
        "Spin bowler",
        "Slog sweep",
        "Quick single",
        "Duck ball",
        "Yorker length",
        "Reverse swing",
        "T20 format",
        "Maiden over",
        "Pitch condition"], []);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayedWord, setDisplayedWord] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            const currentWord = words[currentWordIndex];

            if (!isDeleting && currentCharIndex === currentWord.length) {
                setIsDeleting(true);
            } else if (isDeleting && currentCharIndex === 0) {
                setIsDeleting(false);
                const randomIndex = Math.floor(Math.random() * words.length);
                setCurrentWordIndex(randomIndex);
            }

            setCurrentCharIndex((prevIndex) =>
                isDeleting ? prevIndex - 1 : prevIndex + 1
            );
        }, speed);

        return () => clearTimeout(timeout);
    }, [currentCharIndex, currentWordIndex, isDeleting, speed, words]);

    useEffect(() => {
        const currentWord = words[currentWordIndex];
        setDisplayedWord(
            isDeleting
                ? currentWord.substring(0, currentCharIndex)
                : currentWord.substring(0, currentCharIndex + 1)
        );
    }, [currentCharIndex, currentWordIndex, isDeleting, words]);

    return (
        <h1 className="typewriter">
            <strong>{displayedWord}</strong>
            <span className="cursor">_</span>
        </h1>
    );
};

export default Typewriter;
