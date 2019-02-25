import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap"

import { fetchNote, deleteNote } from "../store/actions"
import { NoteViewWrapper } from "../styles/noteStyles"
import { LinkWrapper } from "../styles/navbarStyles"

class NoteView extends React.Component {
  state = {
    modal: false
  }

  componentDidMount = () => {
    this.props.fetchNote(this.props.match.params.id)
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  deleteHandler = () => {
    this.toggle()
    this.props.deleteNote(this.props.currentNote._id, this.props.history)
  }

  render() {
    return (
      <>
        <LinkWrapper>
          <Link to={`/note/edit/${this.props.currentNote._id}`}>edit</Link>
          <div onClick={this.toggle}>delete</div>
        </LinkWrapper>
        <NoteViewWrapper>
          {this.props.fetchingNote && <h2>FEtching the note...</h2>}
          {this.props.errorNote && <h2>{this.props.errorNote}</h2>}
          {this.props.deleting && <h2>Deleting the note...</h2>}
          {this.props.deleting_error && <h2>{this.props.deleting_error}</h2>}
          <h3>{this.props.currentNote.title}</h3>
          <p>{this.props.currentNote.textBody}</p>
        </NoteViewWrapper>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Are you sure you want to delete this?
          </ModalHeader>
          <ModalFooter>
            <Button color="primary" onClick={this.deleteHandler}>
              Delete
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              No
            </Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentNote: state.currentNote,
    fetchingNote: state.fetchingNote,
    errorNote: state.errorNote,
    deleting: state.deleting,
    deleting_error: state.deleting_error
  }
}

export default connect(
  mapStateToProps,
  { fetchNote, deleteNote }
)(NoteView)
