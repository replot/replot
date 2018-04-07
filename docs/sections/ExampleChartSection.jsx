import React from "react"
import {ColorTheme, SectionContainer} from "replot-helpers"
import CodeBlock from "../components/CodeBlock.jsx"


const ExampleChartSection = ({palette, title, children}) => {
  const style = {
    title: {
      fontSize: "45px",
      color: ColorTheme[palette].body.text,
      padding: 15,
    },
    container: {
      textAlign: "center",
    },
  }

  return(
    <SectionContainer>
      <div style={style.container}>
        <h1 style={style.title}> {title} </h1>
        {children}
      </div>
    </SectionContainer>
  )
}

export default ExampleChartSection
