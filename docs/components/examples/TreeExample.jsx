import React from "react"
import TreeMap from "replot-treemap"
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
        {optionName: "initialAnimation", name: "Initial Animation", optionType: "bool", initialValue: true},
        {optionName: "displayPercentages", name: "Percentages", optionType: "bool", initialValue: true},
        {optionName: "width", name: "Width", optionType: "field", input: "string", initialValue: "98%"},
        {optionName: "height", name: "Height", optionType: "field", input: "number", initialValue: 420},
        {optionName: "otherThreshold", name: "Other Threshold", optionType: "field", input: "number", initialValue: .025},
        {optionName: "tooltip", name: "Tooltip", optionType: "bool", initialValue: false},
        {optionName: "tooltipColor", name: "Tooltip Color", optionType: "state", states:["dark","light"], initialValue: "dark"},
        {optionName: "weightKey", name: "Weight", optionType: "hidden", initialValue: "population"},
        {optionName: "keyOrder", name: "Key Order", optionType: "hidden", initialValue: ["country", "state", "city"]},
      ],
      keyOrder: ["country", "state", "city"],
    }
  }

  render() {
    let style = {
      title: {
        fontSize: "45px",
        textAlign: "center",
        color: colors[this.props.palette].body.text,
        padding: 15,
      },
      container: {
        padding: "80px 50px",
      },
      optionsData: {
        width: "38%",
        display: "inline-block",
        verticalAlign: "top",
        backgroundColor: colors[this.props.palette].optionsTableBg,
        marginLeft: "25px",
        maxWidth: "405px",
      }
    }
    return(
      <div className="container" style={style.container}>
        <h1 style={style.title}> Treemap </h1>
        <ComponentContainer optionList={this.state.optionList}
          optionsData={style.optionsData}
          palette={this.props.palette}>
          <TreeMap data={this.state.optionList[0].initialValue}
            colorPalette={colors[this.props.palette].treeMapPalette}
            grayscalePalette={colors[this.props.palette].treeMapPalette}/>
        </ComponentContainer>
      </div>
    )
  }

}


export default TreeExample
