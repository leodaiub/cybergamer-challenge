/**
 *
 * Button
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

interface Props {}

export function Button(props: Props) {
  return (
    <Container type="button">
      ENTRAR
      <img src="arrow_right.png" alt="button"></img>
    </Container>
  );
}

const Container = styled.button`
  cursor: pointer;
  padding: 1rem;
  background: #ffd700;
  border: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 330px;
  height: 54px;
  font-family: 'Ubuntu', sans-serif;
  font-style: italic;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
`;
