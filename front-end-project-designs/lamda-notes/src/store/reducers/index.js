import {
  FETCHING_NOTES,
  ERROR_NOTES,
  FETCHED_NOTES,
  FETCHING_NOTE,
  ERROR_NOTE,
  FETCHED_NOTE,
  CREATING,
  CREATING_ERROR,
  CREATED,
  EDITING,
  EDITING_ERROR,
  EDITED,
  DELETING,
  DELETING_ERROR,
  DELETED
} from "../actions"

const initialState = {
  notes: [],
  currentNote: {},
  fetchingNotes: false,
  errorNotes: "",
  fetchingNote: false,
  errorNote: "",
  creating: false,
  creating_error: "",
  editing: false,
  editing_error: "",
  deleting: false,
  deleting_error: ""
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_NOTES:
      return {
        ...state,
        fetchingNotes: true,
        errorNotes: "",
        fetchingNote: false,
        errorNote: "",
        creating: false,
        creating_error: "",
        currentNote: {}
      }

    case ERROR_NOTES:
      return {
        ...state,
        fetchingNotes: false,
        errorNotes: action.payload,
        fetchingNote: false,
        errorNote: "",
        creating: false,
        creating_error: "",
        currentNote: {}
      }

    case FETCHED_NOTES:
      return {
        ...state,
        fetchingNotes: false,
        errorNotes: "",
        notes: action.payload,
        fetchingNote: false,
        errorNote: "",
        creating: false,
        creating_error: "",
        currentNote: {}
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

    case CREATING:
      return {
        ...state,
        creating: true,
        creating_error: "",
        currentNote: {}
      }

    case CREATING_ERROR:
      return {
        ...state,
        creating: false,
        creating_error: action.payload
      }

    case CREATED:
      return {
        ...state,
        creating: false,
        creating_error: ""
      }

    case EDITING:
      return {
        ...state,
        editing: true,
        editing_error: ""
      }

    case EDITING_ERROR:
      return {
        ...state,
        editing: false,
        editing_error: action.payload
      }

    case EDITED:
      return {
        ...state,
        editing: false,
        editing_error: ""
      }

    case DELETING:
      return {
        ...state,
        deleting: true,
        deleting_error: ""
      }

    case DELETING_ERROR:
      return {
        ...state,
        deleting: false,
        deleting_error: action.payload
      }

    case DELETED:
      return {
        ...state,
        deleting: false,
        deleting_error: ""
      }
    default:
      return state
  }
}
