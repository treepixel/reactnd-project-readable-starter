import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import Post from './Post';
import Posts from './Posts';
import '../index.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div className="Rotas">
          {this.props.loading === true ? null : (
            <div>
              <Switch>
                <Route exact path="/" component={Posts} />
                <Route exact path="/category/:category" component={Posts} />
                <Route path="/posts/:id" component={Post} />
                <Route render={() => <Redirect to="/" />} />
              </Switch>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}
export default withRouter(connect(mapStateToProps)(App));
