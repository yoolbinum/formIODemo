import { Route, Switch } from 'react-router-dom'
import React from 'react'
import List from './List'
import Create from './Create'
import Item from './Item/index'

const Form = () => (
  <div>
    <Switch>
      <Route exact path="/signature" component={List} />
      <Route exact path="/signature/create" component={Create} />
      <Route path="/signature/:signatureId" component={Item} />
    </Switch>
  </div>
)

export default Form
