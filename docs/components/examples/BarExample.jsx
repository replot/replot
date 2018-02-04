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
        {optionName: "xKey", name: "X Axis", optionType: "hidden", initialValue: "country"},
        {optionName: "yKey", name: "Y Axis", optionType: "hidden", initialValue: "population"},
      ],
      barScale: "lin",
    }
  }
  render() {
    let axisColorOptions = [
      {optionName: "axisColor", name: "X Axis Color", optionType: "field", initialValue: ColorTheme[this.props.palette].axisColor},
      {optionName: "titleColor", name: "X Title Color", optionType: "field", initialValue: ColorTheme[this.props.palette].axisColor},
      {optionName: "labelColor", name: "Label Color", optionType: "field", initialValue: ColorTheme[this.props.palette].axisColor},
      {optionName: "gridColor", name: "Grid Color", optionType: "field", initialValue: ColorTheme[this.props.palette].axisColor},
      {optionName: "lineWidth", name: "line Width", optionType: "field", input: "number", initialValue: 1.5},
      {optionName: "lineOpacity", name: "line Opacity", optionType: "field", input: "number", initialValue: 1}
    ]

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
        <h1 style={style.title}> Bar Chart </h1>
        <ComponentContainer optionList={this.state.optionList}
          palette={this.props.palette}
          axisColorOptions={axisColorOptions}
          axisColor={ColorTheme[this.props.palette].axisColor}>
          <BarChart data={this.state.optionList[0].initialValue}
            color={ColorTheme[this.props.palette].barPalette}/>
        </ComponentContainer>
      </div>
    )
  }

}


export default BarExample
