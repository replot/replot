import React from "react"
import {SectionContainer, ColorTheme} from "replot-helpers"
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
    const style = {
      title: {
        fontSize: "45px",
        color: ColorTheme[this.props.palette].body.text,
        padding: 15,
      },
      container: {
        padding: "80px 0px",
      },
    }

    return(
      <SectionContainer>
        <div style={style.container}>
          <h1 style={style.title}> Treemap </h1>
          <TreeExample palette={this.props.palette}/>
        </div>
        <div style={style.container}>
          <h1 style={style.title}> Bar Chart </h1>
          <BarExample palette={this.props.palette}/>
        </div>
        <div style={style.container}>
          <h1 style={style.title}> Grouped Bar Chart </h1>
          <GroupedBarExample palette={this.props.palette}/>
        </div>
        <div style={style.container}>
          <h1 style={style.title}> Box Plot </h1>
          <BoxPlotExample palette={this.props.palette}/>
        </div>
        <div style={style.container}>
          <h1 style={style.title}> Line Chart </h1>
          <LineExample palette={this.props.palette}/>
        </div>
        <div style={style.container}>
          <h1 style={style.title}> Scatter Plot </h1>
          <ScatterExample palette={this.props.palette}/>
        </div>
        <div style={style.container}>
          <h1 style={style.title}> Map Chart </h1>
          <MapExample palette={this.props.palette} />
        </div>
        <div style={style.container}>
          <h1 style={style.title}> Network Chart </h1>
          <NetworkExample palette={this.props.palette} />
        </div>
      </SectionContainer>
    )
  }

}


export default ExamplesSection
