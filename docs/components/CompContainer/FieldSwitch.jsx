import React from "react"
import Radium from "radium"
import colors from "../../colors"


class FieldSwitch extends React.Component {

  changeHandler(e){
    let val
    if (this.props.input === "number") {
      val = parseFloat(e.target.value) || 1
    }
    else {
      val = String(e.target.value)
    }
    this.props.updateFunc(val)
  }

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
      input: {
        borderRadius: "15px 15px 15px 15px",
        backgroundColor: colors.bodyBg,
        height: "1.5rem",
        width: "6rem",
        color: colors.bodyText,
        borderColor: "rgba(0, 218, 157, 0.50)",
        textAlign: "center",
        fontSize: "0.8rem",
        display: "inline-block",
        ":focus":{
          outline: "none",
          borderColor: "rgba(0, 218, 157, 1)",
          boxShadow: "0 0 3px 1px #505050"
        }
      }
    }

    return(
      <div style={style.outer}>
        <div style={{display: "inline-block", marginRight: "5px"}}>{this.props.name}: </div>
        <input type="text" style={style.input}
          value={this.props.input === "number" ? parseFloat(this.props.switch) : this.props.switch}
          onChange={this.changeHandler.bind(this)}/>
      </div>
    )
  }

}

export default Radium(FieldSwitch)
