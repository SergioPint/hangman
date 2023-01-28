import styled from 'styled-components';

export const StyledKeyboard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  gap: 0.5rem;
  align-self: stretch;

  button {
    width: 100%;
    border: 3px solid white;
    background: none;
    aspect-ratio: 1 / 1;
    font-size: 2.5rem;
    text-transform: uppercase;
    padding: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    color: #ffffff;
    border-radius: 15px;
  }

  button:hover:not(:disabled),
  button:focus:not(:disabled) {
    background-color: #0c0c47;
  }

  button.active {
    background-color: #12126d;
    color: white;
  }

  button.inactive {
    opacity: 0.3;
  }
`;
