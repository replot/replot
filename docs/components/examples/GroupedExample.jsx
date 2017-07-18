import React from "react"
import BarChart from "replot-bar"
import ComponentContainer from "../CompContainer/ComponentContainer.jsx"
import colors from "../../colors"


class GroupedExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      optionList: [
        {optionName: "data", optionType: "data", keyList: ["year", "country"], weightKey: "population", initialValue: [
          {population: 1367, country: "China", year: 2014},
          {population: 1054, country: "China", year: 2012},
          {population: 1140, country: "China", year: 2010},
          {population: 517, country: "United States", year: 2014},
          {population: 312, country: "United States", year: 2012},
          {population: 908, country: "United States", year: 2010},
        ]},
        {optionName: "xKey", optionType: "hidden", initialValue: "year"},
        {optionName: "yKey", optionType: "hidden", initialValue: "population"},
        {optionName: "xTitle", optionType: "hidden", initialValue: "Year"},
        {optionName: "yTitle", optionType: "hidden", initialValue: "Population"},
        {optionName: "groupKey", optionType: "hidden", initialValue: "country"},
        {optionName: "maxGraphW", optionType: "field", input: "number", initialValue: 550},
        {optionName: "graphH", optionType: "field", input: "number", initialValue: 600},
        {optionName: "yScale", optionType: "state", states: ["lin", "log"], initialValue: "lin"}
      ],
      groupedScale: "lin",
      color: ["#ff8463", "#bfd5a8", "#00da9d", "#009b76"]
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
      }
    }
    return(
      <div className="container" style={style.container}>
        <h1 style={style.title}> Grouped Bar Chart </h1>
        <ComponentContainer optionList={this.state.optionList}>
          <BarChart data={this.state.optionList[0].initialValue} color={this.state.color}/>
        </ComponentContainer>
      </div>
    )
  }

}


export default GroupedExample
