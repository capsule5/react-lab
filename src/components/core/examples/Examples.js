import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import withExamples from "./withExamples"
import Layout from "../Layout"
import ExamplesNav from "./ExamplesNav"
import TagsNav from "./tags-nav/TagsNav"
import ExamplesRouter from "./ExamplesRouter"


const Wrapper = styled.div`
  display:flex;
  .content{
    flex:1
  }
`

const Examples = ({ examples, availableTags }) => (
  <Layout>
    <Wrapper>
      <ExamplesNav examples={ examples } />
      <div className="content">
        <ExamplesRouter examples={ examples } />
      </div>
      <TagsNav availableTags={ availableTags } />
    </Wrapper>
  </Layout>
)

Examples.propTypes = {
  availableTags: PropTypes.array.isRequired,
  examples: PropTypes.array.isRequired,
}

export default withExamples(Examples)
