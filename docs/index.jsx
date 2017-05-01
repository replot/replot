import React from "react"
import ReactDOM from "react-dom"
import Radium from "radium"
import TreeMap from "replot-treemap"
import LineChart from "replot-line"
import BarChart from "replot-bar"
import colors from "./colors"
import TitleSection from "./sections/TitleSection.jsx"
import KeyValueTable from "./components/KeyValueTable.jsx"


class ExampleApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        {population: 1373, country: "China"},
        {population: 1266, country: "India"},
        {population: 323, country: "United States"},
        {population: 258, country: "Indonesia"},
        {population: 205, country: "Brazil"},
        {population: 201, country: "Pakistan"},
        {population: 186, country: "Nigeria"},
        {population: 156, country: "Bangladesh"},
      ],
      line: [
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
      ]
    }
  }

  updateData(mutatedObject) {
    let mutatedData = JSON.parse(JSON.stringify(this.state.data))
    let chosenIndex = -1
    for (let index=0; index < mutatedData.length; index++) {
      if (mutatedData[index].country === mutatedObject.country) {
        chosenIndex = index
        break
      }
    }
    if (chosenIndex > -1) {
      mutatedData[chosenIndex].population = parseInt(mutatedObject.population)
      this.setState({data: mutatedData})
    }
  }

  render() {
    const style = {
      body: {
        backgroundColor: colors.bodyBg,
        color: colors.bodyText,
      }
    }

    return(
      <div style={style.body}>
        <Radium.StyleRoot>
          <TitleSection />
          <div className="container" style={{padding: "80px 50px"}}>
            <h1 style={{textAlign: "left", color: "white"}}> Treemap </h1>
            <div style={{width:"70%", display:"inline-block"}}>
              <TreeMap data={this.state.data} weightKey="population"
                titleKey="country" />
            </div>
            <KeyValueTable data={this.state.data} updateData={this.updateData.bind(this)} />
          </div>
          <div className="container" style={{padding: "80px 50px"}}>
            <h1 style={{textAlign: "left", color: "white"}}> Bar Chart </h1>
            <div style={{width:"70%", display:"inline-block"}}>
              <BarChart data={this.state.data} xKey="country"
                yKey="population" yScale="lin" color={this.state.color} />
            </div>
            <KeyValueTable data={this.state.data} updateData={this.updateData.bind(this)} />
          </div>
          <div className="container" style={{padding: "80px 50px"}}>
            <h1 style={{textAlign: "left", color: "white"}}> Line Chart </h1>
            <div style={{width:"70%", display:"inline-block"}}>
              <LineChart data={this.state.line} titleKey="location"
                xKey="year" yKey="population" scale="log"
                grid="default" legend="default" color={this.state.color} />
            </div>
            <KeyValueTable data={this.state.data} updateData={this.updateData.bind(this)} />
          </div>
        </Radium.StyleRoot>
      </div>
    )
  }
}

ExampleApp = Radium(ExampleApp)


ReactDOM.render(
  <ExampleApp />,
  document.getElementById("react-app")
)
