import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { compose } from "utils/helpers"
import withExamples from "./withExamples"
import Layout from "../Layout"
import ExamplesNav from "./ExamplesNav"
import TagsNav from "./tags-nav/TagsNav"
import ExamplesRouter from "./ExamplesRouter"
import withScroll from "../withScroll"


const Wrapper = styled.div`
  display:flex;
  #ExamplesWrapper{
    flex:1
  }
`

const Examples = ({ examples, availableTags, scroll }) => (
  <Layout>
    <Wrapper>
      <ExamplesNav examples={ examples } scroll={ scroll } />
      <div id="ExamplesWrapper">
        <ExamplesRouter examples={ examples } />
      </div>
      <TagsNav availableTags={ availableTags } scroll={ scroll } />
    </Wrapper>
  </Layout>
)

Examples.propTypes = {
  availableTags: PropTypes.array.isRequired,
  examples: PropTypes.array.isRequired,
  scroll: PropTypes.object.isRequired,
}

const enhance = compose(
  withScroll,
  withExamples
)

export default enhance(Examples)
