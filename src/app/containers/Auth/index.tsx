/**
 *
 * Auth
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectAuth } from './selectors';
import { authSaga } from './saga';
import OAuthPopup from 'app/components/OAuthPopUp';
import { Button } from 'app/components/Button';
import { Redirect } from 'react-router-dom';
import Spinner from 'app/components/Spinner';
interface Props {}

export function Auth(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: authSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const auth = useSelector(selectAuth);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Auth" />
      </Helmet>
      <Div>
        {auth.authenticated && <Redirect to="/designs" />}
        <img src="logo.svg" alt="" />
        {auth.loading ? (
          <Spinner />
        ) : (
          <OAuthPopup
            url="https://dribbble.com/oauth/authorize?client_id=6490b556a1d3d59db567e9c70e3b71a7f07c3034e2093d893116ed70aa0563b0"
            onCode={() => dispatch(actions.onCode())}
            onClose={() => console.log('closed')}
            title="test"
          >
            <Button />
          </OAuthPopup>
        )}
      </Div>
    </>
  );
}

const Div = styled.div`
  flex-direction: column;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
