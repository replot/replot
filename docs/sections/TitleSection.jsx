import React from "react"
import SectionContainer from "../components/SectionContainer.jsx"
import CenteredBlock from "../components/CenteredBlock.jsx"


class TitleSection extends React.Component {

  render() {
    let style = {
      logo: {
        left: "820px",
        top: "97px",
        width: "468px",
        height: "221px",

      },
      title: {
        fontSize: "95px",
        fontFamily: "Helvetica Neue",
        color: "rgb(223, 227, 230)",
        lineHeight: 1.2,
        textAlign: "center",
        textShadow: "0px 10px 18px rgba(0, 218, 157, 0.75)",
        marginTop: 8,
        marginBottom: 45
      },
      description: {
        fontSize: "35px",
        color: "rgb(223, 227, 230)",
        lineHeight: 1.2,
        textAlign: "center",
        left: "787px",
        marginTop: "-25px",
      },
      sectionBg: {
        minHeight: "100vh",
        backgroundImage: "url('static/design2_background.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",


      }
    }
    return(
      <SectionContainer style={style.sectionBg}>
        <CenteredBlock>
          <img src="static/design2_logo.png" style={style.logo}/>
          <h2 style={style.title}>
            REPLOT
          </h2>
          <h3 style={style.description}>
            Beautiful Visualizations for React
          </h3>
        </CenteredBlock>
      </SectionContainer>
    )
  }

}


export default TitleSection
