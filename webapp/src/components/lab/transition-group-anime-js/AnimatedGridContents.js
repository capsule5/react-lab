import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import anime from "animejs"


const animationTimings = {
  gridEnter: 1200,
  gridLeave: 600,
  cardEnter: 300,
  cardLeave: 100,
  cardStagger: 50,
}

let currentAnimation

const clearCurrentAnimation = () => {
  // not sure if this does anything/is necessary?
  if (currentAnimation) currentAnimation.pause()
}

const animateIn = (gridContainer) => {
  clearCurrentAnimation()
  const cards = gridContainer.querySelectorAll(".card")
  currentAnimation = anime.timeline()
    .add({
      targets: cards,
      opacity: 0,
      duration: 1,
    })
    .add({
      targets: gridContainer,
      translateX: [ -1000, 0 ],
      opacity: [ 0, 1 ],
      duration: animationTimings.gridEnter,
    })
    .add({
      targets: cards,
      duration: 800,
      opacity: [ 0, 1 ],
      translateY: [ -30, 0 ],
      delay (el, i) {
        return i * 100
      },
    })
}

const animateOut = (gridContainer, callback) => {
  clearCurrentAnimation()

  const cards = gridContainer.querySelectorAll(".card")
  currentAnimation = anime.timeline()
    .add({
      targets: cards,
      duration: 700,
      opacity: [ 1, 0 ],
      translateY: -30,
      delay (el, i) {
        return i * 100
      },
    })
    .add({
      targets: gridContainer,
      translateX: 1000,
      opacity: [ 1, 0 ],
      duration: 1000,
      complete: callback,
      offset: "-=200",
    })
}

class AnimatedGridContents extends React.Component {
  componentDidAppear () {
    animateIn(ReactDOM.findDOMNode(this)) // eslint-disable-line react/no-find-dom-node
  }
  componentDidEnter () {
    animateIn(ReactDOM.findDOMNode(this)) // eslint-disable-line react/no-find-dom-node
  }
  componentWillLeave (callback) {
    animateOut(ReactDOM.findDOMNode(this), callback) // eslint-disable-line react/no-find-dom-node
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
