import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import { TimelineLite, Elastic } from "gsap"

const animationTimings = {
  gridEnter: 1200,
  gridLeave: 600,
  cardEnter: 300,
  cardLeave: 100,
  cardStagger: 50,
}

// nice gsap cheatsheet: https://ihatetomatoes.net/wp-content/uploads/2016/07/GreenSock-Cheatsheet-4.pdf
const animateIn = (gridContainer) => {
  const cards = gridContainer.querySelectorAll(".card")
  new TimelineLite()
    .fromTo(gridContainer, animationTimings.gridEnter / 1000, { x: -2000 }, { x: 0, ease: Elastic.easeOut })
    .staggerFromTo(cards, animationTimings.cardEnter / 1000, { autoAlpha: 0, y: -30 }, { autoAlpha: 1, y: 0 }, 0.1)
}

const animateOut = (gridContainer, callback) => {
  const cards = gridContainer.querySelectorAll(".card")
  new TimelineLite()
    .staggerTo(cards, animationTimings.cardLeave / 1000, { autoAlpha: 0, y: -30 }, 0.1)
    .fromTo(gridContainer, animationTimings.gridLeave / 1000, { x: 0 }, { x: 2000, autoAlpha: 0, onComplete: callback })
}

class AnimatedGridContents extends React.Component {
  componentDidMount() {
    this.DOMNode = ReactDOM.findDOMNode(this) // eslint-disable-line react/no-find-dom-node
  }
  componentDidAppear () {
    animateIn(this.DOMNode)
  }
  componentDidEnter () {
    animateIn(this.DOMNode)
  }
  componentWillLeave (callback) {
    animateOut(this.DOMNode, callback)
  }
  render () {
    return (<div className="grid grid-to-animate" >
      {this.props.items.map(item => <div className="card" key={ item }>{item}</div>)}
    </div>)
  }
}

AnimatedGridContents.propTypes = {
  items: PropTypes.array.isRequired,
}

export default AnimatedGridContents
