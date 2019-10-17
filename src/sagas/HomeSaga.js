import { getSagas } from '../utils/NetWorking';
import {put, take, call, select} from 'redux-saga/effects'
import { api } from '../config/Api';

export function fetchHomeTypes(){
      let thisUrl=api.indextTypes;
      //console.warn(thisUrl)
      return getSagas(thisUrl);
}
export function* fetchTypeFun() {
    const isFromNet = yield select(state => state.homeTypes.isFromNet);
    if(isFromNet){
    const { response, error } = yield call(fetchHomeTypes);
    if (response)
    yield put({ type: 'Home_Type', datatypes: response })
    else
    yield put({ type: 'Home_Type_Erro', error });
     }
  }




  export  function* watchHome() {
    while (true) {
    yield take('Home_Type');
    yield call(fetchTypeFun);
    }
  }