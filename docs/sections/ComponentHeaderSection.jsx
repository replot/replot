import React from "react"
import {ColorTheme} from "replot-helpers"


const ComponentHeaderSection = ({title, type, palette}) => {
  const style = {
    header: {
      position: "fixed",
      width: "100%",
      height: "60px",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: ColorTheme[palette].body.bg,
      zIndex: 1,
    },
    link: {
      color: ColorTheme[palette].body.text,
      textDecorationLine: "none",
      margin: "0px auto 0px 20px",
    },
    title: {
      fontSize: "28px",
      margin: "0px",
    },
    option: {
      fontSize: "16px",
      color: ColorTheme[palette].body.text,
      margin: "0px 20px 0px 0px",
      cursor: "pointer",
    }
  }

  return(
    <div style={style.header}>
      <a style={style.link} href={`/${type}`}>
        <h5 style={style.title}>{title}</h5>
      </a>
      <h5 style={style.option}>Examples</h5>
      <h5 style={style.option}>Documentation</h5>
    </div>
  )
}

export default ComponentHeaderSection
