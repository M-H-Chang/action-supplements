import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'
import counterReducer from '../store/counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  firestore: firestoreReducer
})

export default rootReducer