import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import Post from './Post';
import Posts from './Posts';
import NotFound from './NotFound';
import '../index.css';
import FormPost from './FormPost';

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
                <Route exact path="/posts/new" component={FormPost} />
                <Route exact path="/404" component={NotFound} />
                <Route exact path="/:category" component={Posts} />
                <Route exact path="/:category/:id" component={Post} />
                <Route exact path="/posts/edit/:id" component={FormPost} />
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
