import React from "react"
import { connect } from "react-redux"

import Nav from "../components/Nav"
import { fetchNote } from "../store/actions"
import { NoteViewWrapper } from "../styles/noteStyles"

class NoteView extends React.Component {
  componentDidMount = () => {
    this.props.fetchNote(this.props.match.params.id)
  }

  render() {
    return (
      <>
        <Nav />
        <NoteViewWrapper>
          {this.props.fetchingNote && <h2>FEtching the note...</h2>}
          {this.props.errorNote && <h2>{this.props.errorNote}</h2>}
          <h3>{this.props.currentNote.title}</h3>
          <p>{this.props.currentNote.textBody}</p>
        </NoteViewWrapper>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentNote: state.currentNote,
    fetchingNote: state.fetchingNote,
    errorNote: state.errorNote
  }
}

export default connect(
  mapStateToProps,
  { fetchNote }
)(NoteView)
