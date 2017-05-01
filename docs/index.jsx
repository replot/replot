import React from "react"
import ReactDOM from "react-dom"
import Radium from "radium"
import colors from "./colors"
import TitleSection from "./sections/TitleSection.jsx"
import ExamplesSection from "./sections/ExamplesSection.jsx"


class ExampleApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      password: "",
    }
  }

  render() {
    const style = {
      body: {
        backgroundColor: colors.bodyBg,
        color: colors.bodyText,
      }
    }

    return(
      <div style={style.body}>
        <Radium.StyleRoot>
          <TitleSection />
          <ExamplesSection />
        </Radium.StyleRoot>
      </div>
    )
  }
}

ExampleApp = Radium(ExampleApp)


ReactDOM.render(
  <ExampleApp />,
  document.getElementById("react-app")
)
