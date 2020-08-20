import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

interface Props {
  siteTitle: string
}

const Header = (props: Props) => {
  const { siteTitle } = props

  return (
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export { Header }
