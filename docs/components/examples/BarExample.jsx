import React from "react"
import BarChart from "replot-bar"
import TwoColumnTable from "../TwoColumnTable.jsx"
import ScaleSwitch from "../ScaleSwitch.jsx"


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
      barScale: "lin"
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

  updateBarScale(mutatedObject) {
    this.setState({barScale: mutatedObject.scale})
  }

  render() {
    return(
      <div className="container" style={{padding: "80px 50px"}}>
        <h1 style={{textAlign: "left", color: "white"}}> Bar Chart </h1>
        <div style={{width:"70%", display:"inline-block"}}>
          <BarChart data={this.state.barData} xKey="country"
            yKey="population" yScale={this.state.barScale} color={this.state.color} />
        </div>
        <TwoColumnTable data={this.state.barData} updateData={this.updateBarData.bind(this)} />
        <ScaleSwitch scale={this.state.barScale} updateScale={this.updateBarScale.bind(this)} />
      </div>
    )
  }

}


export default BarExample
