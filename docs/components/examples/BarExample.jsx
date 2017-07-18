import React from "react"
import BarChart from "replot-bar"
import ComponentContainer from "../CompContainer/ComponentContainer.jsx"
import colors from "../../colors"


class BarExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      optionList: [
        {optionName: "data", optionType: "data", keyList: ["country"], weightKey: "population", initialValue: [
          {population: 1373, country: "China"},
          {population: 1266, country: "India"},
          {population: 323, country: "United States"},
          {population: 958, country: "Indonesia"},
          {population: 805, country: "Brazil"},
          {population: 501, country: "Pakistan"},
          {population: 786, country: "Nigeria"},
          {population: 456, country: "Bangladesh"},
        ]},
        {optionName: "xKey", optionType: "hidden", initialValue: "country"},
        {optionName: "yKey", optionType: "hidden", initialValue: "population"},
        {optionName: "xTitle", optionType: "hidden", initialValue: "Country"},
        {optionName: "yTitle", optionType: "hidden", initialValue: "Population"},
        {optionName: "maxGraphW", optionType: "field", input: "number", initialValue: 600},
        {optionName: "graphH", optionType: "field", input: "number", initialValue: 550},
        {optionName: "yScale", optionType: "state", states: ["lin", "log"], initialValue: "lin"}
      ],
      barScale: "lin",
      color: ["#ff5a3c", "#ff8463", "#ffaf8c", "#FFD2AD", "#bfd5a8", "#8fd9a8", "#00da9d", "#009b76"]
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
      options: {
        container: "80px 50px",
      }
    }
    return(
      <div className="container" style={style.container}>
        <h1 style={style.title}> Bar Chart </h1>
        <ComponentContainer optionList={this.state.optionList}>
          <BarChart data={this.state.optionList[0].initialValue} color={this.state.color}/>
        </ComponentContainer>
      </div>
    )
  }

}


export default BarExample
