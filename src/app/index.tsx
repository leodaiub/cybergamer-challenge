/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { Auth } from './containers/Auth/';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { PrivateRoute } from './components/PrivateRoute';
import { Designs } from './containers/Designs';
import { actions as authActions } from './containers/Auth/slice';
import { selectAuth } from './containers/Auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './containers/Auth/slice';
import { authSaga } from './containers/Auth/saga';
import { Header } from './components/Header';

export function App() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: authSaga });
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);

  React.useEffect(() => {
    dispatch(authActions.checkAuth());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - Boa Aposta" defaultTitle="Boa Aposta">
        <meta name="description" content="Boa Aposta App" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={Auth} />
        <>
          <Header user={auth.user} />
          <Route exact path="/login-response" component={Auth} />
          <PrivateRoute exact path="/designs" component={Designs} />
        </>
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
