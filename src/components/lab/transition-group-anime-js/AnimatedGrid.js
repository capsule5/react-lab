import React from "react"
import PropTypes from "prop-types"
import TransitionGroup from "react-transition-group/TransitionGroup"

import AnimatedGridContents from "./AnimatedGridContents"

const AnimatedGrid = ({ items }) => (
  <TransitionGroup>{
    items.length
      ? <AnimatedGridContents items={ items } key="AnimatedGridContents" />
      : <div />
  }
  </TransitionGroup>
)

export default AnimatedGrid

AnimatedGrid.propTypes = {
  items: PropTypes.array,
}
