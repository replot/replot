import React from "react"


class BoolButton extends React.Component {

  clickHandler() {
    this.props.updateFunc(this.props.title)
  }

  render() {
    let style = {
      button: {
        fontSize: "18px",
        width: "50%",
        float: "left",
        padding: "10px 5px",
        textAlign: "center",
        color: "#FFFFFF",
        backgroundColor: this.props.color,
        cursor: "pointer"
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

class BoolSwitch extends React.Component {

  render() {
    const style = {
      outer: {
        fontSize: "18px",
        minHeight: "90px",
        display: "inline-block",
        verticalAlign: "top",
        width: "50%",
        boxSizing: "border-box",
        marginTop: "8px"
      },
      inner: {
        width: "60%",
        textAlign: "center",
        margin: "auto"
      }
    }

    let types = [true, false]
    let text = ["true", "false"]
    let buttons = []
    let color = ""
    for (var i=0; i < types.length; i++) {
      if (types[i] == this.props.switch) {
        color = "#00AA00"
      } else {
        color = "#444444"
      }
      buttons.push(
        <BoolButton key={i} title={types[i]} text={text[i]}
        updateFunc={this.props.updateFunc} color={color} />
      )
    }

    return(
      <div style={style.outer}>
        <div style={style.inner}>
          <div>{this.props.name}:</div>
          <div className="switch">
            {buttons}
          </div>
        </div>
      </div>
    )
  }

}

export default BoolSwitch
