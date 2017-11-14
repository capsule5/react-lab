import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import withModal from "./withModal"


const Wrapper = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, .3);
  box-sizing: border-box;
  flex-wrap: wrap;
  height: 100%;
  left: 0;
  overflow-y: auto;
  position: fixed;
  top: 0;
  transition: opacity .3s ease-out;
  width: 100%;
  z-index: 2000;
  opacity:0;

  &.modal--isMounted {
    opacity: 1
  }
    .modal-close{
      position:absolute;
      top:0;
      right:0;
      display:block;
      padding:5px;
      cursor:pointer;
    }
    .modal-wrapper {
      background: #fff;
      border-radius: .1875em;
      box-sizing: border-box;
      max-width: 47.5em; /* 760px */
      opacity: 0;
      margin: 120px auto;
      padding: 20px;
      position: relative;
      transition: all .3s ease-out 0s;
      transform: translateY(50px)
    }

    .modal-wrapper--isMounted {
      opacity: 1;
      transform: translateY(0);
      transition: all .3s ease-out .2s;
    }
`


const Modal = ({
  children,
  isMounted,
  onClose,
  onTransitionEnd,
}) => (
  <Wrapper className={ isMounted && "modal--isMounted" } onClick={ onClose } onTransitionEnd={ onTransitionEnd }>
    <div className={ `modal-wrapper ${isMounted && "modal-wrapper--isMounted"}` }>
      <a className="modal-close" onClick={ onClose } >×</a>
      { children }
    </div>
  </Wrapper>
)

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  isMounted: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onTransitionEnd: PropTypes.func.isRequired,
}

Modal.defaultProps = {
  isShow: false,
  isMounted: false,
}

export default withModal(Modal)
