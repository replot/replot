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
    titleLink: {
      color: ColorTheme[palette].body.text,
      textDecorationLine: "none",
      margin: "0 10px",
    },
    title: {
      fontSize: "28px",
      margin: "0px auto 0px 20px",
    },
    optionLink: {
      color: ColorTheme[palette].body.text,
      textDecorationLine: "none",
      margin: "0px 20px 0px 0px",
    },
    option: {
      fontSize: "16px",
      margin: "0px",
    },
  }

  return(
    <div style={style.header}>
      <h5 style={style.title}>
        <a style={style.titleLink} href='/'>Replot</a>
        /
        <a style={style.titleLink} href={`/${type}`}>{title}</a>
      </h5>
      <a style={style.optionLink} href="#examples">
        <h5 style={style.option}> Examples </h5>
      </a>
      <a style={style.optionLink} href="#doc">
        <h5 style={style.option}> Documentation </h5>
      </a>
      <a style={style.optionLink} href={`https://github.com/replot/replot-${type}`} target="_blank">
        <h5 style={style.option}> Source </h5>
      </a>
    </div>
  )
}

export default ComponentHeaderSection
