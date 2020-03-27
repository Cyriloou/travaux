import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './App.css'
import BrowserRoutes from 'Routes/SwitchRoutes'
import ReduxToastr from 'react-redux-toastr'
import { fetchStoriesLists } from 'Redux/modules/items/actions'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { withRouter } from 'react-router-dom'
import Navbar from 'Components/Nav/Navbar'

class App extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  componentDidMount = () => {
    this.props.fetchStoriesLists()
  }

  render() {
    return (
      <>
        <Navbar />
        <ReduxToastr
          timeOut={6000}
          newestOnTop={false}
          preventDuplicates
          position='top-left'
          transitionIn='fadeIn'
          transitionOut='fadeOut'
          progressBar
          showCloseButton
          closeOnToastrClick
        />
        <BrowserRoutes />
      </>
    )
  }
}

export default connect(null, { fetchStoriesLists })(withRouter(App))
