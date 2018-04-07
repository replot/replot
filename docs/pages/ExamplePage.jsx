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
        break

      case "line":
        break

      case "scatter":
        break

      case "boxplot":
        break

      case "map":
        break

      case "network":
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
