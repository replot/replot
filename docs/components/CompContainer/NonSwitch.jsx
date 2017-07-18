import React from "react"


class NonSwitch extends React.Component {

  render() {
    const style = {
      outer: {
        fontSize: "0.8rem",
        minHeight: "15px",
        // display: "inline-block",
        verticalAlign: "top",
        textAlign: "center",
        // width: "50%",
        boxSizing: "border-box",
        marginTop: "8px"
      },
      span: {
        display: "inline-block"
      }
    }

    return(
      <div style={style.outer}>
        <span style={style.span}>{this.props.name}: </span>
        <span style={style.span}>{this.props.switch.toString()}</span>
      </div>
    )
  }

}

export default NonSwitch
