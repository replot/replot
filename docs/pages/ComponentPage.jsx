import React from "react"
import ReactDOM from "react-dom"
import Radium from "radium"
import {SectionContainer, ColorTheme} from "replot-helpers"
import ComponentHeaderSection from "../sections/ComponentHeaderSection.jsx"
import ComponentLandingSection from "../sections/ComponentLandingSection.jsx"
import ComponentExamplesSection from "../sections/ComponentExamplesSection.jsx"
import ComponentDocSection from "../sections/ComponentDocSection.jsx"


class ComponentPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      doc: "",
      theme: "dark"
    }
    this.loadDoc(props.componentType)
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

  loadDoc(type) {
    let req = new XMLHttpRequest()
    req.open("GET", `https://api.github.com/repos/replot/replot-${type}/readme`)
    req.setRequestHeader("Accept", "application/vnd.github.v3.raw")
    req.onreadystatechange = () => {
      if (req.readyState === 4 && req.status === 200 || req.status == 0) {
        this.setState({
          doc: req.responseText
        })
      }
    }
    req.send()
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
        <ComponentHeaderSection
          palette={this.state.theme} title={this.props.componentTitle}
          type={this.props.componentType}/>
        <ComponentLandingSection
          palette={this.state.theme} type={this.props.componentType}/>
        <ComponentExamplesSection
          palette={this.state.theme} examples={this.props.examples}/>
        <ComponentDocSection
          palette={this.state.theme} doc={this.state.doc}/>
      </Radium.StyleRoot>

    return(
      <div style={style.body}>
        {app}
      </div>
    )
  }
}

ComponentPage = Radium(ComponentPage)

export default ComponentPage
