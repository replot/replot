import React from "react"
import PropTypes from "prop-types"
import DataTable from "../DataTable.jsx"
import ScatterKeyValueTable from "../ScatterKeyValueTable.jsx"
import OptionsPane from "./OptionsPane.jsx"
import FieldSwitch from "./FieldSwitch.jsx"
import BoolSwitch from "./BoolSwitch.jsx"
import StateSwitch from "./StateSwitch.jsx"
import NonSwitch from "./NonSwitch.jsx"

class Toggle extends React.Component {

  render() {
    let dataLabelColor
    let optionsLabelColor
    if (this.props.active == "data") {
      dataLabelColor = "#00da9d"
      optionsLabelColor = "#7f9298"
    } else {
      dataLabelColor = "#7f9298"
      optionsLabelColor = "#00da9d"
    }
    let style = {
      dataLabel: {
        fontSize: "1.25rem",
        width: "50%",
        display: "inline-block",
        textAlign: "center",
        paddingTop: "10px",
        paddingBottom: "15px",
        backgroundColor: "#112e37",
        color: dataLabelColor,
      },
      optionsLabel: {
        fontSize: "1.25rem",
        width: "50%",
        display: "inline-block",
        textAlign: "center",
        paddingTop: "10px",
        paddingBottom: "15px",
        backgroundColor: "#112e37",
        color: optionsLabelColor
      }
    }
    return (
      <div>
        <div onClick={this.props.handleData} style={style.dataLabel}>
          Data
        </div>
        <div onClick={this.props.handleOptions} style={style.optionsLabel}>
          Options
        </div>
      </div>
    )
  }
}


class ComponentContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      options: {},
      active: "data"
    }
    for (let option of this.props.optionList){
      this.state.options[option.optionName] = option.initialValue
    }
  }

  toggleData() {
    this.setState({
      active: "data"
    })
  }

  toggleOptions() {
    this.setState({
      active: "options"
    })
  }

  updateFuncGen(name){
    let updateFunc = function (newSetting) {
      let newOptions = this.state.options
      newOptions[name] = newSetting
      this.setState({options: newOptions})
    }
    return updateFunc
  }

  updateDataGen(titles, weight) {
    let updateData = function (mutatedObject) {
      let mutatedData = JSON.parse(JSON.stringify(this.state.options.data))
      let chosenIndex = -1
      for (let index=0; index < mutatedData.length; index++) {
        let match = true
        for (let title of titles) {
          if (mutatedData[index][title] != mutatedObject[title]){
            match = false
          }
        }
        if (match) {
          chosenIndex = index
          break
        }
      }
      if (chosenIndex > -1) {
        mutatedData[chosenIndex][weight] = parseInt(mutatedObject[weight])
        let newOptions = this.state.options
        newOptions.data = mutatedData
        this.setState({options: newOptions})
      }
    }
    return updateData
  }

  updateScatterShoeData(mutatedObject) {
    let mutatedData = JSON.parse(JSON.stringify(this.state.options.data))
    let chosenIndex = -1
    for (let index=0; index < mutatedData.length; index++) {
      if (mutatedData[index].weight === mutatedObject.weight && mutatedData[index].height === mutatedObject.height) {
        chosenIndex = index
        break
      }
    }
    if (chosenIndex > -1) {
      mutatedData[chosenIndex].shoeSize = parseFloat(mutatedObject.shoeSize)
      let newOptions = this.state.options
      newOptions.data = mutatedData
      this.setState({options: newOptions})
    }
  }

  updateScatterWeightData(mutatedObject) {
    let mutatedData = JSON.parse(JSON.stringify(this.state.options.data))
    let chosenIndex = -1
    for (let index=0; index < mutatedData.length; index++) {
      if (mutatedData[index].gender === mutatedObject.gender && mutatedData[index].height === mutatedObject.height) {
        chosenIndex = index
        break
      }
    }
    if (chosenIndex > -1) {
      mutatedData[chosenIndex].weight = parseFloat(mutatedObject.weight)
      let newOptions = this.state.options
      newOptions.data = mutatedData
      this.setState({options: newOptions})
    }
  }

  render() {
    let switches = []
    let dataTable
    for (let option of this.props.optionList){
      if (option.optionType === "scatterData") {
        dataTable = (
          <ScatterKeyValueTable data={this.state.options.data} updateShoeData={this.updateScatterShoeData.bind(this)}
            updateWeightData={this.updateScatterWeightData.bind(this)} />
        )
      }
      else if (option.optionType === "data"){
        dataTable = (
          <DataTable data={this.state.options.data} updateData={this.updateDataGen(option.keyList, option.weightKey).bind(this)}
            keyList={option.keyList} weightKey={option.weightKey}/>
        )
      }
      if (option.optionType === "bool") {
        switches.push(<BoolSwitch key={option.optionName} name={option.optionName}
          switch={this.state.options[option.optionName]}
          updateFunc={this.updateFuncGen(option.optionName).bind(this)}/>)
      } else if (option.optionType === "field") {
        switches.push(<FieldSwitch key={option.optionName} name={option.optionName}
          switch={this.state.options[option.optionName]} input={option.input}
          updateFunc={this.updateFuncGen(option.optionName).bind(this)}/>)
      } else if (option.optionType === "state") {
        switches.push(<StateSwitch key={option.optionName} name={option.optionName}
          switch={this.state.options[option.optionName]} states={option.states}
          updateFunc={this.updateFuncGen(option.optionName).bind(this)}/>)
      } else if (option.optionType === "hidden") {
        switches.push(<NonSwitch key={option.optionName} name={option.optionName}
          switch={this.state.options[option.optionName]} />)
      }
    }

    let newChild = React.cloneElement(this.props.children, this.state.options)

    let style = {
      chart: {
        width: "60%",
        display: "inline-block",
        verticalAlign: "top",
      },
      optionsData: {
        minWidth: "30%",
        display: "inline-block",
        verticalAlign: "top",
        backgroundColor: "rgba(127, 146, 152, 0.1)",
        boxShadow: "10px 10px 5px #0c3c4a",
      }
    }
    return (
      <div>
        <div style={style.chart}>
          {newChild}
        </div>
        <div style={style.optionsData}>
          <Toggle handleData={this.toggleData.bind(this)} handleOptions={this.toggleOptions.bind(this)} active={this.state.active}/>
          {this.state.active == "options" &&
            <OptionsPane>
              {switches}
            </OptionsPane>
          }
          {this.state.active == "data" &&
            <div>
              {dataTable}
            </div>
          }
        </div>
      </div>
    )
  }

}

ComponentContainer.propTypes = {
  optionList: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired
}

export default ComponentContainer
