import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import Dashboard from '../components/Dashboard';
import PostPage from '../components/PostPage';
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
                <Route exact path="/" render={() => <Dashboard />} />
                <Route path="/posts/:id" component={PostPage} />
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
