import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import SuppList from './SuppList'
import SuppEdit from './SuppEdit'
import SuppDetail from './SuppDetail'

const SuppControl = () => (
  <Router>
    <Switch>
      <Route exact path='/supplements/new'>
        <SuppEdit />
      </Route>
      <Route exact path='/supplements/:id/edit'>
        <SuppEdit />
      </Route>
      <Route exact path='/supplements/:id'>
        <SuppDetail />
      </Route>
      <Route exact path='/supplements'>
        <SuppList />
      </Route>
    </Switch>
  </Router>
)

export default SuppControl