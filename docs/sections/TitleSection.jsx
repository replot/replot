import React from "react"
import SectionContainer from "../components/SectionContainer.jsx"
import CenteredBlock from "../components/CenteredBlock.jsx"


class TitleSection extends React.Component {

  constructor(props) {
    super(props)
    this.displayName = "TitleSection"
  }

  render() {

    return(
      <SectionContainer>
        <CenteredBlock>
          <img src="static/logo.png" />
          <h3>
            Beautiful Visualizations for React
          </h3>
        </CenteredBlock>
      </SectionContainer>
    )
  }

}


export default TitleSection
