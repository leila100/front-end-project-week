import {
  FETCHING_NOTES,
  ERROR_NOTES,
  FETCHED_NOTES,
  FETCHING_NOTE,
  ERROR_NOTE,
  FETCHED_NOTE
} from "../actions"

const initialState = {
  notes: [],
  currentNote: {},
  fetchingNotes: false,
  errorNotes: "",
  fetchingNote: false,
  errorNote: ""
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_NOTES:
      return {
        ...state,
        fetchingNotes: true,
        errorNotes: ""
      }

    case ERROR_NOTES:
      return {
        ...state,
        fetchingNotes: false,
        errorNotes: action.payload
      }

    case FETCHED_NOTES:
      return {
        ...state,
        fetchingNotes: false,
        errorNotes: "",
        notes: action.payload
      }

    case FETCHING_NOTE:
      return {
        ...state,
        fetchingNote: true,
        errorNote: ""
      }

    case ERROR_NOTE:
      return {
        ...state,
        fetchingNote: false,
        errorNote: action.payload
      }

    case FETCHED_NOTE:
      return {
        ...state,
        fetchingNote: false,
        errorNote: "",
        currentNote: action.payload
      }

    default:
      return state
  }
}
