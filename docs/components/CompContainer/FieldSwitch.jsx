import React from "react"


class FieldSwitch extends React.Component {

  changeHandler(e){
    this.props.updateFunc(e.target.value || 1)
  }

  render() {
    const style = {
      input: {
        fontSize: "18px",
        width: "150px",
        display:"inline-block",
        padding: "9px 0"
      }
    }

    return(
      <div style={{marginBottom: "10px"}}>
        <div>{this.props.name}:</div>
        <input type="text" value={parseInt(this.props.switch)}
          style={style.input} onChange={this.changeHandler.bind(this)}/>
      </div>
    )
  }

}

export default FieldSwitch
