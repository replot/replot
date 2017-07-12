import React from "react"
import HoverText from "./HoverText.jsx"


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
        color: (this.state.active ? "#ffffff" : "#C0C0C0"),
        marginBottom: (this.state.active ? "300px" : null)
      }
    }

    let options = []
    if (Array.isArray(this.props.children)){
      for (let i =0; i < this.props.children.length; i++){
        options.push(
          <HoverText key={this.props.children[i].props.name}>
            {this.props.children[i].props.name + ": " + this.props.children[i].props.switch}
          </HoverText>
        )
      }
    } else if (this.props.children){
      options.push(
        <HoverText key={this.props.children.props.name}>
          {this.props.children.props.name + ": " + this.props.children.props.switch}
        </HoverText>
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


export default OptionsPane
