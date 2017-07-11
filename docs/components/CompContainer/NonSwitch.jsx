import React from "react"


class NonSwitch extends React.Component {

  render() {
    const style = {
      text: {
        fontSize: "20px",
        marginBottom: "10px"
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
