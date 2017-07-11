import React from "react"


class FieldSwitch extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      value: this.props.switch
    }
  }

  changeHandler(e){
    this.setState({
      value: e.target.value || this.props.switch
    })
  }

  clickHandler() {
    this.props.updateFunc(this.state.value)
  }

  render() {
    const style = {
      input: {
        fontSize: "18px",
        width: "150px",
        display:"inline-block",
        padding: "9px 0"
      },
      switch: {
        width: "150px",
        padding: "10px 0",
        display:"inline-block",
        textAlign: "center",
        color: "#FFFFFF",
        backgroundColor: "#00AA00",
        cursor: "pointer"
      }
    }

    return(
      <div>
        <div>{this.props.title}</div>
        <input type="text" placeholder={"Current: " + this.props.switch}
          style={style.input} onChange={this.changeHandler.bind(this)}/>
        <div className="button" style={style.switch}
          onClick={this.clickHandler.bind(this)}>Update</div>
      </div>
    )
  }

}

export default FieldSwitch
