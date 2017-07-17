import React from "react"
import TreeMapManager from "replot-treemap"
import ComponentContainer from "../CompContainer/ComponentContainer.jsx"


class TreeExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      optionList: [
        {optionName: "data", optionType: "data", keyList: ["country", "state", "city"], weightKey: "population", initialValue: [
          {population: 650, country: "China", state: "Beijing", city: "Miyun"},
          {population: 902, country: "China", state: "Beijing", city: "Tongzhou"},
          {population: 120, country: "China", state: "Beijing", city: "Yizhuang"},
          {population: 800, country: "United States", state: "California", city: "San Francisco"},
          {population: 1002, country: "United States", state: "California", city: "Los Angeles"},
          {population: 150, country: "United States", state: "Vermont", city: "Newport"},
          {population: 202, country: "United States", state: "Vermont", city: "Montpelier"},
          {population: 112, country: "Canada", state: "Ontario", city: "Kingston"},
          {population: 80, country: "Canada", state: "Ontario", city: "Barrie"},
        ]},
        {optionName: "weightKey", optionType: "hidden", initialValue: "population"},
        {optionName: "keyOrder", optionType: "hidden", initialValue: ["country", "state", "city"]},
        {optionName: "width", optionType: "field", input: "number", initialValue: 800},
        {optionName: "height", optionType: "field", input: "number", initialValue: 400},
        {optionName: "otherThreshold", optionType: "field", input: "number", initialValue: .025},
        {optionName: "initialAnimation", optionType: "bool", initialValue: true},
        {optionName: "displayPercentages", optionType: "bool", initialValue: true},
        {optionName: "tooltip", optionType: "bool", initialValue: false},
        {optionName: "tooltipColor", optionType: "state", states:["dark","light"], initialValue: "dark"}
      ]
    }
  }

  render() {
    return(
      <div className="container" style={{padding: "80px 50px"}}>
        <h1 style={{textAlign: "left", color: "white"}}> Treemap </h1>
        <ComponentContainer optionList={this.state.optionList}>
          <TreeMapManager data={this.state.optionList[0].initialValue}/>
        </ComponentContainer>
      </div>
    )
  }

}


export default TreeExample
