import React from "react"
import TreeMapManager from "replot-treemap"
import ComponentContainer from "../CompContainer/ComponentContainer.jsx"
import colors from "../../colors"


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
        {optionName: "width", optionType: "field", input: "number", initialValue: 600},
        {optionName: "height", optionType: "field", input: "number", initialValue: 400},
        {optionName: "otherThreshold", optionType: "field", input: "number", initialValue: .025},
        {optionName: "initialAnimation", optionType: "bool", initialValue: true},
        {optionName: "displayPercentages", optionType: "bool", initialValue: true},
        {optionName: "tooltip", optionType: "bool", initialValue: false},
        {optionName: "tooltipColor", optionType: "state", states:["dark","light"], initialValue: "dark"}
      ],
      keyOrder: ["country", "state", "city"],
      color: ["#ff5a3c", "#8fd9a8", "#ff8463", "#ffaf8c", "#FFD2AD", "#bfd5a8", "#00da9d", "#009b76"]
    }
  }

  render() {
    let style = {
      title: {
        fontSize: "45px",
        textAlign: "center",
        color: colors.bodyText,
        padding: 15,
        textShadow: "0px 5px 18px rgba(0, 218, 157, 0.75)",
      },
      container: {
        padding: "80px 50px",
      },
    }
    return(
      <div className="container" style={style.container}>
        <h1 style={style.title}> Treemap </h1>
        <ComponentContainer optionList={this.state.optionList}>
          <TreeMapManager data={this.state.optionList[0].initialValue}
            colorPalette={this.state.color}
            grayscalePalette={this.state.color}/>
        </ComponentContainer>
      </div>
    )
  }

}


export default TreeExample
