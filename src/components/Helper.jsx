import React, { Component } from "react"
import onClickOutside from "react-onclickoutside"

class Helper extends Component {

  state = {
    isOpen: false,
  }

  handleClick = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  handleClickOutside = () => {
    this.setState({ isOpen: false })
  }

  render() {
    const { text, imgSrc } = this.props
    const { isOpen } = this.state
    return (
      <div
        className={isOpen ? "hint hint_active" : "hint"}
      >
        <span onClick={this.handleClick}>?</span>
        <div className={isOpen ? "hint__info hint__info_showData" : "hint__info"}>
            <span>{text}</span>
            {imgSrc &&
              <img src={imgSrc} alt={text} />
            }
        </div>
      </div>
    )
  }
}

export default onClickOutside(Helper)
