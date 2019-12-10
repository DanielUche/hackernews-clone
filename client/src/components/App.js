import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Header from "./Header";
import FeedList from "./FeedList";
import CreateFeed from "./CreateFeed";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={FeedList} />
            <Route exact path="/create" component={CreateFeed} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;