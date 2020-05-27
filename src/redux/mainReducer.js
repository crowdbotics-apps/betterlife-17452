import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView53211Reducer from '../features/CalendarView53211/redux/reducers';
import EmailAuth53209Reducer from '../features/EmailAuth53209/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView53211: CalendarView53211Reducer,
EmailAuth53209: EmailAuth53209Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});