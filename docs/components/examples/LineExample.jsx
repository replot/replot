import React from "react"
import LineChart from "replot-line"
import DataTable from "../DataTable.jsx"
import ComponentContainer from "../CompContainer/ComponentContainer.jsx"


class LineExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      lineData: [
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
      ],
      optionList: [
        {optionName: "xKey", optionType: "hidden", initialValue: "year"},
        {optionName: "yKey", optionType: "hidden", initialValue: "population"},
        {optionName: "titleKey", optionType: "hidden", initialValue: "location"},
        {optionName: "xLabel", optionType: "state", states: ["on", "off"], initialValue: "on"},
        {optionName: "yLabel", optionType: "state", states: ["on", "off"], initialValue: "on"},
        {optionName: "axisColor", optionType: "field", input: "string", initialValue: "white"},
        {optionName: "legendColor", optionType: "field", input: "string", initialValue: "white"},
        {optionName: "width", optionType: "field", input: "number", initialValue: 800},
        {optionName: "height", optionType: "field", input: "number", initialValue: 600},
        {optionName: "scale", optionType: "state", states: ["lin", "log"], initialValue: "log"}
      ]
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
    return(
      <div className="container" style={{padding: "80px 50px"}}>
        <h1 style={{textAlign: "left", color: "white"}}> Line Chart </h1>
        <div style={{width:"800px", display:"inline-block"}}>
          <ComponentContainer optionList={this.state.optionList}>
            <LineChart data={this.state.lineData} />
          </ComponentContainer>
        </div>
        <DataTable data={this.state.lineData} keyList={["location","year"]}
          weightKey="population" updateData={this.updateLineData.bind(this)}/>
      </div>
    )
  }

}


export default LineExample
