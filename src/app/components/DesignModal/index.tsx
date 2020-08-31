/**
 *
 * DesignModal
 *
 */
import React from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';

interface Props {
  isOpen: boolean;
  handleModal: any;
  avatar: string;
  username: string;
  project: any;
}

export function DesignModal(props: Props) {
  return (
    <StyledModal
      isOpen={props.isOpen}
      onBackgroundClick={props.handleModal}
      onEscapeKeydown={props.handleModal}
    >
      <Div>
        <div>
          <img
            className="avatar"
            src={props.avatar}
            alt=""
            height="35"
            width="35"
          />
          <p>{props.username}</p>
        </div>
        <button onClick={props.handleModal}>
          <img src="Vector.svg" alt="project" height="20" width="20"></img>
        </button>
      </Div>
      <img className="project" src={props.project.images.normal} alt="" />
      <p>{props.project.description}</p>
    </StyledModal>
  );
}

const StyledModal = Modal.styled`
padding: 0.5rem;
  height: 75%;
  display: flex;
  background-color: #ffffff;
  border: 0;  
  border-radius: 6px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  img.project {
    width: 100%;
    height: 75%;
    border-radius: 10px;
  }
`;

const Div = styled.div`
  div {
    display: flex;
    align-items: center;
  }
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
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
