import React from "react"
import {ColorTheme} from "replot-helpers"


class CodeBlock extends React.Component {

  render() {
    const style = {
      margin: "50px auto",
      maxWidth: "800px",
      width: "80%",
      padding: "10px",
      border: `1px solid ${ColorTheme[this.props.palette].codeBlockBorders}`,
      borderLeft: `2px solid ${ColorTheme[this.props.palette].codeBlockLeftBorder}`,
      whiteSpace: "pre",
      fontFamily: "monospace",
      overflowX: "scroll"
    }

    return(
      <div style={style}>
        {this.props.children}
      </div>
    )
  }

}


export default CodeBlock
