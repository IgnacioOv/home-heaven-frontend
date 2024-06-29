import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store/store.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Envolvemos la aplicación con el Provider */}
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
