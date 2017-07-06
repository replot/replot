import React from "react"


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
        marginTop: "20px",
        border: "2px solid #DCDCDC",
        borderRadius: "10px"
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
        color: (this.state.active ? "#ffffff" : "#C0C0C0")
      }
    }

    // let options = []
    // for (var key in this.props.children.props){
    //   if (typeof(this.props.children.props[key]) != "function"){
    //     options.push(key + ": " + this.props.children.props[key])
    //   }
    // }

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
          {this.state.active &&
            this.props.children
          }
        </div>
      </div>
    )
  }
}


export default OptionsPane
