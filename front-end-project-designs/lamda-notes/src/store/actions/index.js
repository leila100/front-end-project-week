import axios from "axios"

export const FETCHING_NOTES = "FETCHING_NOTES"
export const FETCHED_NOTES = "FETCHED_NOTES"
export const ERROR_NOTES = "ERROR_NOTES"
export const FETCHING_NOTE = "FETCHING_NOTE"
export const FETCHED_NOTE = "FETCHED_NOTE"
export const ERROR_NOTE = "ERROR_NOTE"

export function fetchNotes() {
  return dispatch => {
    dispatch({ type: FETCHING_NOTES })
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {
        console.log(response)
        dispatch({ type: FETCHED_NOTES, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR_NOTES, payload: "Can't fetch the cards!" })
      })
  }
}

export function fetchNote() {}
