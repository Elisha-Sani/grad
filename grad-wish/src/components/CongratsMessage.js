import React from 'react';
import Picture from './Picture';
import TypingText from './TypingText';
import Stars from './Stars';
import '../styles/CongratsMessage.css'

const CongratsMessage = () => {
    return (
        <div className="congrats-message">
            <Picture />
            <TypingText />
            <Stars/>
        </div>
    );
};

export default CongratsMessage;