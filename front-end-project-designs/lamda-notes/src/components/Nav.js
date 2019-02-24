import React from "react"
import { Link } from "react-router-dom"

import { LinkWrapper } from "../styles/navbarStyles"

const Nav = () => {
  return (
    <LinkWrapper>
      <Link to="/">edit</Link>
      <Link to="/">delete</Link>
    </LinkWrapper>
  )
}

export default Nav
