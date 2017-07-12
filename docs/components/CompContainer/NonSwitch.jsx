import React from "react"


class NonSwitch extends React.Component {

  render() {
    const style = {
      text: {
        float: "left",
        fontSize: "18px",
        margin: "0 100px 10px 0"
      }
    }

    return(
      <div style={style.text}>
        <span>{this.props.name}: </span>
        <span>{this.props.switch.toString()}</span>
      </div>
    )
  }

}

export default NonSwitch
