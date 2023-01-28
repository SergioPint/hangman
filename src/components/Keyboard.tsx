import { StyledKeyboard } from './styles/Keyboard.styled';

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

interface KeyboardProps {
  activeLetters: string[];
  disabled?: boolean;
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
}

export const Keyboard = ({
  activeLetters,
  disabled = false,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) => {
  return (
    <StyledKeyboard>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            disabled={isInactive || isActive || disabled}
            key={key}
            className={`${isActive ? 'active' : ''}${
              isInactive ? 'inactive' : ''
            }`}
          >
            {key}
          </button>
        );
      })}
    </StyledKeyboard>
  );
};
