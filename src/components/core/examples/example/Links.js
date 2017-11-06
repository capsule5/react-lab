import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.div`
  padding:0;
  margin:0;
  li{
    list-style:none;
    margin-bottom:2px;
    &.isExpendable{
      display:none;
      &.isOpen{
        display:block;
      }
    }
  }
  a{
    text-decoration:none;
    color:#999;
    font-size:13px;
    &:hover{
      text-decoration:underline;
    }
  }
  .expendBtn{
    cursor:pointer;
    background:#AAA;
    border:0;
    color:#FFF;
    padding:0px 4px 0px 4px;
    font-size:11px;
    display:inline-block;
    margin-left:5px;
    border-radius:3px;
    &:hover{
      background:#999;
    }
  }
`
class Links extends React.PureComponent {
  constructor(props) {
    super(props)
    this.expendList = this.expendList.bind(this)

    this.state = {
      isExpendable: this.props.links.length > 1,
      isOpen: false,
    }
  }

  expendList() {
    this.setState({ isOpen: !this.state.isOpen })
  }
  
  render() {
    const { isExpendable, isOpen } = this.state

    return (
      <Wrapper className="data">
        {
          this.props.links.map((link, index) => (
            <li key={ link.id } className={ `${isExpendable && index > 0 && "isExpendable"} ${isOpen && "isOpen"} ` }>
              <a href={ link.value } target="_blank" rel="noopener noreferrer" >{link.value}</a>
              {
                isExpendable && index === 0 &&
                <div onClick={ this.expendList } className="expendBtn">...</div>
              }
            </li>
          ))
        }
      </Wrapper>
    )
  }
}


Links.defaultProps = {}
Links.propTypes = {
  links: PropTypes.array.isRequired,
}

export default Links
