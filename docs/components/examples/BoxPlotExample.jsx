import React from "react"
import BoxPlot from "replot-boxplot"
import ComponentContainer from "../CompContainer/ComponentContainer.jsx"
import colors from "../../colors"

class BoxPlotExample extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      optionList: [
        {optionName: "data", optionType: "data", keyList:["gender"], weightKey: "score", initialValue: [
          {gender: "female", score: 93},
          {gender: "female", score: 95},
          {gender: "female", score: 60},
          {gender: "female", score: 74},
          {gender: "female", score: 82},
          {gender: "female", score: 90},
          {gender: "female", score: 71},
          {gender: "female", score: 80},
          {gender: "female", score: 88},
          {gender: "female", score: 85},
          {gender: "female", score: 94},
          {gender: "male", score: 96},
          {gender: "male", score: 66},
          {gender: "male", score: 74},
          {gender: "male", score: 77},
          {gender: "male", score: 76},
          {gender: "male", score: 82},
          {gender: "male", score: 81},
          {gender: "male", score: 88},
          {gender: "male", score: 84},
          {gender: "male", score: 91}
        ]},
        {optionName: "width", name: "Width", optionType: "field", input: "string", initialValue: "98%"},
        {optionName: "height", name: "Height", optionType: "field", input: "number", initialValue: "450"},
        {optionName: "initialAnimation", name: "Initial Animation", optionType: "bool", initialValue: true},
        {optionName: "tooltip", name: "Tooltip", optionType: "bool", initialValue: false},
        {optionName: "tooltipColor", name: "Tooltip Color", optionType: "state", states: ["dark", "light"], initialValue: "dark"},
        {optionName: "xTitle", name: "X Axis", optionType: "field", input: "string", initialValue: "Gender"},
        {optionName: "weightKey", name: "Weight", optionType: "hidden", initialValue: "score"},
        {optionName: "groupKey", name: "Group By", optionType: "hidden", initialValue: "gender"},
      ]
    }
  }
  render() {
    let axisColorOptions = [
      {optionName: "axisColor", name: "Axis Color", optionType: "field", input: "string", initialValue: colors[this.props.palette].axisColor},
      {optionName: "labelColor", name: "Label Color", optionType: "field", input: "string", initialValue: colors[this.props.palette].axisColor},
      {optionName: "titleColor", name: "Title Color", optionType: "field", input: "string", initialValue: colors[this.props.palette].axisColor},
      {optionName: "gridColor", name: "Grid Color", optionType: "field", input: "string", initialValue: colors[this.props.palette].axisColor},
      {optionName: "lineWidth", name: "Axis Line Width", optionType: "field", input: "number", initialValue: 1.5},
    ]
    let graphStyle = [
      {optionName: "fill", name: "Box Fill", optionType: "field", input: "string", initialValue: "rgba(245,245,245,0.1)"},
      {optionName: "lineWidth", name: "Line Witdh", optionType: "field", input: "number", initialValue: 2.5}
    ]
    let style = {
      title: {
        fontSize: "45px",
        textAlign: "center",
        color: colors[this.props.palette].body.text,
        padding: 15,
      },
      container: {
        padding: "80px 0px",
      },
    }
    return(
      <div className="container" style={style.container}>
        <h1 style={style.title}> Box Plot </h1>
        <ComponentContainer optionList={this.state.optionList}
          optionsData={style.optionsData}
          palette={this.props.palette}
          axisColorOptions={axisColorOptions}
          graphStyle={graphStyle}>
          <BoxPlot data={this.state.optionList[0].initialValue}
            color={colors[this.props.palette].boxPalette}/>
        </ComponentContainer>
      </div>
    )
  }

}

export default BoxPlotExample
