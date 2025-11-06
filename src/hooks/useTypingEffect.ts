import { useState, useEffect, useRef } from 'react';

interface UseTypingEffectOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function useTypingEffect({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000,
}: UseTypingEffectOptions) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));

        if (text.length === 1) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          timeoutRef.current = setTimeout(handleTyping, pauseTime / 2);
          return;
        }
      } else {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setIsDeleting(true);
          timeoutRef.current = setTimeout(handleTyping, pauseTime);
          return;
        }
      }

      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeoutRef.current = setTimeout(handleTyping, speed);
    };

    // Start with typing speed instead of fixed 1000ms delay
    timeoutRef.current = setTimeout(handleTyping, typingSpeed);

    // Cleanup function to prevent memory leaks
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}
