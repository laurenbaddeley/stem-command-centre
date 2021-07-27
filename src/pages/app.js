import React from "react"
import { Router } from "@reach/router"

import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"
import Email from "../components/email"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
      <PrivateRoute path="/app/email" component={Email} />
    </Router>
  </Layout>
)

export default App
