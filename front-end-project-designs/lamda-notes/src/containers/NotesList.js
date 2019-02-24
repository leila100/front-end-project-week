import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { fetchNotes } from "../store/actions"
import Note from "../components/Note"
import { NotesWrapper } from "../styles/noteStyles"

class NotesList extends Component {
  componentDidMount = () => {
    this.props.fetchNotes()
  }

  render() {
    return (
      <NotesWrapper>
        <h3>Your Notes:</h3>
        {this.props.notes.map(note => (
          <Link to={`/note/${note._id}`} key={note._id}>
            <Note note={note} />
          </Link>
        ))}
      </NotesWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes,
    errorNotes: state.errorNotes
  }
}

export default connect(
  mapStateToProps,
  { fetchNotes }
)(NotesList)
