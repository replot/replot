import React from "react"
import TreeMapManager from "replot-treemap"
import TreeDataTable from "../TreeDataTable.jsx"
import ComponentContainer from "../CompContainer/ComponentContainer.jsx"


class TreeExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      treeData: [
        {population: 650, country: "China", state: "Beijing", city: "Miyun"},
        {population: 902, country: "China", state: "Beijing", city: "Tongzhou"},
        {population: 120, country: "China", state: "Beijing", city: "Yizhuang"},
        {population: 800, country: "United States", state: "California", city: "San Francisco"},
        {population: 1002, country: "United States", state: "California", city: "Los Angeles"},
        {population: 150, country: "United States", state: "Vermont", city: "Newport"},
        {population: 202, country: "United States", state: "Vermont", city: "Montpelier"},
        {population: 112, country: "Canada", state: "Ontario", city: "Kingston"},
        {population: 80, country: "Canada", state: "Ontario", city: "Barrie"},
      ],
      optionList: [
        {optionName: "weightKey", optionType: "hidden", initialValue: "population"},
        {optionName: "keyOrder", optionType: "hidden", initialValue: ["country", "state", "city"]},
        {optionName: "width", optionType: "field", initialValue: 800},
        {optionName: "height", optionType: "field", initialValue: 400},
        {optionName: "initialAnimation", optionType: "bool", initialValue: true},
        {optionName: "displayPercentages", optionType: "bool", initialValue: true}
      ]
    }
  }

  updateTreeData(mutatedObject) {
    let mutatedData = JSON.parse(JSON.stringify(this.state.treeData))
    let chosenIndex = -1
    for (let index=0; index < mutatedData.length; index++) {
      if (mutatedData[index].city === mutatedObject.city) {
        chosenIndex = index
        break
      }
    }
    if (chosenIndex > -1) {
      mutatedData[chosenIndex].population = parseInt(mutatedObject.population)
      this.setState({treeData: mutatedData})
    }
  }

  // <div style={{width:"70%", display:"inline-block"}}>
  //   <TreeMap data={this.state.treeData} weightKey="population"
  //     titleKey="country" keyOrder={this.state.keyOrder}
  //     initialAnimation={this.state.initialAnimation}
  //     displayPercentages={this.state.percentDisplay}
  //     width={this.state.width} height={this.state.height}/>
  // </div>
  // <OptionsPane>
  //   <BoolSwitch title="Initial Animation:" switch={this.state.initialAnimation} updateFunc={this.updateInitialAnimation.bind(this)} />
  //   <BoolSwitch title="Display percentages:" switch={this.state.percentDisplay} updateFunc={this.updatePercentDisplay.bind(this)} />
  //   <FieldSwitch title="Width:" switch={this.state.width} updateFunc={this.updateWidth.bind(this)} />
  //   <FieldSwitch title="Height:" switch={this.state.height} updateFunc={this.updateHeight.bind(this)} />
  // </OptionsPane>

  render() {
    return(
      <div className="container" style={{padding: "80px 50px"}}>
        <h1 style={{textAlign: "left", color: "white"}}> Treemap </h1>
        <TreeDataTable style={{float:"right"}} data={this.state.treeData} updateData={this.updateTreeData.bind(this)} />
        <ComponentContainer optionList={this.state.optionList}>
          <TreeMapManager data={this.state.treeData} />
        </ComponentContainer>
      </div>
    )
  }

}


export default TreeExample
