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

const treemapExamples = [
  {name: "Basic", imgURL: "/static/img/treemap/example-basic.png", pageURL: "#"},
  {name: "Vertical", imgURL: "/static/img/treemap/example-vertical.png", pageURL: "#"},
  {name: "Nested", imgURL: "/static/img/treemap/example-nested.png", pageURL: "#"},
]

switch (window.location.pathname) {
  case '/':
    ReactDOM.render(
      <HomePage />,
      document.getElementById("replot-home")
    )
    break
  case '/treemap':
    ReactDOM.render(
      <ComponentPage
        componentTitle="Treemap" componentType="treemap"
        examples={treemapExamples}
      />,
      document.getElementById("replot-treemap")
    )
    break
  default:
    /* TODO: Display a 404 page */
}
