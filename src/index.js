import React from "react"
import ReactDOM from "react-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import "./index.css"
import App from "./components/App"
import { store } from "./store";
import rootReducer from './reducers/index'
import firebase from "./firebase"

// import reportWebVitals from "./reportWebVitals"

const reduxStore = createStore(rootReducer)

const rrfProps = {
  firebase,
  config: {
    userProfile: `users`
  },
  dispatch: reduxStore.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store, reduxStore}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
    </React.StrictMode>,
  document.getElementById(`root`)
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
