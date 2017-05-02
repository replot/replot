import React from "react"


class SectionContainer extends React.Component {

  render() {
    const style = {
      minHeight: "100vh",
      padding: "50px",
    }

    return(
      <div style={style}>
        {this.props.children}
      </div>
    )
  }

}


export default SectionContainer
