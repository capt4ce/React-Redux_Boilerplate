import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppsRouter from './AppsRouter'
import * as Conf from './baseconf'
// import AuthenticatedNavigation from './components/Other/AuthenticatedNavigation'

class App extends Component {

  render() {
    let appProps = this.props;
    let { auth } = this.props;
    return (
      <div>
        <AppsRouter {...appProps} />

      </div>
    );
  }

}

App.propTypes = {
  auth: PropTypes.object,
  leaves: PropTypes.object
}

export default App;
