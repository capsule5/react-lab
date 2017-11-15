import React from "react"
import ScrollWatch from "./ScrollWatch"
import ShowPosition from "../ShowPosition"

class RenderProps extends React.Component {
  render() {
    return (
      <div>
        <ScrollWatch render={
          (x, y) => (
            <ShowPosition x={ x } y={ y } />
          )
        }
        />
      </div>
    )
  }
}

export default RenderProps
