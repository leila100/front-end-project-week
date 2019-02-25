import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar"
import NotesList from "./containers/NotesList"
import NoteView from "./containers/NoteView"
import NoteForm from "./containers/NoteForm"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route
            path="/note/add"
            render={props => <NoteForm {...props} actionType="Add" />}
          />
          <Route
            path="/note/edit/:id"
            render={props => <NoteForm {...props} actionType="Edit" />}
          />
          <Route path="/note/:id" component={NoteView} />
          <Route exact path="/" component={NotesList} />
        </Switch>
      </div>
    )
  }
}

export default App
