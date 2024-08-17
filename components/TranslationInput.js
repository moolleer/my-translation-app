"use client";

import { useState, useEffect } from 'react';

const TranslationInput = ({ id, type, dataTranslateKey }) => {
    const [placeholder, setPlaceholder] = useState('');

    useEffect(() => {
        const language = localStorage.getItem('language') || 'en';
        
        fetch(`/translations/${language}.json`)
            .then(response => response.json())
            .then(data => {
                if (data[dataTranslateKey]) {
                    setPlaceholder(data[dataTranslateKey]);
                }
            });
    }, [dataTranslateKey]);

    return <input 
        id={id} 
        className="input input-field" 
        placeholder={placeholder}
        type={type} 
    />;
};

export default TranslationInput;
