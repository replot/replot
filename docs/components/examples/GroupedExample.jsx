import React from "react"
import BarChart from "replot-bar"
import DataTable from "../DataTable.jsx"
import ComponentContainer from "../CompContainer/ComponentContainer.jsx"


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
        {optionName: "xKey", optionType: "hidden", initialValue: "year"},
        {optionName: "yKey", optionType: "hidden", initialValue: "population"},
        {optionName: "xTitle", optionType: "hidden", initialValue: "Year"},
        {optionName: "yTitle", optionType: "hidden", initialValue: "Population"},
        {optionName: "groupKey", optionType: "hidden", initialValue: "country"},
        {optionName: "maxGraphW", optionType: "field", input: "number", initialValue: 800},
        {optionName: "graphH", optionType: "field", input: "number", initialValue: 600},
        {optionName: "yScale", optionType: "state", states: ["lin", "log"], initialValue: "lin"}
      ]
    }
  }

  render() {
    return(
      <div className="container" style={{padding: "80px 50px"}}>
        <h1 style={{textAlign: "left", color: "white"}}> Grouped Bar Chart </h1>
        <ComponentContainer optionList={this.state.optionList}>
          <BarChart data={this.state.optionList[0].initialValue} />
        </ComponentContainer>
      </div>
    )
  }

}


export default GroupedExample
