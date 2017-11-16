import React from "react"
import PropTypes from "prop-types"

const ShowPosition = ({ y }) => (
  <p style={ { color: "violet", fontSize: 20 } }>
    {y}
  </p>
)

ShowPosition.propTypes = {
  y: PropTypes.number.isRequired,
}

export default ShowPosition
