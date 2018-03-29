import React from "react"
import marked from "marked"
import {ColorTheme, SectionContainer} from "replot-helpers"


const ComponentDocSection = ({doc, palette}) => {
  const style = {
    title: {
      fontSize: "35px",
      color: ColorTheme[palette].body.text,
      textAlign: "center",
      paddingTop: "20px",
      paddingBottom: "30px",
    },
    body: {
      maxWidth: "800px",
      margin: "auto",
    }
  }

  return(
    <SectionContainer>
      <h2 style={style.title}>Documentation</h2>
      <div style={style.body} dangerouslySetInnerHTML={{__html: marked(doc)}}/>
    </SectionContainer>
  )
}

export default ComponentDocSection
