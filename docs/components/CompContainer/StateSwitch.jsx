import React from "react"


class StateButton extends React.Component {

  clickHandler() {
    this.props.updateFunc(this.props.title)
  }

  render() {
    let style = {
      button: {
        width: `${this.props.width * 100}%`,
        float: "right",
        padding: "10px",
        textAlign: "center",
        color: "#FFFFFF",
        backgroundColor: this.props.color,
        cursor: "pointer"
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
      switch: {
        width: "300px",
        display:"inline-block",
      }
    }

    let types = this.props.states
    let buttons = []
    let color = ""
    for (var i=0; i < types.length; i++) {
      if (types[i] == this.props.switch) {
        color = "#00AA00"
      } else {
        color = "#444444"
      }
      buttons.push(
        <StateButton key={i} title={types[i]} width={1/this.props.states.length}
        updateFunc={this.props.updateFunc} color={color} />
      )
    }

    return(
      <div>
        <div> {this.props.title} </div>
        <div className="switch" style={style.switch}>
          {buttons}
        </div>
      </div>
    )
  }

}

export default StateSwitch
