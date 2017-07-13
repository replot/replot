import React from "react"
import Radium from "radium"


class OptionsPane extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      active: false
    }
  }

  changeActive() {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    const style = {
      outer: {
        marginTop: "5px",
      },
      heading: {
        fontSize: "22px",
        paddingLeft: "20px"
      },
      expand: {
        fontSize: "22px",
        float: "right",
        paddingRight: "20px"
      },
      topBar: {
        cursor: "pointer",
        borderBottom: "2px solid #808080"
      },
      options: {
        padding:  "10px",
        fontSize: 0,
        color: (this.state.active ? "#ffffff" : "#C0C0C0")
      },
      text: {
        fontSize: "16px",
        listStyleType: "none",
        display: "inline-block",
        textAlign: "center",
        cursor: "pointer",
        margin: "0 30px 5px 0",
        textShadow: "0px 3px 10px #000000",
        color: "#f5f5f5",
        ":hover": {
          textShadow: null,
          color: "#3399cc",
          textDecoration: "underline"
        }
      }
    }

    let options = []
    if (Array.isArray(this.props.children)){
      for (let i =0; i < this.props.children.length; i++){
        options.push(
          <li key={this.props.children[i].props.name} style={style.text}>
            {this.props.children[i].props.name + ": " + this.props.children[i].props.switch}
          </li>
        )
      }
    } else if (this.props.children){
      options.push(
        <li key={this.props.children.props.name} style={style.text}>
          {this.props.children.props.name + ": " + this.props.children.props.switch}
        </li>
      )
    }

    return (
      <div style={style.outer} onClick={(this.state.active ? null : this.changeActive.bind(this))}>
        <div style={style.topBar} onClick={this.changeActive.bind(this)} >
          <div style={style.expand}>
            {this.state.active ? "\u2b9d" : "\u2b9f" }
          </div>
          <div style={style.heading}>
            Options
          </div>
        </div>
        <div style={style.options}>
          {!this.state.active &&
            options
          }
          {this.state.active &&
            this.props.children
          }
        </div>
      </div>
    )
  }
}


export default Radium(OptionsPane)
