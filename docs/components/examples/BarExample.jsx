import React from "react"
import BarChart from "replot-bar"
import DataTable from "../DataTable.jsx"
import ComponentContainer from "../CompContainer/ComponentContainer.jsx"


class BarExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      barData: [
        {population: 1373, country: "China"},
        {population: 1266, country: "India"},
        {population: 323, country: "United States"},
        {population: 258, country: "Indonesia"},
        {population: 205, country: "Brazil"},
        {population: 201, country: "Pakistan"},
        {population: 186, country: "Nigeria"},
        {population: 156, country: "Bangladesh"},
      ],
      optionList: [
        {optionName: "xKey", optionType: "hidden", initialValue: "country"},
        {optionName: "yKey", optionType: "hidden", initialValue: "population"},
        {optionName: "maxGraphW", optionType: "field", input: "number", initialValue: 800},
        {optionName: "graphH", optionType: "field", input: "number", initialValue: 600},
        {optionName: "yScale", optionType: "state", states: ["lin", "log"], initialValue: "lin"}
      ]
    }
  }

  updateBarData(mutatedObject) {
    let mutatedData = JSON.parse(JSON.stringify(this.state.barData))
    let chosenIndex = -1
    for (let index=0; index < mutatedData.length; index++) {
      if (mutatedData[index].country === mutatedObject.country) {
        chosenIndex = index
        break
      }
    }
    if (chosenIndex > -1) {
      mutatedData[chosenIndex].population = parseInt(mutatedObject.population)
      this.setState({barData: mutatedData})
    }
  }

  render() {
    return(
      <div className="container" style={{padding: "80px 50px"}}>
        <h1 style={{textAlign: "left", color: "white"}}> Bar Chart </h1>
        <div style={{width:"800px", display:"inline-block"}}>
          <ComponentContainer optionList={this.state.optionList}>
            <BarChart data={this.state.barData} />
          </ComponentContainer>
        </div>
        <DataTable data={this.state.barData} keyList={["country"]} weightKey="population"
          updateData={this.updateBarData.bind(this)}/>
      </div>
    )
  }

}


export default BarExample
