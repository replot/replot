import React from "react"
import {SectionContainer, ColorTheme} from "replot-helpers"
import CenteredBlock from "../components/CenteredBlock.jsx"


class TitleSection extends React.Component {

  render() {
    let palette = ColorTheme[this.props.palette]
    let style = {
      logo: {
        left: "820px",
        top: "97px",
        width: "468px",
        height: "221px",

      },
      title: {
        fontFamily: "Helvetica",
        color: "#fff",
        fontWeight: "600",
        fontSize: "3rem",
      },
      separator: {
        textAlign: "center",
        width: "5rem",
        height: "5px",
        borderBottom: "solid 5px white",
        display: "block"
      },
      description: {
        fontSize: "1.4rem",
        color: "#fff",
        width: "80%",
        maxWidth: "550px",
        textAlign: "center",
        marginBottom: "4rem",
      },
      sectionBg: {
        height: "100vh",
        maxHeight: "1000px",
        backgroundImage: palette.landing.bg,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
      },
      getStartedButton: {
        padding: "8px",
        text: "1.4rem",
        textTransform: "uppercase",
        border: `solid 1px ${palette.getStartedButton.border}`,
        borderRadius: "5px",
        color: palette.getStartedButton.text,
        background: palette.getStartedButton.bg,
      }
    }
    return(
      <SectionContainer style={style.sectionBg}>
        <h1 style={style.title}>
          Replot
        </h1>
        <div className="separator" style={style.separator} />
        <h3 style={style.description}>
          Native SVG visualizations for React with beautiful defaults and smart animation
        </h3>
        <button style={style.getStartedButton}>Get Started</button>
      </SectionContainer>
    )
  }

}


export default TitleSection
