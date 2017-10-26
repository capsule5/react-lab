import React, { PureComponent } from "react"
import { Motion, spring } from "react-motion"

class ReactMotionExample extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <section>
        <h3>Simple value animation</h3>
        <Motion defaultStyle={ { x: 0 } } style={ { x: spring(10) } }>
          {value => <div>{value.x}</div>}
        </Motion>
      </section>
    )
  }
}

export default ReactMotionExample
