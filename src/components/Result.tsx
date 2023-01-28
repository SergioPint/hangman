import React from 'react';
import { StyledResult } from './styles/Result.styled';

interface ResultProps {
  message?: string;
}

function Result({ message }: ResultProps) {
  return <StyledResult>{message!}</StyledResult>;
}

export default Result;
