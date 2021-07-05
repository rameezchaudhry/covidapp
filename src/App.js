import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Get } from './component/get';
import React from 'react'
import reducer from "./store/reducer"
import store from "./store"
import {Provider} from "react-redux"


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Get />
      </Provider>
    </div>
  );
}

export default App;
