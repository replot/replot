import React from "react"
import hljs from "highlight.js"
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
      <pre>
        <code dangerouslySetInnerHTML={{__html: hljs.highlightAuto(code).value}}/>
      </pre>
      <a className="anchor" id="data"/>
      <h3 style={style.heading}> Data </h3>
      <pre>
        <code dangerouslySetInnerHTML={{__html: hljs.highlightAuto(data).value}}/>
      </pre>
    </SectionContainer>
  )
}

export default ExampleChartSection
