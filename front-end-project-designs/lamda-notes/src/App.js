import React, { Component } from "react"
import { Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import NotesList from "./containers/NotesList"
import NoteView from "./containers/NoteView"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route path="/note/:id" component={NoteView} />
        <Route exact path="/" component={NotesList} />
      </div>
    )
  }
}

export default App
