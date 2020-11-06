import React from 'react';
import { render } from 'react-dom';
import { App } from './app.js';
import 'normalize.css';
import { GlobalStyles } from './globalStyles';
import { firebase } from './libs/firbase.prod';
import { FirebaseContext } from './context/firebase';
render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
