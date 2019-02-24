import React from "react"

import { NoteWrapper, Title } from "../styles/noteStyles"

const Note = props => {
  return (
    <NoteWrapper>
      <Title>{props.note.title}</Title>
      <p>{props.note.textBody}</p>
    </NoteWrapper>
  )
}

export default Note
