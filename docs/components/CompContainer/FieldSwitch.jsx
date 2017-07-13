import React from "react"
import Radium from "radium"


class FieldSwitch extends React.Component {

  changeHandler(e){
    let val
    if (this.props.input === "number") {
      val = parseInt(e.target.value) || 1
    }
    else {
      val = String(e.target.value)
    }
    this.props.updateFunc(val)
  }

  render() {
    const style = {
      outer: {
        fontSize: "18px",
        minHeight: "80px",
        display: "inline-block",
        verticalAlign: "top",
        textAlign: "center",
        width: "50%",
        boxSizing: "border-box",
        marginTop: "8px"
      },
      input: {
        fontSize: "18px",
        width: "60%",
        padding: "9px 3px",
        border: "3px solid #3d3d3d",
        transition: "border 0.3s, boxShadow 0.3s",
        ":focus":{
          outline: "none",
          border: "3px solid #a0a0a0",
          boxShadow: "0 0 3px 1px #505050"
        }
      }
    }

    return(
      <div style={style.outer}>
        <div>{this.props.name}:</div>
        <input type="text" style={style.input}
          value={this.props.input === "number" ? parseInt(this.props.switch) : this.props.switch}
          onChange={this.changeHandler.bind(this)}/>
      </div>
    )
  }

}

export default Radium(FieldSwitch)
