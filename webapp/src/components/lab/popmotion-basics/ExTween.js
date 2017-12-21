import React from "react"
import { tween, easing } from "popmotion"
import { MotionValue } from "popmotion-react"
import styled from "styled-components"

const Wrapper = styled.div`
  background: violet;
  width: 100px;
  height: 100px;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#FFF;
`

const stateChangeHandlers = {
  on: ({ value }) => tween({
    from: value.get(),
    to: { x: 300, radius: 100 },
    duration: 1000,
    ease: easing.backOut,
  }).start(value),
  off: ({ value }) => tween({
    from: value.get(),
    to: { x: 0, radius: 0 },
  }).start(value),
}

const ExTween = () => (
  <MotionValue onStateChange={ stateChangeHandlers }>
    {({ v, state, setStateTo }) => (
      <Wrapper
        style={ {
          borderRadius: `${v.radius}px`,
          transform: `translateX(${v.x}px)`,
        } }
        onClick={ state === "on" ? setStateTo.off : setStateTo.on }
      >click</Wrapper>
    )}
  </MotionValue>
)

export default ExTween
