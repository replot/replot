import React from "react"


class ScaleButton extends React.Component {

  clickHandler() {
    this.props.updateScale({
      scale: this.props.title
    })
  }

  render() {
    let style = {
      button: {
        width: "50%",
        float: "right",
        padding: "10px",
        textAlign: "center",
        color: "#FFFFFF",
        backgroundColor: this.props.color,
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

class ScaleSwitch extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      scale: "log"
    }
  }

  render() {
    const style = {
      switch: {
        width: "300px",
        float: "right",
        display:"inline-block",
      }
    }

    let types = ["default", "log"]
    let buttons = []
    let color = ""
    for (var i=0; i < types.length; i++) {
      if (types[i] == this.props.scale) {
        color = "#00AA00"
      } else {
        color = "#444444"
      }
      buttons.push(
        <ScaleButton title={types[i]}
        updateScale={this.props.updateScale.bind(this)} color={color} />
      )
    }

    return(
      <div className="switch" style={style.switch}>
        {buttons}
      </div>
    )
  }

}

export default ScaleSwitch
