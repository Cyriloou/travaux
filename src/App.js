import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import BrowserRoutes from 'Routes/SwitchRoutes'
import ReduxToastr from 'react-redux-toastr'
import { fetchStoriesLists } from 'Redux/modules/items/actions'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { withRouter } from 'react-router-dom'

class App extends Component {
  componentDidMount = () => {
    this.props.fetchStoriesLists()
  }

  render() {
    return <BrowserRoutes />
  }
}

export default connect(null, { fetchStoriesLists })(withRouter(App))
