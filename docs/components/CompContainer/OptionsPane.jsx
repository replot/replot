import React from "react"
import Radium from "radium"


class OptionsPane extends React.Component {



  render() {
    const style = {
      outer: {
        marginTop: "5px",
      },
      options: {
        padding:  "10px",
        fontSize: 0,
        height: "45%",
        overflow: "auto",
      }
    }


    return (
      <div style={style.outer}>
        <div style={style.options}>
          {
            this.props.children
          }
        </div>
      </div>
    )
  }
}


export default Radium(OptionsPane)
