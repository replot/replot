import React from "react"


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
        float: "left",
        fontSize: "18px",
        margin: "0 100px 10px 0"
      },
      input: {
        fontSize: "18px",
        width: "150px",
        padding: "9px 0"
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

export default FieldSwitch
