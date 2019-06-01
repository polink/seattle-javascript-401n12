import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import AuthRedirect from './component/AuthRedirect/AuthRedirect';
import Dashboard from './component/Dashboard/dashboard';
import Landing from './component/Landing/landing'

export default class App extends React.Component {
  // Vinicio - this is in charge of controlling our auth-based routing
  // Vinicio - the process we use find bugs is to little by little remove all the possibilities
  render() {
    return(
      <div>
        <BrowserRouter>
          <Route path="*" component={AuthRedirect} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Landing}/>
          <Route exact path="/signup" component={Landing}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        </BrowserRouter>
      </div>
    )
  }
}



