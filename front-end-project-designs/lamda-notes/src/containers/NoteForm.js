import React, { Component } from "react"
import { connect } from "react-redux"

import { addNote } from "../store/actions"
import { FormWrapper } from "../styles/noteFormStyles"

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noteInfo: {
        title: "",
        textBody: ""
      }
    }
  }

  saveInput = event => {
    const newInfo = {
      ...this.state.noteInfo,
      [event.target.name]: event.target.value
    }
    this.setState({ noteInfo: newInfo })
  }

  action = event => {
    event.preventDefault()
    if (this.props.actionType === "Add") {
      this.props.addNote(this.state.noteInfo, this.props.history)
    }
  }

  render() {
    return (
      <FormWrapper>
        {this.props.creating && <h2>Creating Note...</h2>}
        {this.props.creating_error && <h2>{this.props.creating_error}</h2>}
        <h3>Create New Note:</h3>
        <form onSubmit={this.action}>
          <input
            type="text"
            placeholder="Note Title"
            name="title"
            value={this.state.noteInfo.title}
            onChange={this.saveInput}
          />
          <textarea
            rows="21"
            cols="50"
            placeholder="Note Content"
            name="textBody"
            value={this.state.noteInfo.textBody}
            onChange={this.saveInput}
          />
          <button type="submit">Save</button>
        </form>
      </FormWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    creating: state.creating,
    creating_error: state.creating_error
  }
}

export default connect(
  mapStateToProps,
  { addNote }
)(NoteForm)
