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
      link: {
        textDecoration: "none",
      },
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
        <div id="map_example" style={style.container}>
          <a href="/map" style={style.link}><h1 style={style.title}> Map Chart </h1></a>
          <MapExample palette={this.props.palette} />
        </div>
        <div style={style.container}>
          <a href="/treemap" style={style.link}><h1 style={style.title}> Treemap </h1></a>
          <TreeExample palette={this.props.palette}/>
        </div>
        <div style={style.container}>
          <a href="/bar" style={style.link}><h1 style={style.title}> Bar Chart </h1></a>
          <BarExample palette={this.props.palette}/>
        </div>
        <div style={style.container}>
          <a href="/bar" style={style.link}><h1 style={style.title}> Grouped Bar Chart </h1></a>
          <GroupedBarExample palette={this.props.palette}/>
        </div>
        <div style={style.container}>
          <a href="/boxplot" style={style.link}><h1 style={style.title}> Box Plot </h1></a>
          <BoxPlotExample palette={this.props.palette}/>
        </div>
        <div style={style.container}>
          <a href="/line" style={style.link}><h1 style={style.title}> Line Chart </h1></a>
          <LineExample palette={this.props.palette}/>
        </div>
        <div style={style.container}>
          <a href="/scatter" style={style.link}><h1 style={style.title}> Scatter Plot </h1></a>
          <ScatterExample palette={this.props.palette}/>
        </div>
        <div style={style.container}>
          <a href="/network" style={style.link}><h1 style={style.title}> Network Chart </h1></a>
          <NetworkExample palette={this.props.palette} />
        </div>
      </SectionContainer>
    )
  }

}


export default ExamplesSection
