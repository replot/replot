import React from "react"
import PropTypes from "prop-types"
import DataTable from "../DataTable.jsx"
import ScatterKeyValueTable from "../ScatterKeyValueTable.jsx"
import OptionsPane from "./OptionsPane.jsx"
import FieldSwitch from "./FieldSwitch.jsx"
import BoolSwitch from "./BoolSwitch.jsx"
import StateSwitch from "./StateSwitch.jsx"
import NonSwitch from "./NonSwitch.jsx"
import colors from "../../colors"

class Toggle extends React.Component {

  render() {
    let dataLabelColor
    let optionsLabelColor
    if (this.props.active == "data") {
      dataLabelColor = colors[this.props.palette].mainColor
      optionsLabelColor = colors[this.props.palette].darkAccent
    } else {
      dataLabelColor = colors[this.props.palette].darkAccent
      optionsLabelColor = colors[this.props.palette].mainColor
    }
    let style = {
      dataLabel: {
        fontSize: "1.25rem",
        width: "50%",
        display: "inline-block",
        textAlign: "center",
        paddingTop: "10px",
        paddingBottom: "15px",
        backgroundColor: colors[this.props.palette].optionsLabelBg,
        color: dataLabelColor,
      },
      optionsLabel: {
        fontSize: "1.25rem",
        width: "50%",
        display: "inline-block",
        textAlign: "center",
        paddingTop: "10px",
        paddingBottom: "15px",
        backgroundColor: colors[this.props.palette].optionsLabelBg,
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
    for (let option of this.props.colorOptions){
      this.state.options[option.optionName] = option.initialValue
    }
  }

  componentWillReceiveProps(nextProps) {
    let newOptions = {}
    for (let option of nextProps.optionList){
      newOptions[option.optionName] = option.initialValue
    }
    for (let option of nextProps.colorOptions){
      newOptions[option.optionName] = option.initialValue
    }
    this.setState({
      options: newOptions
    })
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
          <ScatterKeyValueTable data={this.state.options.data}
            updateShoeData={this.updateScatterShoeData.bind(this)}
            updateWeightData={this.updateScatterWeightData.bind(this)}
            palette={this.props.palette}/>
        )
      }
      else if (option.optionType === "data"){
        dataTable = (
          <DataTable data={this.state.options.data}
            updateData={this.updateDataGen(option.keyList, option.weightKey).bind(this)}
            keyList={option.keyList} weightKey={option.weightKey}
            palette={this.props.palette}/>
        )
      }
      if (option.optionType === "bool") {
        switches.push(<BoolSwitch key={option.optionName} name={option.name}
          switch={this.state.options[option.optionName]}
          updateFunc={this.updateFuncGen(option.optionName).bind(this)}
          palette={this.props.palette}/>)
      } else if (option.optionType === "field") {
        switches.push(<FieldSwitch key={option.optionName} name={option.name}
          switch={this.state.options[option.optionName]} input={option.input}
          updateFunc={this.updateFuncGen(option.optionName).bind(this)}
          palette={this.props.palette}/>)
      } else if (option.optionType === "state") {
        switches.push(<StateSwitch key={option.optionName} name={option.name}
          switch={this.state.options[option.optionName]} states={option.states}
          updateFunc={this.updateFuncGen(option.optionName).bind(this)}
          palette={this.props.palette}/>)
      } else if (option.optionType === "hidden") {
        switches.push(<NonSwitch key={option.optionName} name={option.name}
          switch={this.state.options[option.optionName]}
          palette={this.props.palette}/>)
      }
    }
    for (let option of this.props.colorOptions){
      if (option.optionType === "field") {
        switches.push(<FieldSwitch key={option.optionName} name={option.name}
          switch={this.state.options[option.optionName]} input={option.input}
          updateFunc={this.updateFuncGen(option.optionName).bind(this)}
          palette={this.props.palette}/>)
      }
    }

    let newChild = React.cloneElement(this.props.children, this.state.options)

    let style = {
      chart: {
        width: "60%",
        display: "inline-block",
        verticalAlign: "top",
      }
    }
    return (
      <div>
        <div style={style.chart}>
          {newChild}
        </div>
        <div style={this.props.optionsData}>
          <Toggle handleData={this.toggleData.bind(this)}
            handleOptions={this.toggleOptions.bind(this)}
            active={this.state.active}
            palette={this.props.palette}/>
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

ComponentContainer.defaultProps = {
  optionsData: {
    width: "38%",
    display: "inline-block",
    verticalAlign: "top",
  },
  colorOptions: []
}

ComponentContainer.propTypes = {
  optionList: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired
}

export default ComponentContainer
