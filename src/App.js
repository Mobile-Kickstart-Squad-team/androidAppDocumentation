import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch , Link, Redirect } from 'react-router-dom';

import MainPage from './pages'
import NotFoundPage from './pages/404';
import DocumentPage from './pages/document'
import BlogPage from './pages/blog';
import ReactWebsiteStoryPage from './pages/reactwebsitestory';


class App extends React.Component {
  render(){
    
    return <Router>
        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/document" component={DocumentPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/blog/reactwebsitestory" component={ReactWebsiteStoryPage} />
        <Route exact path="/404"component={NotFoundPage} />
        <Redirect to="/404"/>
        </Switch>
      </Router>
      
  }

}

export default App;
