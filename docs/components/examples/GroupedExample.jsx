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
        {optionName: "maxGraphW", name: "Width", optionType: "field", input: "number", initialValue: 550},
        {optionName: "graphH", name: "Height", optionType: "field", input: "number", initialValue: 600},
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
    let colorOptions = [
      {optionName: "xAxisColor", name: "X Axis Color", optionType: "field", initialValue: colors[this.props.palette].axisColor},
      {optionName: "gridlineColor", name: "Gridline Color", optionType: "field", initialValue: colors[this.props.palette].axisColor},
      {optionName: "xTitleColor", name: "X Title Color", optionType: "field", initialValue: colors[this.props.palette].axisColor},
      {optionName: "yTitleColor", name: "Y Title Color", optionType: "field", initialValue: colors[this.props.palette].axisColor},
      {optionName: "xLabelColor", name: "X Label Color", optionType: "field", initialValue: colors[this.props.palette].axisColor},
      {optionName: "yLabelColor", name: "Y Label Color", optionType: "field", initialValue: colors[this.props.palette].axisColor},
      {optionName: "legendColor", name: "Legend Color", optionType: "field", initialValue: colors[this.props.palette].axisColor},
    ]
    let style = {
      title: {
        fontSize: "45px",
        textAlign: "center",
        color: colors[this.props.palette].bodyText,
        padding: 15,
        textShadow: `0px 5px 18px ${colors[this.props.palette].titleShadow}`,
      },
      container: {
        padding: "80px 50px",
      },
      optionsData: {
        width: "35%",
        display: "inline-block",
        verticalAlign: "top",
        backgroundColor: colors[this.props.palette].optionsTableBg,
        boxShadow: `10px 10px 5px ${colors[this.props.palette].optionsShadow}`,
      }
    }
    return(
      <div className="container" style={style.container}>
        <h1 style={style.title}> Grouped Bar Chart </h1>
        <ComponentContainer optionList={this.state.optionList}
          optionsData={style.optionsData}
          palette={this.props.palette}
          colorOptions={colorOptions}>
          <BarChart data={this.state.optionList[0].initialValue}
            color={colors[this.props.palette].groupedBarPalette}/>
        </ComponentContainer>
      </div>
    )
  }

}


export default GroupedExample
