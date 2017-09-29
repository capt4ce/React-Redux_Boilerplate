import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppsRoutes from './AppsRoutes'
// import AuthenticatedNavigation from './components/Other/AuthenticatedNavigation'

class App extends Component {

  render() {
    let appProps = this.props;
    let { auth } = this.props;
    return (
      <div>
        <AppsRoutes {...appProps} />

      </div>
    );
  }

}

App.propTypes = {
  auth: PropTypes.object
}

export default App;
