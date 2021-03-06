import React, { Component, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

//constants
import ROUTES from '../constants/routes'

//High Order Components
import { withAuthentication } from '../highOrderComponents/Session'

//Containers
import { Dashboard } from '../containers/Templates'

//Views
const Home   = React.lazy(() => import('./Home'))
const SignIn = React.lazy(() => import('./SignIn'))
const SignUp = React.lazy(() => import('./SignUp'))
const ResetPassword = React.lazy(() => import('./ResetPassword'))

const NoMatch = () => {
  return (
    <div>
      Página não encontrada ou você não tem permissões para vê-la
    </div>
  )
}

class Views extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route path={ROUTES.SIGN_UP} component={SignUp}/>
          <Route path={ROUTES.SIGN_IN} component={SignIn}/>
          <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
          <Route component={NoMatch}/>
        </Switch>
      </Suspense>
    )
  }
}

export default withAuthentication(Views)
