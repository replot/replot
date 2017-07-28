import React from "react"
import BarChart from "replot-bar"
import ComponentContainer from "../CompContainer/ComponentContainer.jsx"
import colors from "../../colors"


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
        {optionName: "maxGraphW", name: "Width", optionType: "field", input: "number", initialValue: 600},
        {optionName: "graphH", name: "Height", optionType: "field", input: "number", initialValue: 550},
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
    let colorOptions = [
      {optionName: "xAxisColor", name: "X Axis Color", optionType: "field", initialValue: colors[this.props.palette].axisColor},
      {optionName: "gridlineColor", name: "Gridline Color", optionType: "field", initialValue: colors[this.props.palette].axisColor},
      {optionName: "xTitleColor", name: "X Title Color", optionType: "field", initialValue: colors[this.props.palette].axisColor},
      {optionName: "yTitleColor", name: "Y Title Color", optionType: "field", initialValue: colors[this.props.palette].axisColor},
      {optionName: "xLabelColor", name: "X Label Color", optionType: "field", initialValue: colors[this.props.palette].axisColor},
      {optionName: "yLabelColor", name: "Y Label Color", optionType: "field", initialValue: colors[this.props.palette].axisColor},
    ]
    let style = {
      title: {
        fontSize: "45px",
        textAlign: "center",
        color: colors[this.props.palette].bodyText,
        padding: 15,
        textShadow: `0px 5px 18px ${colors[this.props.palette].titleShadow}`,
      },
      options: {
        container: "80px 50px",
      },
      optionsData: {
        width: "32%",
        display: "inline-block",
        verticalAlign: "top",
        backgroundColor: colors[this.props.palette].optionsTableBg,
        boxShadow: `10px 10px 5px ${colors[this.props.palette].optionsShadow}`,
      },
    }
    return(
      <div className="container" style={style.container}>
        <h1 style={style.title}> Bar Chart </h1>
        <ComponentContainer optionList={this.state.optionList}
          optionsData={style.optionsData}
          palette={this.props.palette}
          colorOptions={colorOptions}
          axisColor={colors[this.props.palette].axisColor}>
          <BarChart data={this.state.optionList[0].initialValue}
            color={colors[this.props.palette].barPalette}/>
        </ComponentContainer>
      </div>
    )
  }

}


export default BarExample
