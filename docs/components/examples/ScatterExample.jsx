import React from "react"
import ScatterPlot from "replot-scatter"
import ComponentContainer from "../CompContainer/ComponentContainer.jsx"
import colors from "../../colors"


class ScatterExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      optionList: [
        {optionName: "data", optionType: "scatterData", initialValue: [
          {gender: "male", height: 70, weight: 155, shoeSize: 10},
          {gender: "male", height: 72, weight: 144, shoeSize: 12},
          {gender: "male", height: 73, weight: 158, shoeSize: 11.5},
          {gender: "male", height: 72.5, weight: 160, shoeSize: 11},
          {gender: "male", height: 77, weight: 186, shoeSize: 13},
          {gender: "male", height: 68, weight: 153, shoeSize: 10},
          {gender: "male", height: 69, weight: 160, shoeSize: 9},
          {gender: "male", height: 67, weight: 166, shoeSize: 9.5},
          {gender: "male", height: 64.5, weight: 169, shoeSize: 9},
          {gender: "male", height: 63, weight: 126, shoeSize: 9.5},
          {gender: "male", height: 66.5, weight: 120, shoeSize: 9},
          {gender: "male", height: 65.5, weight: 147, shoeSize: 11},
          {gender: "female", height: 60, weight: 91, shoeSize: 6},
          {gender: "female", height: 63.5, weight: 100, shoeSize: 6.5},
          {gender: "female", height: 62, weight: 102, shoeSize: 6.5},
          {gender: "female", height: 66, weight: 112, shoeSize: 7},
          {gender: "female", height: 59, weight: 90, shoeSize: 6},
          {gender: "female", height: 58.5, weight: 95, shoeSize: 5.5},
          {gender: "female", height: 61.5, weight: 115, shoeSize: 6},
          {gender: "female", height: 69.5, weight: 125, shoeSize: 8},
          {gender: "female", height: 71, weight: 135, shoeSize: 8.5},
          {gender: "female", height: 58, weight: 140, shoeSize: 4.5},
          {gender: "female", height: 68.5, weight: 158, shoeSize: 7.5},
          {gender: "female", height: 64, weight: 160.5, shoeSize: 7.5},
          {gender: "female", height: 65, weight: 130.5, shoeSize: 7},
        ]},
        {optionName: "xKey", optionType: "hidden", initialValue: "height"},
        {optionName: "yKey", optionType: "hidden", initialValue: "weight"},
        {optionName: "titleKey", optionType: "hidden", initialValue: "gender"},
        {optionName: "circleKey", optionType: "hidden", initialValue: "shoeSize"},
        {optionName: "filterBy", optionType: "hidden", initialValue: "none"},
        {optionName: "xLabel", optionType: "state", states: ["on", "off"], initialValue: "on"},
        {optionName: "yLabel", optionType: "state", states: ["on", "off"], initialValue: "on"},
        {optionName: "width", optionType: "field", input: "number", initialValue: 650},
        {optionName: "height", optionType: "field", input: "number", initialValue: 500},
        {optionName: "minRadius", optionType: "field", input: "number", initialValue: 2.5},
        {optionName: "maxRadius", optionType: "field", input: "number", initialValue: 10},
        {optionName: "axisColor", optionType: "field", input: "string", initialValue: "white"},
        {optionName: "legendColor", optionType: "field", input: "string", initialValue: "white"},
        {optionName: "scale", optionType: "state", states: ["lin", "log"], initialValue: "lin"}
      ],
      color: ["#ff8463", "#00da9d"]
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
        <h1 style={style.title}> Scatter Plot </h1>
        <ComponentContainer optionList={this.state.optionList}>
          <ScatterPlot data={this.state.optionList[0].initialValue} color={this.state.color}/>
        </ComponentContainer>
      </div>
    )
  }

}


export default ScatterExample
