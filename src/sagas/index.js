import {fork} from 'redux-saga/effects';
import {watchHome} from './HomeSaga';
export default function* rootSaga() {
    yield  fork(watchHome);
}