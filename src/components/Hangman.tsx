import { useCallback, useEffect, useState } from 'react';
import words from '../words.json';
import { Drawing } from './Drawing';
import { Keyboard } from './Keyboard';
import Result from './Result';
import { StyledHangman } from './styles/Hangman.styled';
import { Word } from './Word';

// pick random word from word list

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

export const Hangman = () => {
  const [guessWord, setGuessWord] = useState(getWord());

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !guessWord.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = guessWord
    .split('')
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetters = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((currrentLEtters) => [...currrentLEtters, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetters(key);
    };
    document.addEventListener('keypress', handler);
    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== 'Enter') return;

      e.preventDefault();
      setGuessedLetters([]);
      setGuessWord(getWord());
    };
    document.addEventListener('keypress', handler);
    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, []);

  return (
    <StyledHangman>
      <Result
        message={`${isWinner ? 'Winner! - Refresh to try again' : ''}${
          isLoser ? 'You lose, try again' : ''
        }`}
      />
      <Drawing guesses={incorrectLetters.length} />
      <Word
        reveal={isLoser}
        guessedLetters={guessedLetters}
        guessWord={guessWord}
      />
      <Keyboard
        disabled={isWinner || isLoser}
        activeLetters={guessedLetters.filter((letter) =>
          guessWord.includes(letter)
        )}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetters}
      />
    </StyledHangman>
  );
};
