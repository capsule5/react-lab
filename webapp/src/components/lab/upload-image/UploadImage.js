import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Example from "components/core/examples/example/Example"
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import { compose } from "utils/helpers"

const ImgsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Img = styled.div`
  display: block;
  height:100px;
  margin:0 5px 5px 0;
  position: relative;
`

const CloseBtn = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  display:flex;
  align-items:center;
  justify-content: center;
  color: #000;
  font-size: 16px;
  background:#FFF;
  border-radius:2px;
  cursor: pointer;
  &:hover{
    color: #CCC;
  }
`

const ALL_FILES_QUERY = gql`
query AllFilesQuery {
  allFiles {
    id
    path
    filename
  }
}
`

const UPLOAD_FILE_MUTATION = gql`
  mutation($file: Upload!) {
    uploadFile(file: $file) {
      id
    }
  }
`

const DELETE_FILE_MUTATION = gql`
  mutation DeleteFileMutation($id: ID!) {
    deleteFile(
      id: $id
    ) {
      id
    }
  }
`

class UploadImage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
    this.deteteFile = this.deteteFile.bind(this)
  }

  uploadFile(file) {
    this.props.uploadFileMutation({
      variables: { file },
      refetchQueries: [ { query: ALL_FILES_QUERY } ],
    })
  }

  deteteFile(id) {
    this.props.deleteFileMutation({
      variables: {
        id,
      },
      refetchQueries: [ { query: ALL_FILES_QUERY } ],
    })
  }

  renderFiles() {
    const { allFilesQuery } = this.props
    if (allFilesQuery) {
      // loading
      if (allFilesQuery.loading) {
        return <div>Loading</div>
      }

      // error
      if (allFilesQuery.error) {
        return <div> Error - start API server in /api <span className="graphql-bash">$ node ./src/index.js</span> </div>
      }

      // ok
      return (<ImgsWrapper>
        {
          allFilesQuery.allFiles && allFilesQuery.allFiles.map(file => (
            <Img key={ file.id }>
              <CloseBtn onClick={ () => {
                this.deteteFile(file.id)
              } }
              >×</CloseBtn>
              <img src={ `http://localhost:3001/${file.path}` } alt={ file.path } height="100" />
            </Img>
            
          ))
        }
      </ImgsWrapper>)
    }

    return null
  }

  render() {
    return (
      <Example data={ this.props.data }>
        {this.renderFiles()}
        <input
          type="file"
          required
          onChange={ ({ target }) =>
            target.validity.valid && this.uploadFile(target.files[0])
          }
        />
      </Example>
    )
  }
}

UploadImage.propTypes = {
  data: PropTypes.object.isRequired,
  allFilesQuery: PropTypes.any.isRequired,
  uploadFileMutation: PropTypes.any.isRequired,
  deleteFileMutation: PropTypes.any.isRequired,
}

export default compose(
  graphql(UPLOAD_FILE_MUTATION, { name: "uploadFileMutation" }),
  graphql(ALL_FILES_QUERY, { name: "allFilesQuery" }),
  graphql(DELETE_FILE_MUTATION, { name: "deleteFileMutation" }),
)(UploadImage)

