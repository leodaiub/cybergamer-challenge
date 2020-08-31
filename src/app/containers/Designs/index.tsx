/**
 *
 * Designs
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectDesigns } from './selectors';
import { designsSaga } from './saga';
import Spinner from 'app/components/Spinner';
import { Design } from 'app/components/Design';
import { DesignModal } from 'app/components/DesignModal';
import { selectAuth } from '../Auth/selectors';

interface Props {}

export const Designs = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: designsSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const designs = useSelector(selectDesigns);
  const auth = useSelector(selectAuth);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getProjects());
  }, [dispatch]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Helmet>
        <title>Designs</title>
        <meta name="description" content="Description of Designs" />
      </Helmet>
      {designs.loading ? (
        <Container>
          <Spinner />
        </Container>
      ) : (
        <Container>
          {designs.projects.map(project => (
            <div
              className="wrapper"
              onClick={() => setCurrentModal(project.id)}
            >
              <Design
                handleModal={toggleModal}
                key={project.id}
                design={project}
              />{' '}
              {currentModal === project.id && (
                <DesignModal
                  avatar={auth.user.avatar_url}
                  username={auth.user.name}
                  project={project}
                  isOpen={isOpen}
                  handleModal={toggleModal}
                />
              )}
            </div>
          ))}{' '}
          {designs.projects.map(project => (
            <div
              className="wrapper"
              onClick={() => setCurrentModal(project.id)}
            >
              <Design
                handleModal={toggleModal}
                key={project.id}
                design={project}
              />{' '}
              {currentModal === project.id && (
                <DesignModal
                  avatar={auth.user.avatar_url}
                  username={auth.user.name}
                  project={project}
                  isOpen={isOpen}
                  handleModal={toggleModal}
                />
              )}
            </div>
          ))}{' '}
        </Container>
      )}
    </>
  );
});

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .wrapper {
    width: 25%;
  }
`;
