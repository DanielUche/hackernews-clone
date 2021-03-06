import React, { Component } from "react";
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'

import Header from "./Header";
import FeedList from "./FeedList";
import CreateFeed from "./CreateFeed";
import Login from "./Login";
import Search from "./Search";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/new/1' />} />
            {/* <Route exact path="/" component={FeedList} /> */}
            <Route exact path='/create' component={CreateFeed} />
            <Route exact path="/login" component={Login} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/top' component={FeedList} />
            <Route exact path='/new/:page' component={FeedList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
