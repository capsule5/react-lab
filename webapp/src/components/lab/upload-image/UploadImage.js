import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Example from "components/core/examples/example/Example"
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import { compose } from "utils/helpers"
import TransitionGroup from "react-transition-group/TransitionGroup"
import ItemAnimated from "components/core/examples/ItemAnimated"

const ImgsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Img = styled.div`
  display: block;
  height:300px;
  margin:0 5px 5px 0;
  position: relative;

  img.upload-img{
    position:absolute;
    top:0;
    left:0;
    opacity:0;
    cursor:pointer;
    transition:opacity .3s ease-out;
    &:hover{
      opacity:1;
    }
  }
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
  z-index:2;
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
        <TransitionGroup>
          {
            allFilesQuery.allFiles && allFilesQuery.allFiles.map((file) => {
              const pathSVG = `${file.path.split(".")[0]}.svg`
              return (
                <ItemAnimated key={ file.id } display="inline-block">
                  <Img>
                    <CloseBtn onClick={ () => {
                      this.deteteFile(file.id)
                    } }
                    >×</CloseBtn>
                    <img src={ `http://localhost:3002/${pathSVG}` } alt={ file.path } height="300" className="upload upload-svg" />
                    <img src={ `http://localhost:3002/${file.path}` } alt={ file.path } height="300" className="upload upload-img" />
                  </Img>
                </ItemAnimated>
              )
            })
          }
        </TransitionGroup>
      </ImgsWrapper>)
    }

    return null
  }

  render() {
    const { allFilesQuery } = this.props
    return (
      <Example data={ this.props.data }>
        {this.renderFiles()}
        {
          allFilesQuery.allFiles &&
          <div>
            <input
              type="file"
              required
              onChange={ ({ target }) =>
                target.validity.valid && this.uploadFile(target.files[0])
              }
            />
            <div className="note">
              Note: you will need potrace (sudo apt-get potrace) to generate SVG
            </div>
          </div>
        }
        
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

