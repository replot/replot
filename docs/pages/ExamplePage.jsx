import React from "react"
import ReactDOM from "react-dom"
import Radium from "radium"
import {ColorTheme} from "replot-helpers"
import ExampleHeaderSection from "../sections/ExampleHeaderSection.jsx"
import ExampleChartSection from "../sections/ExampleChartSection.jsx"
import ExampleCodeSection from "../sections/ExampleCodeSection.jsx"
import {BasicTreemap, basicTreemapCode, basicTreemapData} from "../components/examples/treemap/Basic.jsx"
import {VerticalTreemap, verticalTreemapCode, verticalTreemapData} from "../components/examples/treemap/Vertical.jsx"
import {NestedTreemap, nestedTreemapCode, nestedTreemapData} from "../components/examples/treemap/Nested.jsx"
import {BasicBar, basicBarCode, basicBarData} from "../components/examples/bar/Basic.jsx"
import {GroupedBar, groupedBarCode, groupedBarData} from "../components/examples/bar/Grouped.jsx"
import {BasicLine, basicLineCode, basicLineData} from "../components/examples/line/Basic.jsx"
import {BasicScatter, basicScatterCode, basicScatterData} from "../components/examples/scatter/Basic.jsx"
import {BasicBoxplot, basicBoxplotCode, basicBoxplotData} from "../components/examples/boxplot/Basic.jsx"
import {BasicNetwork, basicNetworkCode, basicNetworkData} from "../components/examples/network/Basic.jsx"
import {BasicMap, basicMapCode, basicMapData} from "../components/examples/map/Basic.jsx"
import {RedMap, redMapCode, redMapData} from "../components/examples/map/Red.jsx"
import {LogarithmicMap, logarithmicMapCode, logarithmicMapData} from "../components/examples/map/Logarithmic.jsx"
import {CustomTooltipMap, customTooltipMapCode, customTooltipMapData} from "../components/examples/map/CustomTooltip.jsx"
import {ZoomedMap, zoomedMapCode, zoomedMapData} from "../components/examples/map/Zoomed.jsx"


class ExamplePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      theme: "dark"
    }
  }

  setDarkTheme() {
    this.setState({
      theme: "dark"
    })
    document.getElementById("body").style.backgroundColor = ColorTheme["dark"].body.bg
    document.getElementById("body").style.backgroundImage = ColorTheme["dark"].body.gradient
  }

  setLightTheme() {
    this.setState({
      theme: "light"
    })
    document.getElementById("body").style.backgroundColor = ColorTheme["light"].bodyBg
  }

  render() {
    const style = {
      body: {
        backgroundColor: ColorTheme[this.state.theme].bodyBg,
        color: ColorTheme[this.state.theme].body.text,
        maxWidth: "100%"
      },
    }

    let Chart = null
    let title = null
    let code = null
    let data = null

    switch (this.props.componentType) {
      case "treemap":
        switch (this.props.exampleType) {
          case "basic":
            Chart = BasicTreemap
            title = "Basic Treemap"
            code = basicTreemapCode
            data = basicTreemapData
            break
          case "vertical":
            Chart = VerticalTreemap
            title = "Vertical Treemap"
            code = verticalTreemapCode
            data = verticalTreemapData
            break
          case "nested":
            Chart = NestedTreemap
            title = "Nested Treemap"
            code = nestedTreemapCode
            data = nestedTreemapData
            break
        }
        break

      case "bar":
        switch (this.props.exampleType) {
          case "basic":
            Chart = BasicBar
            title = "Basic Bar Chart"
            code = basicBarCode
            data = basicBarData
            break
          case "grouped":
            Chart = GroupedBar
            title = "Grouped Bar Chart"
            code = groupedBarCode
            data = groupedBarData
            break
        }
        break

      case "line":
        switch (this.props.exampleType) {
          case "basic":
            Chart = BasicLine
            title = "Basic Line Chart"
            code = basicLineCode
            data = basicLineData
            break
        }
        break

      case "scatter":
        switch (this.props.exampleType) {
          case "basic":
            Chart = BasicScatter
            title = "Basic Scatter Chart"
            code = basicScatterCode
            data = basicScatterData
            break
        }
        break

      case "boxplot":
        switch (this.props.exampleType) {
          case "basic":
            Chart = BasicBoxplot
            title = "Basic Box Plot"
            code = basicBoxplotCode
            data = basicBoxplotData
            break
        }
        break

      case "map":
        switch (this.props.exampleType) {
          case "basic":
            Chart = BasicMap
            title = "Basic Map Chart"
            code = basicMapCode
            data = basicMapData
            break
          case "red":
            Chart = RedMap
            title = "Red Map Chart"
            code = redMapCode
            data = redMapData
            break
          case "logarithmic":
            Chart = LogarithmicMap
            title = "Logarithmic Map Chart"
            code = logarithmicMapCode
            data = logarithmicMapData
            break
          case "custom_tooltip":
            Chart = CustomTooltipMap
            title = "Custom Tooltip"
            code = customTooltipMapCode
            data = customTooltipMapData
            break
          case "zoomed":
            Chart = ZoomedMap
            title = "Zoomed Map Chart"
            code = zoomedMapCode
            data = zoomedMapData
            break
        }
        break

      case "network":
        switch (this.props.exampleType) {
          case "basic":
            Chart = BasicNetwork
            title = "Basic Network Chart"
            code = basicNetworkCode
            data = basicNetworkData
            break
        }
        break

      default:
        break
    }

    let app =
      <Radium.StyleRoot>
        <ExampleHeaderSection palette={this.state.theme}
          title={this.props.componentTitle} type={this.props.componentType}/>
        <ExampleChartSection palette={this.state.theme} title={title}>
          <Chart/>
        </ExampleChartSection>
        <ExampleCodeSection palette={this.state.theme} code={code} data={data}/>
      </Radium.StyleRoot>

    return(
      <div style={style.body}>
        {app}
      </div>
    )
  }
}

ExamplePage = Radium(ExamplePage)

export default ExamplePage
