import React from "react"
import ReactDOM from "react-dom"
import Radium from "radium"
import {ColorTheme} from "replot-helpers"
import SupportedRegionsHeaderSection from "../sections/SupportedRegionsHeaderSection.jsx"
import SupportedRegionsListSection from "../sections/SupportedRegionsListSection.jsx"

class SupportedRegionsPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      doc: "",
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
        <SupportedRegionsHeaderSection palette={this.state.theme}/>
        <SupportedRegionsListSection palette={this.state.theme}/>
      </Radium.StyleRoot>

    return(
      <div style={style.body}>
        {app}
      </div>
    )
  }
}

SupportedRegionsPage = Radium(SupportedRegionsPage)

export default SupportedRegionsPage
