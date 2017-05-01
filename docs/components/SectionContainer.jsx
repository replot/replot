import React from "react"


class SectionContainer extends React.Component {

  constructor(props) {
    super(props)
    this.displayName = "SectionContainer"
  }

  render() {
    const style = {
      minHeight: "100vh",
    }

    return(
      <div style={style}>
        {this.props.children}
      </div>
    )
  }

}


export default SectionContainer
