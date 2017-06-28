import React from "react"


class PercentButton extends React.Component {

  clickHandler() {
    this.props.updatePercentDisplay({
      percentDisplay: this.props.title
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
        {this.props.text}
      </div>
    )
  }

}

class PercentSwitch extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      percentDisplay: true
    }
  }

  render() {
    const style = {
      switch: {
        width: "300px",
        display:"inline-block",
      }
    }

    let types = [false, true]
    let text = ["false", "true"]
    let buttons = []
    let color = ""
    for (var i=0; i < types.length; i++) {
      if (types[i] == this.props.percentDisplay) {
        color = "#00AA00"
      } else {
        color = "#444444"
      }
      buttons.push(
        <PercentButton key={i} title={types[i]} text={text[i]}
        updatePercentDisplay={this.props.updatePercentDisplay.bind(this)} color={color} />
      )
    }

    return(
      <div>
        <div> Display Percentages: </div>
        <div className="switch" style={style.switch}>
          {buttons}
        </div>
      </div>
    )
  }

}

export default PercentSwitch
