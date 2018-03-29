import React from "react"
import {ColorTheme, SectionContainer} from "replot-helpers"
import GridContainer from "../components/GridContainer.jsx"


const ComponentExamplesSection = ({examples, palette}) => {
  const style = {
    title: {
      fontSize: "35px",
      color: ColorTheme[palette].body.text,
      textAlign: "center",
      paddingTop: "20px",
      paddingBottom: "30px",
    },
  }

  return(
    <SectionContainer>
      <a class="anchor" id="examples"/>
      <h2 style={style.title}>Examples</h2>
      <GridContainer palette={palette} data={examples}/>
    </SectionContainer>
  )
}

export default ComponentExamplesSection
