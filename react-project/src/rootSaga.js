import { map } from 'ramda';
import { all, fork  } from "redux-saga/effects"

let combineSagas = {};

export default function* rootSaga() {
    yield all(map(fork, combineSagas));
}