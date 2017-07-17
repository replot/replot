import React from "react"
import BarChart from "replot-bar"
import ComponentContainer from "../CompContainer/ComponentContainer.jsx"


class BarExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      optionList: [
        {optionName: "data", optionType: "data", keyList: ["country"], weightKey: "population", initialValue: [
          {population: 1373, country: "China"},
          {population: 1266, country: "India"},
          {population: 323, country: "United States"},
          {population: 258, country: "Indonesia"},
          {population: 205, country: "Brazil"},
          {population: 201, country: "Pakistan"},
          {population: 186, country: "Nigeria"},
          {population: 156, country: "Bangladesh"},
        ]},
        {optionName: "xKey", optionType: "hidden", initialValue: "country"},
        {optionName: "yKey", optionType: "hidden", initialValue: "population"},
        {optionName: "xTitle", optionType: "hidden", initialValue: "Country"},
        {optionName: "yTitle", optionType: "hidden", initialValue: "Population"},
        {optionName: "maxGraphW", optionType: "field", input: "number", initialValue: 800},
        {optionName: "graphH", optionType: "field", input: "number", initialValue: 600},
        {optionName: "yScale", optionType: "state", states: ["lin", "log"], initialValue: "lin"}
      ]
    }
  }

  render() {
    return(
      <div className="container" style={{padding: "80px 50px"}}>
        <h1 style={{textAlign: "left", color: "white"}}> Bar Chart </h1>
        <ComponentContainer optionList={this.state.optionList}>
          <BarChart data={this.state.optionList[0].initialValue} />
        </ComponentContainer>
      </div>
    )
  }

}


export default BarExample
