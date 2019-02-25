import axios from "axios"

export const FETCHING_NOTES = "FETCHING_NOTES"
export const FETCHED_NOTES = "FETCHED_NOTES"
export const ERROR_NOTES = "ERROR_NOTES"
export const FETCHING_NOTE = "FETCHING_NOTE"
export const FETCHED_NOTE = "FETCHED_NOTE"
export const ERROR_NOTE = "ERROR_NOTE"
export const CREATING = "CREATING"
export const CREATING_ERROR = "CREATING_ERROR"
export const CREATED = "CREATED"
export const EDITING = "EDITING"
export const EDITED = "EDITED"
export const EDITING_ERROR = "EDITING_ERROR"
export const DELETING = "DELETING"
export const DELETED = "DELETED"
export const DELETING_ERROR = "DELETING_ERROR"

export function fetchNotes() {
  return dispatch => {
    dispatch({ type: FETCHING_NOTES })
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {
        dispatch({ type: FETCHED_NOTES, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR_NOTES, payload: "Can't fetch the notes!" })
      })
  }
}

export function fetchNote(id) {
  return dispatch => {
    dispatch({ type: FETCHING_NOTE })
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        dispatch({ type: FETCHED_NOTE, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR_NOTE, payload: "Can't fetch the note!" })
      })
  }
}

export function addNote(newNote, history) {
  return dispatch => {
    dispatch({ type: CREATING })
    axios
      .post("https://fe-notes.herokuapp.com/note/create", newNote)
      .then(response => {
        dispatch({ type: CREATED })
        history.push("/")
      })
      .catch(error => {
        dispatch({
          type: CREATING_ERROR,
          payload: "Can't Create the new Note!"
        })
      })
  }
}

export function editNote(note, id, history) {
  return dispatch => {
    dispatch({ type: EDITING })
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
      .then(response => {
        dispatch({ type: EDITED })
        history.push(`/note/${id}`)
      })
      .catch(error => {
        dispatch({
          type: EDITING_ERROR,
          payload: "Can't Create the new Note!"
        })
      })
  }
}

export function deleteNote(id, history) {
  return dispatch => {
    dispatch({ type: DELETING })
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        dispatch({ type: DELETED })
        history.push("/")
      })
      .catch(error => {
        dispatch({
          type: DELETING_ERROR,
          payload: "Can't delete the note!"
        })
      })
  }
}
