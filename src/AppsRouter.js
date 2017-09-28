import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './containers_components/Home'
import Login from './containers_components/Login'
import NoMatch from './containers_components/NoMatch'

class AppsRouter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let appProps = this.props;
    return (

      <Switch>
        {/* Will redirect to auth in booting app */}
        <Route exact path="/" component={Home} {...appProps} />
        <Route exact path="/login" component={Login} {...appProps} />
        {/* Accessing auth directly will bring to login page */}
        <Route component={NoMatch} />
      </Switch>

    );
  }

}

AppsRouter.propTypes = {
  auth: PropTypes.object,
  leaves: PropTypes.object
}

export default AppsRouter;
