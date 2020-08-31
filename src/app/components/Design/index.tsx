/**
 *
 * Design
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  design: any;
  handleModal: any;
}

export function Design(props: Props) {
  return (
    <Div onClick={props.handleModal}>
      <img src={props.design.images.normal} alt="project"></img>
    </Div>
  );
}

const Div = styled.div`
  margin: 1rem;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
