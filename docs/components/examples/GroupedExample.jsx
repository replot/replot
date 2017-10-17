import React from "react"
import BarChart from "replot-bar"
import ComponentContainer from "../CompContainer/ComponentContainer.jsx"
import colors from "../../colors"


class GroupedExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      optionList: [
        {optionName: "data", optionType: "data", keyList: ["year", "country"], weightKey: "population", initialValue: [
          {population: 1367, country: "China", year: 2014},
          {population: 1054, country: "China", year: 2012},
          {population: 1140, country: "China", year: 2010},
          {population: 517, country: "United States", year: 2014},
          {population: 312, country: "United States", year: 2012},
          {population: 908, country: "United States", year: 2010},
        ]},
        {optionName: "width", name: "Width", optionType: "field", input: "string", initialValue: "95%"},
        {optionName: "height", name: "Height", optionType: "field", input: "number", initialValue: 550},
        {optionName: "yScale", name: "Scale", optionType: "state", states: ["lin", "log"], initialValue: "lin"},
        {optionName: "xTitle", name: "X Title", optionType: "field", initialValue: "Year"},
        {optionName: "yTitle", name: "Y Title", optionType: "field", initialValue: "Population"},
        {optionName: "xKey", name: "x Axis", optionType: "hidden", initialValue: "year"},
        {optionName: "yKey", name: "Y Axis", optionType: "hidden", initialValue: "population"},
        {optionName: "groupKey", name: "Group By", optionType: "hidden", initialValue: "country"},
      ],
      groupedScale: "lin",
    }
  }

  render() {
    let axisColorOptions = [
      {optionName: "axisColor", name: "X Axis Color", optionType: "field", initialValue: colors[this.props.palette].axisColor},
      {optionName: "titleColor", name: "X Title Color", optionType: "field", initialValue: colors[this.props.palette].axisColor},
      {optionName: "labelColor", name: "Label Color", optionType: "field", initialValue: colors[this.props.palette].axisColor},
      {optionName: "gridColor", name: "Grid Color", optionType: "field", initialValue: colors[this.props.palette].axisColor},
      {optionName: "lineWidth", name: "line Width", optionType: "field", input: "number", initialValue: 1.5},
      {optionName: "lineOpacity", name: "line Opacity", optionType: "field", input: "number", initialValue: 1}
    ]
    let legendColorOptions = [
      {optionName: "fontColor", name: "Legend Color", optionType: "field", input: "string", initialValue: colors[this.props.palette].axisColor},
      {optionName: "showBorder", name: "Show Legend Border", optionType: "bool", initialValue: false},
      {optionName: "borderColor", name: "Legend Border Color", optionType: "field", input: "string", initialValue: colors[this.props.palette].axisColor},
    ]
    let style = {
      title: {
        fontSize: "45px",
        color: colors[this.props.palette].body.text,
        padding: 15,
      },
      container: {
        padding: "80px 0px",
      },
    }
    return(
      <div className="container" style={style.container}>
        <h1 style={style.title}> Grouped Bar Chart </h1>
        <ComponentContainer optionList={this.state.optionList}
          optionsData={style.optionsData}
          palette={this.props.palette}
          axisColorOptions={axisColorOptions}
          legendColorOptions={legendColorOptions}>
          <BarChart data={this.state.optionList[0].initialValue}
            color={colors[this.props.palette].groupedBarPalette}/>
        </ComponentContainer>
      </div>
    )
  }

}


export default GroupedExample
