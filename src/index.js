import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//리덕스
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from '@redux-devtools/extension'
// import count from './modules/count';
// import font from './modules/font';
import rootReducer from './modules';
import { BrowserRouter } from 'react-router-dom'

// store 생성
const store = createStore(rootReducer, devToolsEnhancer())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
