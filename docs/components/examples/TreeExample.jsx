import React from "react"
import TreeMap from "replot-treemap"
import TwoColumnTable from "../TwoColumnTable.jsx"


class TreeExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      treeData: [
        {population: 650, country: "China", state: "Beijing", city: "Miyun"},
        {population: 902, country: "China", state: "Beijing", city: "Tongzhou"},
        {population: 120, country: "China", state: "Beijing", city: "Yizhuang"},
        {population: 800, country: "United States", state: "California", city: "San Francisco"},
        {population: 1002, country: "United States", state: "California", city: "Los Angeles"},
        {population: 150, country: "United States", state: "Vermont", city: "Newport"},
        {population: 202, country: "United States", state: "Vermont", city: "Montpelier"},
        {population: 112, country: "Canada", state: "Ontario", city: "Kingston"},
        {population: 80, country: "Canada", state: "Ontario", city: "Barrie"},
      ],
      keyOrder: ["country", "state", "city"]
    }
  }

  updateTreeData(mutatedObject) {
    let mutatedData = JSON.parse(JSON.stringify(this.state.treeData))
    let chosenIndex = -1
    for (let index=0; index < mutatedData.length; index++) {
      if (mutatedData[index].country === mutatedObject.country) {
        chosenIndex = index
        break
      }
    }
    if (chosenIndex > -1) {
      mutatedData[chosenIndex].population = parseInt(mutatedObject.population)
      this.setState({treeData: mutatedData})
    }
  }

  render() {
    return(
      <div className="container" style={{padding: "80px 50px"}}>
        <h1 style={{textAlign: "left", color: "white"}}> Treemap </h1>
        <div style={{width:"70%", display:"inline-block"}}>
          <TreeMap data={this.state.treeData} weightKey="population"
            titleKey="country" keyOrder={this.state.keyOrder}/>
        </div>
        <TwoColumnTable data={this.state.treeData} updateData={this.updateTreeData.bind(this)} />
      </div>
    )
  }

}


export default TreeExample
