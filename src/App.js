import React, { Component } from 'react';
import './App.css';
import Main from './components/mainComponent'
import {BrowserRouter} from "react-router-dom"
import {Provider} from 'react-redux'
import {ConfigureStore} from './Redux/configureStore'

const store = ConfigureStore();


class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store = {store}>
        <BrowserRouter>
        <div>
        <Main/>
        </div>
        </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
