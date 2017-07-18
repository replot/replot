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
        {optionName: "xKey", optionType: "hidden", initialValue: "year"},
        {optionName: "yKey", optionType: "hidden", initialValue: "population"},
        {optionName: "titleKey", optionType: "hidden", initialValue: "location"},
        {optionName: "xLabel", optionType: "state", states: ["on", "off"], initialValue: "on"},
        {optionName: "yLabel", optionType: "state", states: ["on", "off"], initialValue: "on"},
        {optionName: "axisColor", optionType: "field", input: "string", initialValue: "white"},
        {optionName: "legendColor", optionType: "field", input: "string", initialValue: "white"},
        {optionName: "width", optionType: "field", input: "number", initialValue: 625},
        {optionName: "height", optionType: "field", input: "number", initialValue: 500},
        {optionName: "scale", optionType: "state", states: ["lin", "log"], initialValue: "log"}
      ],
      lineScale: "log",
      color: ["#ff5a3c", "#ff8463", "#FFD2AD", "#bfd5a8", "#8fd9a8", "#00da9d", "#009b76"]
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
    let style = {
      title: {
        fontSize: "45px",
        textAlign: "center",
        color: colors.bodyText,
        padding: 15,
        textShadow: "0px 5px 18px rgba(0, 218, 157, 0.75)",
      },
      container: {
        padding: "80px 50px",
      }
    }
    return(
      <div className="container" style={style.container}>
        <h1 style={style.title}> Line Chart </h1>
        <ComponentContainer optionList={this.state.optionList}>
          <LineChart data={this.state.optionList[0].initialValue} color={this.state.color}/>
        </ComponentContainer>
      </div>
    )
  }

}


export default LineExample
