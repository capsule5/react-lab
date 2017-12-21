import React from "react"
import { keyframes, easing, tween } from "popmotion"
import { MotionValue } from "popmotion-react"


const stateChangeHandlers = {
  play: ({ value }) => {
    keyframes({
      values: [
        { x: 0, y: 0, rotateY: 0, rotateX: 0, background: "#9B65DE" },
        { x: 300, y: 0, rotateY: 180, rotateX: 0, background: "#14D790" },
        { x: 300, y: 200, rotateY: 180, rotateX: 180, background: "#FF1C68" },
        { x: 0, y: 200, rotateY: 0, rotateX: 180, background: "#198FE3" },
        { x: 0, y: 0, rotateY: 0, rotateX: 0, background: "#9B65DE" },
      ],
      duration: 3000,
      easings: easing.easeInOut,
      loop: Infinity,
    }).start(value)
  },
  stop: ({ value }) => {
    tween({
      from: value.get(),
      to: { x: 0, y: 0 },
    }).start(value)
  },
}

const ExFrames = () => (
  <MotionValue
    initialState="stop"
    v={ { background: "violet" } }
    onStateChange={ stateChangeHandlers }
  >
    {({ v, state, setRef, setStateTo }) => (
      <div
        onClick={ state === "play" ? setStateTo.stop : setStateTo.play }
        ref={ setRef }
        style={ {
          transform: `translate(${v.x}px, ${v.y}px) rotateY(${v.rotateY}deg) rotateX(${v.rotateX}deg)`,
          width: "100px",
          height: "100px",
          background: v.background,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#FFF",
        } }
      >{state === "play" ? "stop" : "play"}</div>
    )}
  </MotionValue>
)

export default ExFrames


