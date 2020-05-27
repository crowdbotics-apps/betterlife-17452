import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView53211Saga from '../features/CalendarView53211/redux/sagas';
import EmailAuth53209Saga from '../features/EmailAuth53209/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView53211Saga,
EmailAuth53209Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}