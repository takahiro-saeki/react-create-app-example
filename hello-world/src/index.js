import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './App';
import './index.css';

const Page = () => {
  return (
    <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>
  )
}

const renderDOM = document.getElementById('root');
render(Page(), renderDOM);
