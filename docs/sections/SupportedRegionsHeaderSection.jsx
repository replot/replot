import React from "react"
import {ColorTheme} from "replot-helpers"


const SupportedRegionsHeaderSection = ({palette}) => {
  const style = {
    header: {
      position: "fixed",
      width: "100%",
      height: "110px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: ColorTheme[palette].body.bg,
      zIndex: 1,
    },
    title: {
      fontSize: "28px",
      margin: "10px 20px"
    },
    titleLink: {
      color: ColorTheme[palette].body.text,
      textDecorationLine: "none",
      margin: "0 10px",
    },
    subtitle: {
      margin: "10px 30px"
    }
  }

  return(
    <div style={style.header}>
      <h5 style={style.title}>
        <a style={style.titleLink} href='/'>Replot</a>
        /
        <a style={style.titleLink} href={`/map`}>Map</a>
        /
        <a style={style.titleLink} href={`/map/supported_regions`}>Supported Regions</a>
      </h5>
      <p style={style.subtitle}>Click on the country or region name to see corresponding geo codes</p>
    </div>
  )
}

export default SupportedRegionsHeaderSection
