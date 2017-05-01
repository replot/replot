import React from "react"
import ReactDOM from "react-dom"
import Radium from "radium"
import colors from "./colors"
import TitleSection from "./sections/TitleSection.jsx"
import ExamplesSection from "./sections/ExamplesSection.jsx"
import CenteredBlock from "./components/CenteredBlock.jsx"

class ExampleApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      password: "",
    }
    this.passwordHandler = this.passwordHandler.bind(this)
  }

  passwordHandler(e) {
    this.setState({password: e.target.value})
  }

  render() {
    const style = {
      body: {
        backgroundColor: colors.bodyBg,
        color: colors.bodyText,
      }
    }

    let app =
      <Radium.StyleRoot>
        <TitleSection />
        <ExamplesSection />
      </Radium.StyleRoot>

    if (this.state.password != "macro") {
      app =
        <CenteredBlock>
          <h3> Password? </h3>
          <input style={{textAlign: "center"}} type="password"
            value={this.state.password} onChange={this.passwordHandler} />
        </CenteredBlock>
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
