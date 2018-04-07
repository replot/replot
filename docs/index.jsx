import React from "react"
import ReactDOM from "react-dom"
import Radium from "radium"
import {ColorTheme} from "replot-helpers"
import TitleSection from "./sections/TitleSection.jsx"
import ExamplesSection from "./sections/ExamplesSection.jsx"
import QuickStartSection from "./sections/QuickStartSection.jsx"
import HeaderSection from "./sections/HeaderSection.jsx"
import CenteredBlock from "./components/CenteredBlock.jsx"
import ComponentPage from "./pages/ComponentPage.jsx"
import ExamplePage from "./pages/ExamplePage.jsx"

class HomePage extends React.Component {

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

    let app =
      <Radium.StyleRoot>
        <HeaderSection
          setDarkTheme={this.setDarkTheme.bind(this)}
          setLightTheme={this.setLightTheme.bind(this)}
          palette={this.state.theme}/>
        <TitleSection
          palette={this.state.theme}/>
        <ExamplesSection
          palette={this.state.theme}/>
        <QuickStartSection
          palette={this.state.theme}/>
      </Radium.StyleRoot>

    return(
      <div style={style.body}>
        {app}
      </div>
    )
  }
}

HomePage = Radium(HomePage)

const componentTitles = {
  treemap: "Treemap",
  bar: "Bar Chart",
  line: "Line Chart",
  scatter: "Scatter Chart",
  boxplot: "Box Plot",
  map: "Map Chart",
  network: "Network Chart",
}

const componentExamples = {
  treemap: [
    {name: "Basic", imgURL: "/static/img/treemap/example-basic.png", pageURL: "/treemap/basic"},
    {name: "Vertical", imgURL: "/static/img/treemap/example-vertical.png", pageURL: "/treemap/vertical"},
    {name: "Nested", imgURL: "/static/img/treemap/example-nested.png", pageURL: "/treemap/nested"},
  ],
  bar: [
    {name: "Basic", imgURL: "/static/img/bar/example-basic.png", pageURL: "/bar/basic"},
    {name: "Grouped", imgURL: "/static/img/bar/example-grouped.png", pageURL: "/bar/grouped"},
  ],
  line: [
    {name: "Basic", imgURL: "/static/img/line/example-basic.png", pageURL: "/line/basic"},
  ],
  scatter: [
    {name: "Basic", imgURL: "/static/img/scatter/example-basic.png", pageURL: "/scatter/basic"},
  ],
  boxplot: [
    {name: "Basic", imgURL: "/static/img/boxplot/example-basic.png", pageURL: "/boxplot/basic"},
  ],
  map: [
    {name: "Basic", imgURL: "/static/img/map/example-basic.png", pageURL: "/map/basic"},
  ],
  network: [
    {name: "Basic", imgURL: "/static/img/network/example-basic.png", pageURL: "/network/basic"},
  ],
}

const paths = window.location.pathname.split('/')
if (paths[1] === '') {
  ReactDOM.render(
    <HomePage />,
    document.getElementById("replot-home")
  )
} else if (paths[2] === '') {
  ReactDOM.render(
    <ComponentPage
      componentTitle={componentTitles[paths[1]]} componentType={paths[1]}
      examples={componentExamples[paths[1]]}
    />,
    document.getElementById("page")
  )
} else {
  ReactDOM.render(
    <ExamplePage
      componentTitle={componentTitles[paths[1]]} componentType={paths[1]}
      exampleType={paths[2]}
    />,
    document.getElementById("page")
  )
}
