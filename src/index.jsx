import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Hooks';
// import App from './pages/RouterFunctional';
// import App from './pages/CustomHooks';
// import App from '../pages/ErrorBoundries';
// import App from '../pages/HigherOrderComponent';
// import App from './pages/WithoutContext';
// import App from "./pages/WithContext";
// import App from './pages/WithoutHoc';
// import App from "./pages/WithHoc";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
