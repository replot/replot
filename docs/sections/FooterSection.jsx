import React from "react"
import {ColorTheme} from "replot-helpers"


class FooterSection extends React.Component {

  render() {
    let palette = ColorTheme[this.props.palette]
    let style = {
      footer: {
        padding: "0 20px 20px 20px",
        width: "100%",
        textAlign: "center",
        color: palette.body.text
      },
      link: {
        color: palette.body.text
      }
    }
    return(
      <footer style={style.footer}>
        Released under the MIT License.<br/>
        &#9400; 2018 Alisa Ono. Made with &#10084; by the <a href="https://github.com/orgs/replot/people" target="_blank" style={style.link}>Replot Team</a>.
      </footer>
    )
  }

}


export default FooterSection
