import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import TodoContainer from "./functionBased/components/TodoContainer"
import "./functionBased/App.css"
import { BrowserRouter as Router } from "react-router-dom"
import About from "./functionBased/components/About";
import NotMatch from "./functionBased/components/NotMatch";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
reportWebVitals();

