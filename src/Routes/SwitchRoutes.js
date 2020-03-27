//Need to import react becuase the Route itself is a component.
import React from 'react'
// Import the Route, and Switch Comopnent used for defining your routes.
// Route is the route itself which can accept render props, but for the purpose of this tutorial we used the component and path prop.
// Switch responsible for directing to first child that matches thier respective route.
import { Switch, Route } from 'react-router-dom'
// Now import the components you'll pass as props.
import Home from 'Pages/Home/Home'
import Default from 'Pages/Default'

// When dealing with default exports we do not even need to name the export since when it is imported we can name it whatever we want.
const SwitchRoutes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    {/*Use the exact keyword means it will direct to that exact route, and used primarily when creating sub routes. */}

    <Route exact path='/:itemType' component={Home} />

    <Route component={Default} />
  </Switch>
)

export default SwitchRoutes
