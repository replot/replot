import React from "react"
import SectionContainer from "../components/SectionContainer.jsx"
import TreeExample from "../components/examples/TreeExample.jsx"
import BarExample from "../components/examples/BarExample.jsx"
import GroupedExample from "../components/examples/GroupedExample.jsx"
import LineExample from "../components/examples/LineExample.jsx"
import ScatterExample from "../components/examples/ScatterExample.jsx"
import NetworkExample from "../components/examples/NetworkExample.jsx"
import MapExample from "../components/examples/MapExample.jsx"

class ExamplesSection extends React.Component {

  render() {

    // <MapExample />

    return(
      <SectionContainer>
        <TreeExample />
        <BarExample />
        <GroupedExample />
        <LineExample />
        <ScatterExample />
        <NetworkExample />
      </SectionContainer>
    )
  }

}


export default ExamplesSection
