import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import api from 'utils/api';
import dribbbleApi from 'utils/dribbbleApi';

function* onCode() {
  try {
    let res = yield call(api.post, '/oauth/token');
    localStorage.setItem('access_token', res.data.access_token);
    res = yield call(dribbbleApi.get, '/');
    localStorage.setItem('user', JSON.stringify(res.data));
    yield put(actions.onCodeSuccess(res.data));
  } catch (e) {
    console.error(e);
  } finally {
    window.localStorage.removeItem('code');
  }
}

export function* authSaga() {
  yield takeLatest(actions.onCode, onCode);
}
