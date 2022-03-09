import { takeEvery, put, call } from "redux-saga/effects";

async function getSerial(i) {
  const title = encodeURI(i);
  const request = await fetch(
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${title}&page=1`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": "a460e142-af14-4965-9352-6535698698f5",
        accept: "application/json",
      },
    }
  );
  const data = await request.json();
  return data.films[0];
}

export function* workFetchSaga(args) {
  const mySerial = yield call(getSerial, args.name);
  yield put({ type: "SET_SERIAL", payload: mySerial });
}

export function* watchFetchSaga() {
  yield takeEvery("FETCH", workFetchSaga);
}

export function* mySaga() {
  yield watchFetchSaga();
}
