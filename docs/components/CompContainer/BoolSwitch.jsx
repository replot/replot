import React from "react"


class BoolButton extends React.Component {

  clickHandler() {
    this.props.updateFunc(this.props.title)
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
      switch: {
        width: "300px",
        display:"inline-block",
        marginBottom: "5px"
      }
    }

    let types = [false, true]
    let text = ["false", "true"]
    let buttons = []
    let color = ""
    for (var i=0; i < types.length; i++) {
      if (types[i] == this.props.switch) {
        color = "#00AA00"
      } else {
        color = "#444444"
      }
      buttons.push(
        <BoolButton key={i} name={this.props.name} title={types[i]} text={text[i]}
        updateFunc={this.props.updateFunc} color={color} />
      )
    }

    return(
      <div style={{marginBottom: "10px"}}>
        <div>{this.props.name}:</div>
        <div className="switch" style={style.switch}>
          {buttons}
        </div>
      </div>
    )
  }

}

export default BoolSwitch
