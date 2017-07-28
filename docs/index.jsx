import React from "react"
import ReactDOM from "react-dom"
import Radium from "radium"
import colors from "./colors.js"
import TitleSection from "./sections/TitleSection.jsx"
import ExamplesSection from "./sections/ExamplesSection.jsx"
import QuickStartSection from "./sections/QuickStartSection.jsx"
import HeaderSection from "./sections/HeaderSection.jsx"
import CenteredBlock from "./components/CenteredBlock.jsx"


class ExampleApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      password: "",
      theme: "dark"
    }
    this.passwordHandler = this.passwordHandler.bind(this)
  }

  passwordHandler(e) {
    this.setState({password: e.target.value})
  }

  setDarkTheme() {
    this.setState({
      theme: "dark"
    })
    document.getElementById("body").style.backgroundColor = colors["dark"].bodyBg
  }

  setLightTheme() {
    this.setState({
      theme: "light"
    })
    document.getElementById("body").style.backgroundColor = colors["light"].bodyBg
  }

  render() {
    const style = {
      body: {
        backgroundColor: colors[this.state.theme].bodyBg,
        color: colors[this.state.theme].bodyText,
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

    if (this.state.password != "macro") {
      return (
        <CenteredBlock>
          <h3 style={{color: colors.bodyText}}> Password? </h3>
          <input style={{textAlign: "center"}} autoFocus type="password"
            value={this.state.password} onChange={this.passwordHandler}/>
        </CenteredBlock>
      )
    }

    return(
      <div style={style.body}>
        {app}
      </div>
    )
  }
}

ExampleApp = Radium(ExampleApp)


ReactDOM.render(
  <ExampleApp />,
  document.getElementById("react-app")
)
