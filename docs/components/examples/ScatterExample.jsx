import React from "react"
import ScatterPlot from "replot-scatter"
import ComponentContainer from "../CompContainer/ComponentContainer.jsx"
import colors from "../../colors"


class ScatterExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      optionList: [
        {optionName: "data", optionType: "scatterData", initialValue: [
          {gender: "male", height: 70, weight: 155, shoeSize: 10},
          {gender: "male", height: 72, weight: 144, shoeSize: 12},
          {gender: "male", height: 73, weight: 158, shoeSize: 11.5},
          {gender: "male", height: 72.5, weight: 160, shoeSize: 11},
          {gender: "male", height: 77, weight: 186, shoeSize: 13},
          {gender: "male", height: 68, weight: 153, shoeSize: 10},
          {gender: "male", height: 69, weight: 160, shoeSize: 9},
          {gender: "male", height: 67, weight: 166, shoeSize: 9.5},
          {gender: "male", height: 64.5, weight: 169, shoeSize: 9},
          {gender: "male", height: 63, weight: 126, shoeSize: 9.5},
          {gender: "male", height: 66.5, weight: 120, shoeSize: 9},
          {gender: "male", height: 65.5, weight: 147, shoeSize: 11},
          {gender: "female", height: 60, weight: 91, shoeSize: 6},
          {gender: "female", height: 63.5, weight: 100, shoeSize: 6.5},
          {gender: "female", height: 62, weight: 102, shoeSize: 6.5},
          {gender: "female", height: 66, weight: 112, shoeSize: 7},
          {gender: "female", height: 59, weight: 90, shoeSize: 6},
          {gender: "female", height: 58.5, weight: 95, shoeSize: 5.5},
          {gender: "female", height: 61.5, weight: 115, shoeSize: 6},
          {gender: "female", height: 69.5, weight: 125, shoeSize: 8},
          {gender: "female", height: 71, weight: 135, shoeSize: 8.5},
          {gender: "female", height: 58, weight: 140, shoeSize: 4.5},
          {gender: "female", height: 68.5, weight: 158, shoeSize: 7.5},
          {gender: "female", height: 64, weight: 160.5, shoeSize: 7.5},
          {gender: "female", height: 65, weight: 130.5, shoeSize: 7},
        ]},
        {optionName: "width", name: "Width", optionType: "field", input: "string", initialValue: "100%"},
        {optionName: "height", name: "Height", optionType: "field", input: "number", initialValue: 500},
        {optionName: "yScale", name: "Scale", optionType: "state", states: ["lin", "log"], initialValue: "lin"},
        {optionName: "minRadius", name: "Minimum Radius", optionType: "field", input: "number", initialValue: 2.5},
        {optionName: "maxRadius", name: "Maximum Radius", optionType: "field", input: "number", initialValue: 10},
        {optionName: "showTrendline", name: "Show Trendline", optionType: "bool", initialValue: true},
        {optionName: "xKey", name: "X Axis", optionType: "hidden", initialValue: "height"},
        {optionName: "yKey", name: "Y Axis", optionType: "hidden", initialValue: "weight"},
        {optionName: "showXLabels", name: "X Labels", optionType: "bool", initialValue: true},
        {optionName: "showYLabels", name: "Y Labels", optionType: "bool", initialValue: true},
        {optionName: "groupKey", name: "Group By", optionType: "hidden", initialValue: "gender"},
        {optionName: "weightKey", name: "Node Weight", optionType: "hidden", initialValue: "shoeSize"},
        {optionName: "showLegend", name: "Show Legend", optionType: "bool", initialValue: true},
      ],
    }
  }

  render() {
    let axisColorOptions = [
      {optionName: "axisColor", name: "Axis Color", optionType: "field", input: "string", initialValue: colors[this.props.palette].axisColor},
      {optionName: "labelColor", name: "Label Color", optionType: "field", input: "string", initialValue: colors[this.props.palette].axisColor},
      {optionName: "gridColor", name: "Grid Color", optionType: "field", input: "string", initialValue: colors[this.props.palette].axisColor},
      {optionName: "lineWidth", name: "Axis Line Width", optionType: "field", input: "number", initialValue: 1.5},
    ]
    let legendColorOptions = [
      {optionName: "fontColor", name: "Legend Color", optionType: "field", input: "string", initialValue: colors[this.props.palette].axisColor},
      {optionName: "showBorder", name: "Show Legend Border", optionType: "bool", initialValue: false},
      {optionName: "borderColor", name: "Legend Border Color", optionType: "field", input: "string", initialValue: colors[this.props.palette].axisColor},
    ]
    let graphStyle = [
      {optionName: "trendlineColor", name: "Trendline Color", optionType: "field", input: "string", initialValue: colors[this.props.palette].axisColor},
      {optionName: "trendlineOpacity", name: "Trendline Opacity", optionType: "field", input: "number", initialValue: 0.5}
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
        <h1 style={style.title}> Scatter Plot </h1>
        <ComponentContainer optionList={this.state.optionList}
          optionsData={style.optionsData}
          palette={this.props.palette}
          axisColorOptions={axisColorOptions}
          legendColorOptions={legendColorOptions}
          graphStyle={graphStyle}>
          <ScatterPlot data={this.state.optionList[0].initialValue}
            color={colors[this.props.palette].scatterPalette}/>
        </ComponentContainer>
      </div>
    )
  }

}


export default ScatterExample
