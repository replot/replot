import React from "react"
import PropTypes from "prop-types"
import OptionsPane from "./OptionsPane.jsx"
import FieldSwitch from "./FieldSwitch.jsx"
import BoolSwitch from "./BoolSwitch.jsx"
import StateSwitch from "./StateSwitch.jsx"
import NonSwitch from "./NonSwitch.jsx"


class ComponentContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      options: {}
    }
    for (let option of this.props.optionList){
      this.state.options[option.optionName] = option.initialValue
    }
  }

  updateFuncGen(name){
    let updateFunc = function (newSetting) {
      let newOptions = this.state.options
      newOptions[name] = newSetting
      this.setState({options: newOptions})
    }
    return updateFunc
  }

  render() {
    let switches = []
    for (let option of this.props.optionList){
      if (option.optionType === "bool") {
        switches.push(<BoolSwitch name={option.optionName}
          switch={this.state.options[option.optionName]}
          updateFunc={this.updateFuncGen(option.optionName).bind(this)}/>)
      } else if (option.optionType === "field") {
        switches.push(<FieldSwitch name={option.optionName}
          switch={this.state.options[option.optionName]} input={option.input}
          updateFunc={this.updateFuncGen(option.optionName).bind(this)}/>)
      } else if (option.optionType === "state") {
        switches.push(<StateSwitch name={option.optionName}
          switch={this.state.options[option.optionName]} states={option.states}
          updateFunc={this.updateFuncGen(option.optionName).bind(this)}/>)
      } else if (option.optionType === "hidden") {
        switches.push(<NonSwitch name={option.optionName}
          switch={this.state.options[option.optionName]} />)
      }
    }

    let newChild = React.cloneElement(this.props.children, this.state.options)

    return (
      <div>
        {newChild}
        <OptionsPane>
          {switches}
        </OptionsPane>
      </div>
    )
  }

}

ComponentContainer.propTypes = {
  options: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired
}

export default ComponentContainer
