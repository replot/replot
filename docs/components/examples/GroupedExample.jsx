import React from "react"
import BarChart from "replot-bar"
import GroupedKeyValueTable from "../GroupedKeyValueTable.jsx"
import ScaleSwitch from "../ScaleSwitch.jsx"


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
      groupedScale: "lin"
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

  updateGroupedBarScale(mutatedObject) {
    this.setState({groupedScale: mutatedObject.scale})
  }

  render() {
    return(
      <div className="container" style={{padding: "80px 50px"}}>
        <h1 style={{textAlign: "left", color: "white"}}> Grouped Bar Chart </h1>
        <div style={{width:"70%", display:"inline-block"}}>
          <BarChart data={this.state.groupedData} xKey="year" yKey="population"
            groupKey="country" yScale={this.state.groupedScale} color={this.state.color} />
        </div>
        <GroupedKeyValueTable data={this.state.groupedData}
          updateData={this.updateGroupedData.bind(this)} />
        <ScaleSwitch scale={this.state.groupedScale} updateScale={this.updateGroupedBarScale.bind(this)} />
      </div>
    )
  }

}


export default GroupedExample
