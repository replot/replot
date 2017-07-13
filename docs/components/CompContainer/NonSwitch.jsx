import React from "react"


class NonSwitch extends React.Component {

  render() {
    const style = {
      outer: {
        fontSize: "18px",
        minHeight: "40px",
        display: "inline-block",
        verticalAlign: "top",
        textAlign: "center",
        width: "50%",
        boxSizing: "border-box",
        marginTop: "8px"
      },
      text: {
        textDecoration: "underline"
      }
    }

    return(
      <div style={style.outer}>
        <span>{this.props.name}: </span>
        <span style={style.text}>{this.props.switch.toString()}</span>
      </div>
    )
  }

}

export default NonSwitch
