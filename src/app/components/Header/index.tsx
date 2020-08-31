/**
 *
 * Header
 *
 */
import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  user: any;
}

export function Header(props: Props) {
  return (
    <Div>
      <img src="logo.svg" alt="" height="50" width="150" />
      <Div>
        <p>{props.user.name}</p>
        <img
          className="avatar"
          src={props.user.avatar_url}
          alt=""
          height="50"
          width="50"
        />
      </Div>
    </Div>
  );
}

const Div = styled.div`
  height: 20vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img.avatar {
    margin-left: 1rem;
    border-radius: 25px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 75px;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;

    color: #000000;
  }
`;
