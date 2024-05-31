import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import IncreDecre from './IncreDecre';
import Countdown from './Countdown';
import Accordion from './Accordion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <IncreDecre />
  </React.StrictMode>
);

const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(
  <React.StrictMode>
    <Accordion />
  </React.StrictMode>
);

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
  <React.StrictMode>
    <Countdown />
  </React.StrictMode>
);

const alt = () => {
  alert("Hello!");
}
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
  <React.StrictMode>
    <button className="btn btn-primary" onClick={alt}>Hello</button>
  </React.StrictMode>
);



