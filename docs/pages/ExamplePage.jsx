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
import {BasicGroupedLine, basicGroupedLineCode, basicGroupedLineData} from "../components/examples/line/BasicGrouped.jsx"
import {BoldLine, boldLineCode, boldLineData} from "../components/examples/line/Bold.jsx"
import {CustomColorLine, customColorLineCode, customColorLineData} from "../components/examples/line/CustomColor.jsx"
import {CustomTooltipLine, customTooltipLineCode, customTooltipLineData} from "../components/examples/line/CustomTooltip.jsx"
import {LogarithmicLine, logarithmicLineCode, logarithmicLineData} from "../components/examples/line/Logarithmic.jsx"
import {MinimalisticLine, minimalisticLineCode, minimalisticLineData} from "../components/examples/line/Minimalistic.jsx"
import {RetroLine, retroLineCode, retroLineData} from "../components/examples/line/Retro.jsx"
import {ShadedLine, shadedLineCode, shadedLineData} from "../components/examples/line/Shaded.jsx"
import {TitledLine, titledLineCode, titledLineData} from "../components/examples/line/Titled.jsx"
import {BasicScatter, basicScatterCode, basicScatterData} from "../components/examples/scatter/Basic.jsx"
import {BasicGroupedScatter, basicGroupedScatterCode, basicGroupedScatterData} from "../components/examples/scatter/BasicGrouped.jsx"
import {CustomColorScatter, customColorScatterCode, customColorScatterData} from "../components/examples/scatter/CustomColor.jsx"
import {CustomTooltipScatter, customTooltipScatterCode, customTooltipScatterData} from "../components/examples/scatter/CustomTooltip.jsx"
import {LogarithmicScatter, logarithmicScatterCode, logarithmicScatterData} from "../components/examples/scatter/Logarithmic.jsx"
import {MinimalisticScatter, minimalisticScatterCode, minimalisticScatterData} from "../components/examples/scatter/Minimalistic.jsx"
import {RetroScatter, retroScatterCode, retroScatterData} from "../components/examples/scatter/Retro.jsx"
import {TitledScatter, titledScatterCode, titledScatterData} from "../components/examples/scatter/Titled.jsx"
import {BasicBoxplot, basicBoxplotCode, basicBoxplotData} from "../components/examples/boxplot/Basic.jsx"
import {AdvancedNetwork, advancedNetworkCode, advancedNetworkData} from "../components/examples/network/Advanced.jsx"
import {BasicNetwork, basicNetworkCode, basicNetworkData} from "../components/examples/network/Basic.jsx"
import {BoldNetwork, boldNetworkCode, boldNetworkData} from "../components/examples/network/Bold.jsx"
import {CustomColorNetwork, customColorNetworkCode, customColorNetworkData} from "../components/examples/network/CustomColor.jsx"
import {CustomTooltipNetwork, customTooltipNetworkCode, customTooltipNetworkData} from "../components/examples/network/CustomTooltip.jsx"
import {GroupedNetwork, groupedNetworkCode, groupedNetworkData} from "../components/examples/network/Grouped.jsx"
import {LabeledNetwork, labeledNetworkCode, labeledNetworkData} from "../components/examples/network/Labeled.jsx"
import {PastelNetwork, pastelNetworkCode, pastelNetworkData} from "../components/examples/network/Pastel.jsx"
import {WeightedLinksNetwork, weightedLinksNetworkCode, weightedLinksNetworkData} from "../components/examples/network/WeightedLinks.jsx"
import {WeightedNodesNetwork, weightedNodesNetworkCode, weightedNodesNetworkData} from "../components/examples/network/WeightedNodes.jsx"
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
          case "basic_grouped":
            Chart = BasicGroupedLine
            title = "Grouped Line Chart"
            code = basicGroupedLineCode
            data = basicGroupedLineData
            break
          case "bold":
            Chart = BoldLine
            title = "Bold Line Chart"
            code = boldLineCode
            data = boldLineData
            break
          case "custom_color":
            Chart = CustomColorLine
            title = "Custom Color Line Chart"
            code = customColorLineCode
            data = customColorLineData
            break
          case "custom_tooltip":
            Chart = CustomTooltipLine
            title = "Custom Tooltip Line Chart"
            code = customTooltipLineCode
            data = customTooltipLineData
            break
          case "logarithmic":
            Chart = LogarithmicLine
            title = "Logarithmic Line Chart"
            code = logarithmicLineCode
            data = logarithmicLineData
            break
          case "minimalistic":
            Chart = MinimalisticLine
            title = "Minimalistic Line Chart"
            code = minimalisticLineCode
            data = minimalisticLineData
            break
          case "retro":
            Chart = RetroLine
            title = "Retro Line Chart"
            code = retroLineCode
            data = retroLineData
            break
          case "shaded":
            Chart = ShadedLine
            title = "Shaded Line Chart"
            code = shadedLineCode
            data = shadedLineData
            break
          case "titled":
            Chart = TitledLine
            title = "Titled Line Chart"
            code = titledLineCode
            data = titledLineData
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
          case "basic_grouped":
            Chart = BasicGroupedScatter
            title = "Grouped Scatter Chart"
            code = basicGroupedScatterCode
            data = basicGroupedScatterData
            break
          case "custom_color":
            Chart = CustomColorScatter
            title = "Custom Color Scatter Chart"
            code = customColorScatterCode
            data = customColorScatterData
            break
          case "custom_tooltip":
            Chart = CustomTooltipScatter
            title = "Custom Tooltip Scatter Chart"
            code = customTooltipScatterCode
            data = customTooltipScatterData
            break
          case "logarithmic":
            Chart = LogarithmicScatter
            title = "Logarithmic Scatter Chart"
            code = logarithmicScatterCode
            data = logarithmicScatterData
            break
          case "minimalistic":
            Chart = MinimalisticScatter
            title = "Minimalistic Scatter Chart"
            code = minimalisticScatterCode
            data = minimalisticScatterData
            break
          case "retro":
            Chart = RetroScatter
            title = "Retro Scatter Chart"
            code = retroScatterCode
            data = retroScatterData
            break
          case "titled":
            Chart = TitledScatter
            title = "Titled Scatter Chart"
            code = titledScatterCode
            data = titledScatterData
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
          case "advanced":
            Chart = AdvancedNetwork
            title = "Advanced Network Chart"
            code = advancedNetworkCode
            data = advancedNetworkData
            break
          case "basic":
            Chart = BasicNetwork
            title = "Basic Network Chart"
            code = basicNetworkCode
            data = basicNetworkData
            break
          case "bold":
            Chart = BoldNetwork
            title = "Bold Network Chart"
            code = boldNetworkCode
            data = boldNetworkData
            break
          case "custom_color":
            Chart = CustomColorNetwork
            title = "Custom Color"
            code = customColorNetworkCode
            data = customColorNetworkData
            break
          case "custom_tooltip":
            Chart = CustomTooltipNetwork
            title = "Custom Tooltip"
            code = customTooltipNetworkCode
            data = customTooltipNetworkData
            break
          case "grouped":
            Chart = GroupedNetwork
            title = "Grouped Network Chart"
            code = groupedNetworkCode
            data = groupedNetworkData
            break
          case "labeled":
            Chart = LabeledNetwork
            title = "Labeled Network Chart"
            code = labeledNetworkCode
            data = labeledNetworkData
            break
          case "pastel":
            Chart = PastelNetwork
            title = "Pastel Network Chart"
            code = pastelNetworkCode
            data = pastelNetworkData
            break
          case "weighted_links":
            Chart = WeightedLinksNetwork
            title = "Weighted Links Network Chart"
            code = weightedLinksNetworkCode
            data = weightedLinksNetworkData
            break
          case "weighted_nodes":
            Chart = WeightedNodesNetwork
            title = "Weighted Nodes Network Chart"
            code = weightedNodesNetworkCode
            data = weightedNodesNetworkData
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
