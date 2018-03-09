import React from "react"
import BarChart from "replot-bar"
import {ComponentContainer, ColorTheme} from "replot-helpers"


class GroupedBarExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      optionList: [
        {optionName: "data", optionType: "data", keyList: ["country", "year"], weightKey: "population", initialValue: [
          {country: "Github", year: 2015, population: 11*100000},
          {country: "Github", year: 2016, population: 16*100000},
          {country: "Github", year: 2017, population: 24*100000},
          {country: "Netherlands", year: 2015, population: 16.925*100000},
          {country: "Netherlands", year: 2016, population: 16.987*100000},
          {country: "Netherlands", year: 2017, population: 17.035*100000},
          {country: "Israel", year: 2015, population: 8.064*100000},
          {country: "Israel", year: 2016, population: 8.191*100000},
          {country: "Israel", year: 2017, population: 8.321*100000},
          {country: "New Zealand", year: 2015, population: 4.529*100000},
          {country: "New Zealand", year: 2016, population: 4.66*100000},
          {country: "New Zealand", year: 2017, population: 4.705*100000},
          {country: "Iceland", year: 2015, population: 0.329*100000},
          {country: "Iceland", year: 2016, population: 0.332*100000},
          {country: "Iceland", year: 2017, population: 0.335*100000},
        ]},
        {optionName: "width", name: "Width", optionType: "field", input: "string", initialValue: "98%"},
        {optionName: "height", name: "Height", optionType: "field", input: "number", initialValue: 450},
        {optionName: "yScale", name: "Scale", optionType: "state", states: ["lin", "log"], initialValue: "lin"},
        {optionName: "xTitle", name: "X Title", optionType: "field", initialValue: "Year"},
        {optionName: "yTitle", name: "Y Title", optionType: "field", initialValue: "Population"},
        {optionName: "axisColor", name: "Axis Color", optionType: "field", initialValue: ColorTheme[this.props.palette].axisColor},
        {optionName: "axisWidth", name: "Axis Line Width", optionType: "field", input: "number", initialValue: 1.5},
        {optionName: "axisOpacity", name: "Axis Line Opacity", optionType: "field", input: "number", initialValue: 1},
        {optionName: "tickColor", name: "Tick Color", optionType: "field", initialValue: ColorTheme[this.props.palette].axisColor},
        {optionName: "graphTitleColor", name: "Title Color", optionType: "field", initialValue: ColorTheme[this.props.palette].axisColor},
        {optionName: "labelColor", name: "Label Color", optionType: "field", initialValue: ColorTheme[this.props.palette].axisColor},
        {optionName: "gridColor", name: "Grid Color", optionType: "field", initialValue: ColorTheme[this.props.palette].axisColor},
        {optionName: "legendFontColor", name: "Legend Color", optionType: "field", input: "string", initialValue: ColorTheme[this.props.palette].axisColor},
        {optionName: "legendShowBorder", name: "Show Legend Border", optionType: "bool", initialValue: false},
        {optionName: "legendBorderColor", name: "Legend Border Color", optionType: "field", input: "string", initialValue: ColorTheme[this.props.palette].axisColor},
        {optionName: "xKey", name: "X Axis", optionType: "hidden", initialValue: "country"},
        {optionName: "yKey", name: "Y Axis", optionType: "hidden", initialValue: "population"},
        {optionName: "groupKey", name: "Group", optionType: "hidden", initialValue: "year"}
      ],
      barScale: "lin",
    }
  }
  render() {
    let style = {
      title: {
        fontSize: "45px",
        color: ColorTheme[this.props.palette].body.text,
        padding: 15,
      },
      container: {
        padding: "80px 0px",
        maxHeight: "1000px"
      },
    }

    return(
      <div className="container" style={style.container}>
        <h1 style={style.title}> Grouped Bar Chart </h1>
        <ComponentContainer optionList={this.state.optionList}
          palette={this.props.palette}>
          <BarChart data={this.state.optionList[0].initialValue}
            color={ColorTheme[this.props.palette].barPalette}/>
        </ComponentContainer>
      </div>
    )
  }

}


export default GroupedBarExample
