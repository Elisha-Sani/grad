import React, { useState, useEffect, useMemo } from 'react';
import '../styles/TypingText.css';

const TypingText = () => {
  const messages = useMemo(() => [
   "Congratulations on your graduation, Liz!",
   "I’m so proud of your hard work and achievements.",
    "Celebrate your success and cherish every moment.",
    "You deserve all the happiness and success in the world."
  ], []);

  const [lines, setLines] = useState([]); // Store lines of text
  const [index, setIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0); // Track the current message index

  useEffect(() => {
    if (messageIndex < messages.length) {
      const currentMessage = messages[messageIndex];
      const intervalId = setInterval(() => {
        if (index < currentMessage.length) {
          // Update the current line with the typed text
          setLines((prevLines) => {
            const newLines = [...prevLines];
            newLines[messageIndex] = currentMessage.substring(0, index + 1);
            return newLines;
          });
          setIndex(index + 1);
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            setMessageIndex(messageIndex + 1); // Move to the next message
            setIndex(0); // Reset index for the next message
          }, 2000); // Pause before starting the next message
        }
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [index, messageIndex, messages]);

  return (
    <div className="typing-container">
      {lines.map((line, idx) => (
        <p key={idx} className="typing-text">{line}</p>
      ))}
    </div>
  );
};

export default TypingText;