import React from "react"
import TreeMap from "replot-treemap"
import BarChart from "replot-bar"
import LineChart from "replot-line"
import ScatterPlot from "replot-scatter"
import NetworkChart from "replot-network"
import SectionContainer from "../components/SectionContainer.jsx"
import TwoColumnTable from "../components/TwoColumnTable.jsx"
import GroupedKeyValueTable from "../components/GroupedKeyValueTable.jsx"
import LineKeyValueTable from "../components/LineKeyValueTable.jsx"
import ScatterKeyValueTable from "../components/ScatterKeyValueTable.jsx"
import ScaleSwitch from "../components/ScaleSwitch.jsx"


class ExamplesSection extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      treeData: [
        {population: 1373, country: "China"},
        {population: 1266, country: "India"},
        {population: 323, country: "United States"},
        {population: 258, country: "Indonesia"},
        {population: 205, country: "Brazil"},
        {population: 201, country: "Pakistan"},
        {population: 186, country: "Nigeria"},
        {population: 156, country: "Bangladesh"},
      ],
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
      barScale: "lin",
      groupedData: [
        {population: 1367, country: "China", year: 2014},
        {population: 1054, country: "China", year: 2012},
        {population: 1140, country: "China", year: 2010},
        {population: 517, country: "United States", year: 2014},
        {population: 312, country: "United States", year: 2012},
        {population: 908, country: "United States", year: 2010},
      ],
      groupedScale: "lin",
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
      lineScale: "log",
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
      scatterScale: "log",
      nodes: [
        {id: 1, name: "One", age: 10, country: "India"},
        {id: 2, name: "Two", age: 30, country: "India"},
        {id: 3, name: "Three", age: 20, country: "India"},
        {id: 4, name: "Four", age: 50, country: "United States"},
        {id: 5, name: "Five", age: 40, country: "United States"},
        {id: 6, name: "Six", age: 20, country: "China"},
        {id: 7, name: "Seven", age: 10, country: "China"}
      ],
      links: [
        {parent: 2, child: 1},
        {parent: 2, child: 7},
        {parent: 4, child: 3},
        {parent: 4, child: 2},
        {parent: 5, child: 3},
        {parent: 5, child: 6}
      ],
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

  updateLineScale(mutatedObject) {
    this.setState({lineScale: mutatedObject.scale})
  }
  updateScatterScale(mutatedObject) {
    this.setState({scatterScale: mutatedObject.scale})
  }
  updateGroupedBarScale(mutatedObject) {
    this.setState({groupedScale: mutatedObject.scale})
  }
  updateBarScale(mutatedObject) {
    this.setState({barScale: mutatedObject.scale})
  }

  render() {

    return(
      <SectionContainer>
        <div className="container" style={{padding: "80px 50px"}}>
          <h1 style={{textAlign: "left", color: "white"}}> Treemap </h1>
          <div style={{width:"70%", display:"inline-block"}}>
            <TreeMap data={this.state.treeData} weightKey="population"
              titleKey="country" />
          </div>
          <TwoColumnTable data={this.state.treeData} updateData={this.updateTreeData.bind(this)} />
        </div>
        <div className="container" style={{padding: "80px 50px"}}>
          <h1 style={{textAlign: "left", color: "white"}}> Bar Chart </h1>
          <div style={{width:"70%", display:"inline-block"}}>
            <BarChart data={this.state.barData} xKey="country"
              yKey="population" yScale={this.state.barScale} color={this.state.color} />
          </div>
          <TwoColumnTable data={this.state.barData} updateData={this.updateBarData.bind(this)} />
          <ScaleSwitch scale={this.state.barScale} updateScale={this.updateBarScale.bind(this)} />
        </div>
        <div className="container" style={{padding: "80px 50px"}}>
          <h1 style={{textAlign: "center"}}> Grouped Bar Chart </h1>
          <div style={{width:"70%", display:"inline-block"}}>
            <BarChart data={this.state.groupedData} xKey="year" yKey="population"
              groupKey="country" yScale={this.state.groupedScale} color={this.state.color} />
          </div>
          <GroupedKeyValueTable data={this.state.groupedData}
            updateData={this.updateGroupedData.bind(this)} />
          <ScaleSwitch scale={this.state.groupedScale} updateScale={this.updateGroupedBarScale.bind(this)} />
        </div>
        <div className="container" style={{padding: "80px 50px"}}>
          <h1 style={{textAlign: "left", color: "white"}}> Line Chart </h1>
          <div style={{width:"70%", display:"inline-block"}}>
            <LineChart data={this.state.lineData} titleKey="location"
              xKey="year" yKey="population" scale={this.state.lineScale}
              grid="default" legend="default" color={this.state.color}
              axisColor="white" legendColor="white"/>
          </div>
          <LineKeyValueTable data={this.state.lineData} updateData={this.updateLineData.bind(this)} />
          <ScaleSwitch scale={this.state.lineScale} updateScale={this.updateLineScale.bind(this)} />
        </div>
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
        <div className="container" style={{padding: "80px 50px"}}>
          <h1 style={{textAlign: "left", color: "white"}}> Network Chart </h1>
          <div style={{width:"70%", display:"inline-block"}}>
            <NetworkChart nodes={this.state.nodes} links={this.state.links}
              labelKey="name" labelColor="white"
              groupKey="country" lineColor="white"/>
          </div>
        </div>
      </SectionContainer>
    )
  }

}


export default ExamplesSection
