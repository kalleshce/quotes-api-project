import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DashBoard from '../components/DashBoard/DashBoard'
import NoRoute from '../components/NoRoute'
import UserProfile from '../components/UserProfile/UserProfile'

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route to='/' exact component={DashBoard} />
          <Route to='/profile' component={UserProfile} />
          <Route to='*' component={NoRoute} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes