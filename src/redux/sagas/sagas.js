import { all, takeLatest, takeEvery, put, call } from "redux-saga/effects";
import { openBadNotif, openGoodNotif } from "../../components/notif.component/notif";

async function getSerial(i) {
	const title = encodeURI(i);
	try {
		const request = await fetch(
			`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${title}&page=1`,
			{
				method: "GET",
				headers: {
					"X-API-KEY": "59509c31-869e-496b-be91-40d1491a209d",
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
	console.log(mySerial.length);
	if (mySerial.length !== 0) {
		openGoodNotif("success");
		yield put({
			type: "SET_SERIAL",
			payload: { ...mySerial[0], isFav: "no", display: "true" },
		});
	} else {
		openBadNotif("error");
	}
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
