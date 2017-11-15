import React from "react"
import PropTypes from "prop-types"

const ShowPosition = ({ y }) => (
  <p>
    {y}
  </p>
)

ShowPosition.propTypes = {
  y: PropTypes.number.isRequired,
}

export default ShowPosition
