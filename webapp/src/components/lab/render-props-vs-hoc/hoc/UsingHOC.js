import React from "react"
import PropTypes from "prop-types"
import withScrollWatch from "./withScrollWatch"
import ShowPosition from "../ShowPosition"

const UsingHOC = ({ y }) => (
  <ShowPosition y={ y } />
)

UsingHOC.propTypes = {
  y: PropTypes.number.isRequired,
}

export default withScrollWatch(UsingHOC)
