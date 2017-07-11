import React from "react"
import PropTypes from "prop-types"
import OptionsPane from "./OptionsPane.jsx"


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

  render() {
    var newChild = React.cloneElement(this.props.children, this.state.options)

    return (
      <div>
        {newChild}
        <OptionsPane>

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
