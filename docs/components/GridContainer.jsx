import React from "react"
import {ColorTheme} from "replot-helpers"


const GridCell = ({name, imgURL, pageURL, palette}) => {
  const gridCellStyle = {
    link: {
      textDecoration: "none",
    },
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "380px",
      height: "290px",
      padding: "10px",
    },
    image: {
      maxHeight: "100%",
      maxWidth: "100%",
      width: "auto",
      height: "auto",
    },
    title: {
      fontSize: "20px",
      color: ColorTheme[palette].body.text,
      textAlign: "center",
      textDecorationLine: "none",
    },
  }

  return(
    <a href={pageURL} style={gridCellStyle.link}>
      <div style={gridCellStyle.wrapper}>
        <img src={imgURL} style={gridCellStyle.image}/>
      </div>
      <h3 style={gridCellStyle.title}>
        {name}
      </h3>
    </a>
  )
}


const GridContainer = ({data, palette}) => {
  const style = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexFlow: "row wrap",
  }

  let contents = []
  for (let d of data) {
    contents.push(
      <GridCell
        key={d.name} name={d.name} imgURL={d.imgURL} pageURL={d.pageURL}
        palette={palette}
      />
    )
  }

  return(
    <div style={style}>
      {contents}
    </div>
  )
}

export default GridContainer
