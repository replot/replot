import React from "react"
import {ColorTheme, SectionContainer} from "replot-helpers"
import TreeExample from "../components/examples/TreeExample.jsx"
import BarExample from "../components/examples/BarExample.jsx"
import LineExample from "../components/examples/LineExample.jsx"
import ScatterExample from "../components/examples/ScatterExample.jsx"
import MapExample from "../components/examples/MapExample.jsx"
import BoxPlotExample from "../components/examples/BoxPlotExample.jsx"
import NetworkExample from "../components/examples/NetworkExample.jsx"

const ComponentLandingSection = ({type, palette}) => {
  const style = {
    container: {
      paddingTop: "140px",
    },
  }

  let content
  switch (type) {
    case "treemap":
      content = <TreeExample palette={palette}/>
      break
    case "bar":
      content = <BarExample palette={palette}/>
      break
    case "line":
      content = <LineExample palette={palette}/>
      break
    case "scatter":
      content = <ScatterExample palette={palette}/>
      break
    case "boxplot":
      content = <BoxPlotExample palette={palette}/>
      break
    case "map":
      content = <MapExample palette={palette}/>
      break
    case "network":
      content = <NetworkExample palette={palette}/>
      break
    default:
      content = null
  }

  return(
    <SectionContainer>
      <div style={style.container}>
        {content}
      </div>
    </SectionContainer>
  )
}

export default ComponentLandingSection
