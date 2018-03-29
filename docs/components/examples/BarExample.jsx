import React from "react"
import BarChart from "replot-bar"
import {ComponentContainer, ColorTheme} from "replot-helpers"


class BarExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      optionList: [
        {optionName: "data", optionType: "data", keyList: ["country"], weightKey: "population", initialValue: [
          {population: 1373, country: "China"},
          {population: 1266, country: "India"},
          {population: 323, country: "United States"},
          {population: 958, country: "Indonesia"},
          {population: 805, country: "Brazil"},
          {population: 501, country: "Pakistan"},
          {population: 786, country: "Nigeria"},
          {population: 456, country: "Bangladesh"},
        ]},
        {optionName: "width", name: "Width", optionType: "field", input: "string", initialValue: "98%"},
        {optionName: "height", name: "Height", optionType: "field", input: "number", initialValue: 450},
        {optionName: "yScale", name: "Scale", optionType: "state", states: ["lin", "log"], initialValue: "lin"},
        {optionName: "xTitle", name: "X Title", optionType: "field", initialValue: "Country"},
        {optionName: "yTitle", name: "Y Title", optionType: "field", initialValue: "Population"},
        {optionName: "axisColor", name: "Axis Color", optionType: "field", initialValue: ColorTheme[this.props.palette].axisColor},
        {optionName: "axisWidth", name: "Axis Line Width", optionType: "field", input: "number", initialValue: 1.5},
        {optionName: "axisOpacity", name: "Axis Line Opacity", optionType: "field", input: "number", initialValue: 1},
        {optionName: "tickColor", name: "Tick Color", optionType: "field", initialValue: ColorTheme[this.props.palette].axisColor},
        {optionName: "graphTitleColor", name: "Title Color", optionType: "field", initialValue: ColorTheme[this.props.palette].axisColor},
        {optionName: "labelColor", name: "Label Color", optionType: "field", initialValue: ColorTheme[this.props.palette].axisColor},
        {optionName: "gridColor", name: "Grid Color", optionType: "field", initialValue: ColorTheme[this.props.palette].axisColor},
        {optionName: "xKey", name: "X Axis", optionType: "hidden", initialValue: "country"},
        {optionName: "yKey", name: "Y Axis", optionType: "hidden", initialValue: "population"},
      ],
      barScale: "lin",
    }
  }
  render() {
    return(
      <ComponentContainer optionList={this.state.optionList}
        palette={this.props.palette}>
        <BarChart data={this.state.optionList[0].initialValue}
          color={ColorTheme[this.props.palette].barPalette}/>
      </ComponentContainer>
    )
  }

}


export default BarExample
