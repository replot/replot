import React from "react"
import BarChart from "replot-bar"
import {ComponentContainer, ColorTheme} from "replot-helpers"


class GroupedExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      optionList: [
        {optionName: "data", optionType: "data", keyList: ["group", "title"], weightKey: "weight", initialValue: [
          {weight: 1379, group: "China", title: 2016},
          {weight: 1371, group: "China", title: 2015},
          {weight: 1364, group: "China", title: 2014},
          {weight: 1357, group: "China", title: 2013},
          {weight: 1351, group: "China", title: 2012},
          {weight: 1344, group: "China", title: 2011},
          {weight: 1338, group: "China", title: 2010},
          {weight: 323, group: "United States", title: 2016},
          {weight: 321, group: "United States", title: 2015},
          {weight: 319, group: "United States", title: 2014},
          {weight: 316, group: "United States", title: 2013},
          {weight: 314, group: "United States", title: 2012},
          {weight: 312, group: "United States", title: 2011},
          {weight: 309, group: "United States", title: 2010},
        ]},
        {optionName: "width", name: "Width", optionType: "field", input: "string", initialValue: "98%"},
        {optionName: "height", name: "Height", optionType: "field", input: "number", initialValue: 450},
        {optionName: "yScale", name: "Scale", optionType: "state", states: ["lin", "log"], initialValue: "lin"},
        {optionName: "xTitle", name: "X Title", optionType: "field", initialValue: "Country"},
        {optionName: "yTitle", name: "Y Title", optionType: "field", initialValue: "Population"},
        {optionName: "xKey", name: "X Axis", optionType: "hidden", initialValue: "title"},
        {optionName: "yKey", name: "Y Axis", optionType: "hidden", initialValue: "weight"},
        {optionName: "groupKey", name: "Group", optionType: "hidden", initialValue: "group"}
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
    let legendColorOptions = [
      {optionName: "fontColor", name: "Legend Color", optionType: "field", input: "string", initialValue: ColorTheme[this.props.palette].axisColor},
      {optionName: "showBorder", name: "Show Legend Border", optionType: "bool", initialValue: false},
      {optionName: "borderColor", name: "Legend Border Color", optionType: "field", input: "string", initialValue: ColorTheme[this.props.palette].axisColor},
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
        <h1 style={style.title}> Grouped Bar Chart </h1>
        <ComponentContainer optionList={this.state.optionList}
          palette={this.props.palette}
          axisColorOptions={axisColorOptions}
          axisColor={ColorTheme[this.props.palette].axisColor}
          legendColorOptions={legendColorOptions}>
          <BarChart data={this.state.optionList[0].initialValue}
            color={ColorTheme[this.props.palette].barPalette}/>
        </ComponentContainer>
      </div>
    )
  }

}


export default GroupedExample
