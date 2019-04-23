import React from 'react'; // const React = require('react');
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Vinicio - let's import the App Component
import * as serviceWorker from './serviceWorker';

// Vinciio "<App />" it's called JSX, and in react, it replaces HTML
ReactDOM.render(<App kali="cute" react="cool beans"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); // Vinicio - ignore this line for now
