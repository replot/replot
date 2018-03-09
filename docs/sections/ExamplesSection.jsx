import React from "react"
import {SectionContainer} from "replot-helpers"
import TreeExample from "../components/examples/TreeExample.jsx"
import BarExample from "../components/examples/BarExample.jsx"
import GroupedBarExample from "../components/examples/GroupedBarExample.jsx"
import LineExample from "../components/examples/LineExample.jsx"
import ScatterExample from "../components/examples/ScatterExample.jsx"
import MapExample from "../components/examples/MapExample.jsx"
import BoxPlotExample from "../components/examples/BoxPlotExample.jsx"
import NetworkExample from "../components/examples/NetworkExample.jsx"

class ExamplesSection extends React.Component {

  render() {

    return(
      <SectionContainer>
        <TreeExample palette={this.props.palette}/>
        <BarExample palette={this.props.palette}/>
        <GroupedBarExample palette={this.props.palette}/>
        <BoxPlotExample palette={this.props.palette}/>
        <LineExample palette={this.props.palette}/>
        <ScatterExample palette={this.props.palette}/>
        <MapExample palette={this.props.palette} />
        <NetworkExample palette={this.props.palette} />
      </SectionContainer>
    )
  }

}


export default ExamplesSection
