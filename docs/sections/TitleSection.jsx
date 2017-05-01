import React from "react"
import Radium from "radium"
import SectionContainer from "./SectionContainer.jsx"


class TitleSection extends React.Component {

  constructor(props) {
    super(props)
    this.displayName = "TitleSection"
  }

  render() {
    const style = {
      container: {
        textAlign: "center",
      },
      pseudoBlock: {
        content: " ",
        height: "100%",
        display: "inline-block",
        verticalAlign: "middle",
        textAlign: "center",
      },
      centeredTitle: {
        display: "inline-block",
        verticalAlign: "middle",
        textAlign: "center",
        width: "40%",
        minWidth: "400px",
      },
    }

    return(
      <SectionContainer>
        <div style={style.container}>
          <span style={style.pseudoBlock} />
          <div style={style.centeredTitle}>
            <img src="static/logo.png" />
            <h3 style={style.slogan}>
              Beautiful Visualizations for React
            </h3>
          </div>
        </div>
      </SectionContainer>
    )
  }

}


export default TitleSection
