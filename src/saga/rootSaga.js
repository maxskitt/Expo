import { all } from "redux-saga/effects";
import articles from "./articles";

function* rootSaga() {
  yield all([
    articles()
  ])
}

export default rootSaga;
