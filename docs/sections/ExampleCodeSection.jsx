import React from "react"
import {SectionContainer} from "replot-helpers"
import CodeBlock from "../components/CodeBlock.jsx"


const ExampleChartSection = ({palette, code, data}) => {
  const style = {
    heading: {
      textAlign: "center",
    }
  }

  return(
    <SectionContainer>
      <a className="anchor" id="code"/>
      <h3 style={style.heading}> Code </h3>
      <CodeBlock palette={palette}> {code} </CodeBlock>
      <a className="anchor" id="data"/>
      <h3 style={style.heading}> Data </h3>
      <CodeBlock palette={palette}> {data} </CodeBlock>
    </SectionContainer>
  )
}

export default ExampleChartSection
