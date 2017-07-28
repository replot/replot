import React from "react"
import SectionContainer from "../components/SectionContainer.jsx"
import CenteredBlock from "../components/CenteredBlock.jsx"
import colors from "../colors"


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
        color: colors[this.props.palette].white,
        lineHeight: 1.2,
        textAlign: "center",
        textShadow: `0px 10px 18px ${colors[this.props.palette].titleShadow}`,
        marginTop: 8,
        marginBottom: 45
      },
      description: {
        fontSize: "35px",
        color: colors[this.props.palette].white,
        lineHeight: 1.2,
        textAlign: "center",
        left: "787px",
        marginTop: "-25px",
      },
      sectionBg: {
        minHeight: "100vh",
        backgroundImage: colors[this.props.palette].backgroundPNG,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",


      }
    }
    return(
      <SectionContainer style={style.sectionBg}>
        <CenteredBlock>
          <img src={colors[this.props.palette].logoPNG} style={style.logo}/>
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
