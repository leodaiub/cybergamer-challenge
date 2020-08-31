import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import dribbbleApi from 'utils/dribbbleApi';

function* index() {
  try {
    const res = yield call(dribbbleApi.get, '/shots');
    yield put(actions.getProjectsSuccess(res.data));
  } catch {
    yield put(actions.error());
  }
}

export function* designsSaga() {
  yield takeLatest(actions.getProjects, index);
}
