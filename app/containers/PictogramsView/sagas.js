import { take, call, put, fork } from 'redux-saga/effects'
import api from 'services'
import { PICTOGRAMS, pictograms, AUTOCOMPLETE, autocomplete } from './actions'

// Individual exports for testing
export function* defaultSaga() {
  yield fork(pictogramsFlow)
}

function* pictogramsGetData() {
  while (true) { // eslint-disable-line no-constant-condition
    const { payload: { searchText } } = yield take(PICTOGRAMS.REQUEST)
    try {
      const response = yield call(api.fetchPictograms, searchText)
      console.log(response)
      yield put(pictograms.success(response))
    } catch (error) {
      yield put(pictograms.failure(error.message))
    } finally {
      // When done, we tell Redux we're not in the middle of a request any more
      // yield put({type: SENDING_REQUEST, sending: false})
    }
  }
}

function* autocompleteGetData() {
  while (true) { // eslint-disable-line no-constant-condition
    const { payload: { searchText } } = yield take(AUTOCOMPLETE.REQUEST)
    try {
      const response = yield call(api.fetchSearches, searchText)
      console.log(`Respuesta api: ${response}`)
      yield put(autocomplete.success(response))
    } catch (error) {
      yield put(autocomplete.failure(error.message))
    } finally {
      // When done, we tell Redux we're not in the middle of a request any more
      // yield put({type: SENDING_REQUEST, sending: false})
    }
  }
}


function* pictogramsFlow() {
  yield fork(pictogramsGetData)
  yield fork(autocompleteGetData)
  // const watcher = yield fork(pictogramsGetData)
  // Suspend execution until location changes,
  // it should go in another fork
  // yield take(LOCATION_CHANGE);
  // yield cancel(watcher);
  // o mejor: yield fork(takeLatest, SUBMIT_FILTER, fetchHotel);
  // de: -------> https://github.com/yelouafi/redux-saga/issues/451
}

// All sagas to be loaded
export default [defaultSaga]
