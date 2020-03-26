import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import BrowserRoutes from 'Routes/SwitchRoutes'
import { Provider } from 'react-redux'
import store from 'Redux'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
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
      </Provider>
    </BrowserRouter>
  )
}

export default App
