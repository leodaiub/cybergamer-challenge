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
  width: 20%;
  margin: 1rem;

  width: 330px;
  height: 251px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
