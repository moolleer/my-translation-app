"use client";

import React, { useEffect, useState } from 'react';

const LanguageSelector = () => {
    // Initialize state with a function to get the value from localStorage
    /* const [selectedLanguage, setSelectedLanguage] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('language') || 'en';
        }
        return 'en'; // Fallback for SSR or initial render
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLanguage = localStorage.getItem('language');
            if (storedLanguage && storedLanguage !== selectedLanguage) {
                setSelectedLanguage(storedLanguage);
            }
        }
    }, []);

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        localStorage.setItem('language', selectedLanguage);
        setSelectedLanguage(selectedLanguage);
        window.location.reload();
    }; */

    const [selectedLanguage, setSelectedLanguage] = useState('en');

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            setSelectedLanguage(storedLanguage);
        }
    }, []);

    const handleLanguageChange = (event) => {
        const newLanguage = event.target.value;
        localStorage.setItem('language', newLanguage);
        setSelectedLanguage(newLanguage);
        window.location.reload();
    };

    return (
        < select onChange={handleLanguageChange} value={selectedLanguage} >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="sw">Svenska</option>
        </select >
    );
};

export default LanguageSelector;