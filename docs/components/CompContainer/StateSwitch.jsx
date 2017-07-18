import React from "react"
import Radium from "radium"


class StateButton extends React.Component {

  clickHandler() {
    this.props.updateFunc(this.props.title)
  }

  render() {
    let style = {
      button: {
        fontSize: "0.8rem",
        width: `${this.props.width * 100}%`,
        minWidth: "5rem",
        float: "left",
        padding: "3px 4px",
        textAlign: "center",
        color: "#FFFFFF",
        backgroundColor: this.props.color,
        borderRadius: "15px",
        cursor: "pointer",
        transition: "background-color .4s",
        ":hover":{
          backgroundColor: this.props.bgColor
        }
      }
    }

    return (
      <div className="button" style={style.button}
        onClick={this.clickHandler.bind(this)}>
        {this.props.title}
      </div>
    )
  }

}

class StateSwitch extends React.Component {

  render() {
    const style = {
      outer: {
        fontSize: "0.8rem",
        minHeight: "15px",
        // display: "inline-block",
        verticalAlign: "top",
        // width: "50%",
        boxSizing: "border-box",
        marginTop: "8px"
      },
      inner: {
        width: "60%",
        textAlign: "center",
        margin: "auto"
      }
    }

    let types = this.props.states
    let buttons = []
    let color = ""
    let bgColor = ""
    for (var i=0; i < types.length; i++) {
      if (types[i] == this.props.switch) {
        color = "#0d8d82"
        bgColor = "#0d8d82"
      } else {
        color = "#0d404e"
        bgColor = "#23596c"
      }
      let StyledButton = Radium(StateButton)
      buttons.push(
        <StyledButton key={i} title={types[i]} width={1/this.props.states.length}
        updateFunc={this.props.updateFunc} color={color} bgColor={bgColor}/>
      )
    }

    return(
      <div style={style.outer}>
        <div style={style.inner}>
          <div style={{display: "inline-block"}}>{this.props.name}:</div>
          <div className="switch" style={{display: "inline-block", verticalAlign: "middle"}}>
            {buttons}
          </div>
        </div>
      </div>
    )
  }

}

export default StateSwitch
