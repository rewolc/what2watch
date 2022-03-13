import {
  all,
  fork,
  takeLatest,
  takeEvery,
  put,
  call,
} from "redux-saga/effects";

async function getSerial(i) {
  const title = encodeURI(i);
  try {
    const request = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${title}&page=1`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "bb658897-c505-4b44-9438-efcd0211c1e4",
          accept: "application/json",
        },
      }
    );
    const data = await request.json();

    return data.films;
  } catch (err) {
    console.log(err);
  }
}

export function* workFetchSaga(args) {
  const mySerial = yield call(getSerial, args.name);
  console.log(mySerial.length)
   
  mySerial.length !== 0 ? yield put({ type: "SET_SERIAL", payload: { ...mySerial[0], isFav: "no" } }) : alert('Название введено неправильно');
}

export function* watchFetchSaga() {
  yield takeEvery("FETCH", workFetchSaga);
}

export function* workHelpSaga(args) {
  const getList = yield call(getSerial, args.name);
  const list = getList.slice(0, 5);

  yield put({ type: "HELP_SET", payload: list });
}
export function* watchHelpSaga() {
  yield takeLatest("FIND_HELP", workHelpSaga);
}

export function* mySaga() {
  yield all([watchHelpSaga(), watchFetchSaga()]);
}
