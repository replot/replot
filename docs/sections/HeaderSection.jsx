import React from "react"
import {ColorTheme} from "replot-helpers"



class HeaderSection extends React.Component {


  render() {
    let style = {
      header: {
        position: "fixed",
        width: "100%",
        textAlign: "right",
        backgroundColor: ColorTheme[this.props.palette].header,
        zIndex: 1,
        verticalAlign: "top"

      },
      dark: {
        display: "inline-block",
        marginRight: "8px",
        cursor: "pointer"
      },
      light: {
        display: "inline-block",
        paddingRight: "2rem",
        cursor: "pointer"
      }
    }

    return(
      <div className="container" style={{display: "none"}}>
        <h5 style={style.dark} onClick={this.props.setDarkTheme}> Dark Theme </h5>
        <h5 style={style.light} onClick={this.props.setLightTheme}> Light Theme </h5>
      </div>
    )
  }

}


export default HeaderSection
