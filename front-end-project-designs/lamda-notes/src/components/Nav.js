import React from "react"
import { Link } from "react-router-dom"

import { LinkWrapper } from "../styles/navbarStyles"

const Nav = props => {
  return (
    <LinkWrapper>
      <Link to={`/note/edit/${props.id}`}>edit</Link>
      <Link to="/">delete</Link>
    </LinkWrapper>
  )
}

export default Nav
