import React from "react"
import BarChart from "replot-bar"
import DataTable from "../DataTable.jsx"
import ComponentContainer from "../CompContainer/ComponentContainer.jsx"


class GroupedExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      groupedData: [
        {population: 1367, country: "China", year: 2014},
        {population: 1054, country: "China", year: 2012},
        {population: 1140, country: "China", year: 2010},
        {population: 517, country: "United States", year: 2014},
        {population: 312, country: "United States", year: 2012},
        {population: 908, country: "United States", year: 2010},
      ],
      optionList: [
        {optionName: "xKey", optionType: "hidden", initialValue: "year"},
        {optionName: "yKey", optionType: "hidden", initialValue: "population"},
        {optionName: "groupKey", optionType: "hidden", initialValue: "country"},
        {optionName: "maxGraphW", optionType: "field", input: "number", initialValue: 800},
        {optionName: "graphH", optionType: "field", input: "number", initialValue: 600},
        {optionName: "yScale", optionType: "state", states: ["lin", "log"], initialValue: "lin"}
      ]
    }
  }

  updateGroupedData(mutatedObject) {
    let mutatedData = JSON.parse(JSON.stringify(this.state.groupedData))
    let chosenIndex = -1
    for (let index=0; index < mutatedData.length; index++) {
      if (mutatedData[index].year === mutatedObject.year &&
        mutatedData[index].country === mutatedObject.country) {
        chosenIndex = index
        break
      }
    }
    if (chosenIndex > -1) {
      mutatedData[chosenIndex].population = parseInt(mutatedObject.population)
      this.setState({groupedData: mutatedData})
    }
  }

  render() {
    return(
      <div className="container" style={{padding: "80px 50px"}}>
        <h1 style={{textAlign: "left", color: "white"}}> Grouped Bar Chart </h1>
        <div style={{width:"800px", display:"inline-block"}}>
          <ComponentContainer optionList={this.state.optionList}>
            <BarChart data={this.state.groupedData} />
          </ComponentContainer>
        </div>
        <DataTable data={this.state.groupedData} keyList={["year", "country"]}
          weightKey="population" updateData={this.updateGroupedData.bind(this)}/>
      </div>
    )
  }

}


export default GroupedExample
