import React from "react"
import LineChart from "replot-line"
import ComponentContainer from "../CompContainer/ComponentContainer.jsx"
import colors from "../../colors"


class LineExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      optionList: [
        {optionName: "data", optionType: "data", keyList:["location", "year"], weightKey:"population", initialValue: [
          {location: "Global", year: 2013, population: 10000000},
          {location: "Global", year: 2014, population: 1000000},
          {location: "Global", year: 2015, population: 100000},
          {location: "Global", year: 2016, population: 10000},
          {location: "US", year: 2013, population: 0.1},
          {location: "US", year: 2014, population: 1},
          {location: "US", year: 2015, population: 1},
          {location: "US", year: 2016, population: 0.1},
          {location: "India", year: 2013, population: 0.0001},
          {location: "India", year: 2014, population: 10},
          {location: "India", year: 2015, population: 100},
          {location: "India", year: 2016, population: 10000},
          {location: "China", year: 2013, population: 1000000},
          {location: "China", year: 2014, population: 10000},
          {location: "China", year: 2015, population: 100000},
          {location: "China", year: 2016, population: 1000},
          {location: "Russia", year: 2013, population: 100},
          {location: "Russia", year: 2014, population: 1000},
          {location: "Russia", year: 2015, population: 10000},
          {location: "Russia", year: 2016, population: 100000},
          {location: "Antarctica", year: 2013, population: 0.0001},
          {location: "Antarctica", year: 2014, population: 0.01},
          {location: "Antarctica", year: 2015, population: 0.001},
          {location: "Antarctica", year: 2016, population: 0.0001},
        ]},
        {optionName: "width", name: "Width", optionType: "field", input: "number", initialValue: 625},
        {optionName: "height", name: "Height", optionType: "field", input: "number", initialValue: 500},
        {optionName: "scale", name: "Scale", optionType: "state", states: ["lin", "log"], initialValue: "log"},
        {optionName: "xLabel", name: "X Label", optionType: "state", states: ["on", "off"], initialValue: "on"},
        {optionName: "yLabel", name: "Y Label", optionType: "state", states: ["on", "off"], initialValue: "on"},
        {optionName: "xKey", name: "X Axis", optionType: "hidden", initialValue: "year"},
        {optionName: "yKey", name: "Y Axis", optionType: "hidden", initialValue: "population"},
        {optionName: "titleKey", name: "Title", optionType: "hidden", initialValue: "location"},
      ],
      lineScale: "log",
    }
  }

  updateLineData(mutatedObject) {
    let mutatedData = JSON.parse(JSON.stringify(this.state.lineData))
    let chosenIndex = -1
    for (let index=0; index < mutatedData.length; index++) {
      if (mutatedData[index].location === mutatedObject.location && mutatedData[index].year === mutatedObject.year) {
        chosenIndex = index
        break
      }
    }
    if (chosenIndex > -1) {
      mutatedData[chosenIndex].population = parseFloat(mutatedObject.population)
      this.setState({lineData: mutatedData})
    }
  }

  render() {
    let colorOptions = [
      {optionName: "axisColor", name: "Axis Color", optionType: "field", input: "string", initialValue: colors[this.props.palette].axisColor},
      {optionName: "legendColor", name: "Legend Color", optionType: "field", input: "string", initialValue: colors[this.props.palette].axisColor},
      {optionName: "gridColor", name: "Grid Color", optionType: "field", input: "string", initialValue: colors[this.props.palette].axisColor},
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
        <h1 style={style.title}> Line Chart </h1>
        <ComponentContainer optionList={this.state.optionList}
          optionsData={style.optionsData}
          palette={this.props.palette}
          colorOptions={colorOptions}>
          <LineChart data={this.state.optionList[0].initialValue}
            color={colors[this.props.palette].linePalette}/>
        </ComponentContainer>
      </div>
    )
  }

}


export default LineExample
