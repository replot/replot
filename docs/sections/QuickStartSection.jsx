import React from "react"
import SectionContainer from "../components/SectionContainer.jsx"
import CodeBlock from "../components/CodeBlock.jsx"

const exampleCode = `import Treemap from ‘replot’

class Demo extends React.Component {
  render() {
    let populations = {
      {country: "China", population: 1388232693},
      {country: "India", population: 1342512706},
      {country: "USA", population: 326474013},
    }

    return(
      <TreeMap data={populations} titleKey="country"
        weightKey="population" />
    )
  }
}`

class QuickStartSection extends React.Component {

  render() {
    const style = {
      heading: {
        textAlign: "center",
      }
    }

    return(
      <SectionContainer>
        <h3 style={style.heading}>
          Let's use Replot
        </h3>
        <CodeBlock palette={this.props.palette}>
          npm install replot
        </CodeBlock>
        <CodeBlock palette={this.props.palette}>
          {exampleCode}
        </CodeBlock>
      </SectionContainer>
    )
  }

}


export default QuickStartSection
