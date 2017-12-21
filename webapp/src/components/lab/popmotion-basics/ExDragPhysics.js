import React from "react"
import { physics, listen, pointer } from "popmotion"
import { MotionValue } from "popmotion-react"


const stateChangeHandlers = {
  rest: ({ context, value, ref, setStateTo }) => {
    if (context.listener) context.listener.stop()
    
    physics({
      from: value.get(),
      velocity: value.getVelocity(),
      friction: 0.6,
    }).start(value)

    context.listener = listen(ref, "mousedown").start(setStateTo.isDragging)
  },
  isDragging: ({ value, setStateTo, e, context }) => {
    if (context.listener) context.listener.stop()

    e.preventDefault()

    pointer(value.get()).start(value)

    context.listener = listen(document, "mouseup").start(setStateTo.rest)
  },
}

const ExDragPhysics = () => (
  <MotionValue
    initialState="rest"
    v={ { x: 0, y: 0 } }
    onStateChange={ stateChangeHandlers }
  >
    {({ v, setRef }) => (
      <div
        ref={ setRef }
        style={ {
          transform: `translate(${v.x}px, ${v.y}px)`,
          width: "100px",
          height: "100px",
          background: "violet",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#FFF",
        } }
      >drag</div>
    )}
  </MotionValue>
)

export default ExDragPhysics


