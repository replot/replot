import React from "react"
import ScatterPlot from "replot-scatter"
import ScatterKeyValueTable from "../ScatterKeyValueTable.jsx"
import ScaleSwitch from "../ScaleSwitch.jsx"


class ScatterExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      scatterData: [
        {continent: "Asia", country: "China", population: 1388232693, gdp: 11795297000},
        {continent: "Asia", country: "Japan", population: 126045211, gdp: 4841221000},
        {continent: "Asia", country: "India", population: 1342512706, gdp: 2454458000},
        {continent: "Asia", country: "South Korea", population: 50704971, gdp: 1498074000},
        {continent: "Asia", country: "Indonesia", population: 263510146, gdp: 1020515000},
        {continent: "Asia", country: "Saudi Arabia", population: 32742664, gdp: 707379000},
        {continent: "S. America", country: "Brazil", population: 211243220, gdp: 2140940000},
        {continent: "S. America", country: "Argentina", population: 44272125, gdp: 628935000},
        {continent: "S. America", country: "Colombia", population: 49067981, gdp: 306439000},
        {continent: "S. America", country: "Venezuela", population: 31925705, gdp: 251589000},
        {continent: "S. America", country: "Chile", population: 18313495, gdp: 251220000},
        {continent: "S. America", country: "Peru", population: 32166473, gdp: 207072000},
        {continent: "Europe", country: "Germany", population: 80636124, gdp: 3423287000},
        {continent: "Europe", country: "UK", population: 65511098, gdp: 2496757000},
        {continent: "Europe", country: "France", population: 64938716, gdp: 2420440000},
        {continent: "Europe", country: "Italy", population: 59797978, gdp: 1807425000},
        {continent: "Europe", country: "Russia", population: 143375006, gdp: 1560706000},
        {continent: "Europe", country: "Spain", population: 46070146, gdp: 1232440000},
        {continent: "Africa", country: "Nigeria", population: 191835936, gdp: 400621000},
        {continent: "Africa", country: "Egypt", population: 95215102, gdp: 332349000},
        {continent: "Africa", country: "South Africa", population: 55436360, gdp: 317568000},
        {continent: "Africa", country: "Algeria", population: 41063753, gdp: 173947000},
        {continent: "Africa", country: "Angola", population: 26655513, gdp: 122365000},
        {continent: "Africa", country: "Sudan", population: 42166323, gdp: 115874000},
      ],
      scatterScale: "log"
    }
  }

  updateScatterData(mutatedObject) {
    let mutatedData = JSON.parse(JSON.stringify(this.state.scatterData))
    let chosenIndex = -1
    for (let index=0; index < mutatedData.length; index++) {
      if (mutatedData[index].continent === mutatedObject.continent && mutatedData[index].population === mutatedObject.population) {
        chosenIndex = index
        break
      }
    }
    if (chosenIndex > -1) {
      mutatedData[chosenIndex].gdp = parseFloat(mutatedObject.gdp)
      this.setState({scatterData: mutatedData})
    }
  }

  updateScatterScale(mutatedObject) {
    this.setState({scatterScale: mutatedObject.scale})
  }

  render() {
    return(
      <div className="container" style={{padding: "80px 50px"}}>
        <h1 style={{textAlign: "left", color: "white"}}> Scatter Plot </h1>
        <div style={{width:"70%", display:"inline-block"}}>
          <ScatterPlot data={this.state.scatterData}
            titleKey="continent" xKey="population" yKey="gdp"
            scale={this.state.scatterScale} grid="default"
            legend="default" color={this.state.color}
            axisColor="white" legendColor="white"/>
        </div>
        <ScatterKeyValueTable data={this.state.scatterData} updateData={this.updateScatterData.bind(this)} />
        <ScaleSwitch scale={this.state.scatterScale} updateScale={this.updateScatterScale.bind(this)} />
      </div>
    )
  }

}


export default ScatterExample
