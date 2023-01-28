import { StyledWord } from './styles/Word.styled';

interface WordProps {
  guessedLetters: string[];
  guessWord: string;
  reveal?: boolean;
}

export const Word = ({
  guessedLetters,
  guessWord,
  reveal = false,
}: WordProps) => {
  return (
    <StyledWord>
      {guessWord.split('').map((letter, index) => (
        <span key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? 'visible'
                  : 'hidden',
              color:
                !guessedLetters.includes(letter) && reveal ? 'red' : 'white',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </StyledWord>
  );
};
