import React from "react"


class HoverText extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  activate() {
    this.setState({active:true})
  }

  deactivate() {
    this.setState({active:false})
  }

  render() {
    const style = {
      fontSize: "16px",
      listStyleType: "none",
      float: "left",
      cursor: "pointer",
      margin: "0 30px 5px 0",
      textShadow: (this.state.active? null : "0px 3px 10px #000000"),
      color: (this.state.active ? "#3399cc" : "#f5f5f5"),
      textDecoration: (this.state.active ? "underline" : null)
    }

    return (
      <li onMouseOver={this.activate.bind(this)} onMouseOut={this.deactivate.bind(this)} style={style}>
        {this.props.children}
      </li>
    )
  }
}

export default HoverText
