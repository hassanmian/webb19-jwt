import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import UserKit from '../data/UserKit'

export default function PrivateRouter({ component: Component, ...rest}) {
  const userKit = new UserKit()
  return (
    <Route {...rest} render={ props => (
      userKit.getToken() ? <Component {...props} />
      : <Redirect to='/login' />
    )} />
  )
}