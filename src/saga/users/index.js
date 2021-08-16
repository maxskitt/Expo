import { takeLatest, call, put } from "redux-saga/effects";
import {usersFailed, usersRequested, usersSucceeded} from "../../redux/slices/users";
import {fetchUser} from "./api";

function* usersRequest() {
  try {
    const response = yield call(fetchUser);
    yield put(usersSucceeded({ users: response }));
  } catch (error) {
    yield put(usersFailed({ error }));
  }
}

function* users() {
  yield takeLatest(usersRequested, usersRequest);
}

export default users;
