import React from "react"
import BoxPlot from "replot-boxplot"
import {ComponentContainer, ColorTheme} from "replot-helpers"

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
        {optionName: "height", name: "Height", optionType: "field", input: "number", initialValue: 450},
        {optionName: "initialAnimation", name: "Initial Animation", optionType: "bool", initialValue: true},
        {optionName: "tooltip", name: "Tooltip", optionType: "bool", initialValue: false},
        {optionName: "tooltipColor", name: "Tooltip Color", optionType: "state", states: ["dark", "light"], initialValue: "dark"},
        {optionName: "xTitle", name: "X Axis", optionType: "field", input: "string", initialValue: "Gender"},
        {optionName: "yTitle", name: "Y Axis", optionType: "field", input: "string", initialValue: "Score"},
        {optionName: "weightKey", name: "Weight", optionType: "hidden", initialValue: "score"},
        {optionName: "groupKey", name: "Group By", optionType: "hidden", initialValue: "gender"},
        {optionName: "axisColor", name: "Axis Color", optionType: "field", input: "string", initialValue: ColorTheme[this.props.palette].axisColor},
        {optionName: "labelColor", name: "Label Color", optionType: "field", input: "string", initialValue: ColorTheme[this.props.palette].axisColor},
        {optionName: "graphTitleColor", name: "Title Color", optionType: "field", input: "string", initialValue: ColorTheme[this.props.palette].axisColor},
        {optionName: "gridColor", name: "Grid Color", optionType: "field", input: "string", initialValue: ColorTheme[this.props.palette].axisColor},
        {optionName: "tickColor", name: "Tick Color", optionType: "field", input: "string", initialValue: ColorTheme[this.props.palette].axisColor},
        {optionName: "axisWidth", name: "Axis Line Width", optionType: "field", input: "number", initialValue: 1.5},
        {optionName: "boxFill", name: "Box Fill", optionType: "field", input: "string", initialValue: "rgba(245,245,245,0.1)"},
        {optionName: "lineWidth", name: "Box Line Witdh", optionType: "field", input: "number", initialValue: 2.5}
      ]
    }
  }
  render() {
    return(
      <ComponentContainer optionList={this.state.optionList}
        palette={this.props.palette}>
        <BoxPlot data={this.state.optionList[0].initialValue}
          color={ColorTheme[this.props.palette].boxPalette}/>
      </ComponentContainer>
    )
  }

}

export default BoxPlotExample
