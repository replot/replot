import React from "react"
import NetworkChart from "replot-network"
import ComponentContainer from "../CompContainer/ComponentContainer.jsx"
import colors from "../../colors"


class NetworkExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      nodes: [
        {id: "Alice", group: "A"},
        {id: "Angela", group: "A"},
        {id: "Anthony", group: "A"},
        {id: "Allison", group: "A"},
        {id: "Andy", group: "A"},
        {id: "Aaron", group: "A"},
        {id: "Andrew", group: "A"},
        {id: "Bob", group: "B"},
        {id: "Beth", group: "B"},
        {id: "Bella", group: "B"},
        {id: "David", group: "D"},
        {id: "Daniel", group: "D"},
        {id: "Denny", group: "D"},
        {id: "Dylan", group: "D"},
        {id: "Daisy", group: "D"},
        {id: "Diana", group: "D"},
        {id: "Ella", group: "E"},
        {id: "Elizabeth", group: "E"},
        {id: "Evan", group: "E"},
        {id: "Ethan", group: "E"},
        {id: "Emily", group: "E"},
        {id: "Erica", group: "E"},
        {id: "Emma", group: "E"},
        {id: "Eric", group: "E"},
        {id: "Edward", group: "E"},
        {id: "Harry", group: "H"},
        {id: "Helen", group: "H"},
        {id: "Henry", group: "H"},
        {id: "Hugo", group: "H"},
        {id: "Michael", group: "M"},
        {id: "Michelle", group: "M"},
        {id: "Mary", group: "M"},
        {id: "Matt", group: "M"},
        {id: "Morgan", group: "M"},
        {id: "Mark", group: "M"},
        {id: "Martin", group: "M"},
        {id: "Mason", group: "M"},
        {id: "Melanie", group: "M"},
        {id: "Mackenzie", group: "M"},
        {id: "Noah", group: "N"},
        {id: "Nicole", group: "N"},
        {id: "Nick", group: "N"},
        {id: "Naomi", group: "N"},
        {id: "Nina", group: "N"},
        {id: "Nathan", group: "N"},
        {id: "Neil", group: "N"},
        {id: "Nicholas", group: "N"},
      ],
      links: [
        {parent: "Alice", child: "Angela"},
        {parent: "Alice", child: "Ella"},
        {parent: "Alice", child: "Mary"},
        {parent: "Alice", child: "Aaron"},
        {parent: "Alice", child: "Allison"},
        {parent: "Alice", child: "Andy"},
        {parent: "Alice", child: "Andrew"},
        {parent: "Alice", child: "Anthony"},
        {parent: "Andrew", child: "Anthony"},
        {parent: "Andy", child: "Anthony"},
        {parent: "Aaron", child: "Anthony"},
        {parent: "Allison", child: "Anthony"},
        {parent: "Allison", child: "Andy"},
        {parent: "Angela", child: "Anthony"},
        {parent: "Angela", child: "Helen"},
        {parent: "Angela", child: "Mary"},
        {parent: "Alice", child: "Helen"},
        {parent: "Alice", child: "Dylan"},
        {parent: "Aaron", child: "Andy"},
        {parent: "Andrew", child: "Allison"},
        {parent: "Aaron", child: "Allison"},
        {parent: "Aaron", child: "Angela"},
        {parent: "Daniel", child: "Helen"},
        {parent: "Evan", child: "Ella"},
        {parent: "Evan", child: "Elizabeth"},
        {parent: "Ethan", child: "Emma"},
        {parent: "Ethan", child: "Evan"},
        {parent: "Ethan", child: "Eric"},
        {parent: "Ethan", child: "Ella"},
        {parent: "Evan", child: "Emily"},
        {parent: "Evan", child: "Erica"},
        {parent: "Ella", child: "Eric"},
        {parent: "Evan", child: "Edward"},
        {parent: "Ella", child: "Emma"},
        {parent: "Evan", child: "Emma"},
        {parent: "Evan", child: "Eric"},
        {parent: "Eric", child: "Emma"},
        {parent: "Daniel", child: "Emma"},
        {parent: "Daniel", child: "Eric"},
        {parent: "Daniel", child: "Evan"},
        {parent: "Bob", child: "Alice"},
        {parent: "Bob", child: "Beth"},
        {parent: "Bob", child: "Bella"},
        {parent: "Daniel", child: "David"},
        {parent: "Daniel", child: "Dylan"},
        {parent: "Daniel", child: "Denny"},
        {parent: "David", child: "Daisy"},
        {parent: "Daniel", child: "Diana"},
        {parent: "David", child: "Denny"},
        {parent: "Helen", child: "Harry"},
        {parent: "Helen", child: "Henry"},
        {parent: "Helen", child: "Hugo"},
        {parent: "Helen", child: "Dylan"},
        {parent: "Helen", child: "Morgan"},
        {parent: "Daniel", child: "Alice"},
        {parent: "Daniel", child: "Ella"},
        {parent: "Daniel", child: "Mary"},
        {parent: "Dylan", child: "Diana"},
        {parent: "Dylan", child: "Denny"},
        {parent: "Diana", child: "Denny"},
        {parent: "Diana", child: "Eric"},
        {parent: "David", child: "Alice"},
        {parent: "Matt", child: "Mary"},
        {parent: "Michael", child: "Michelle"},
        {parent: "Michelle", child: "Mary"},
        {parent: "Michelle", child: "Emma"},
        {parent: "Michael", child: "Morgan"},
        {parent: "Michael", child: "Mark"},
        {parent: "Michael", child: "Mary"},
        {parent: "Mary", child: "David"},
        {parent: "Mark", child: "Morgan"},
        {parent: "Mary", child: "Morgan"},
        {parent: "Mark", child: "Michelle"},
        {parent: "Morgan", child: "Michelle"},
        {parent: "Morgan", child: "Matt"},
        {parent: "Michelle", child: "Matt"},
        {parent: "Mark", child: "Mary"},
        {parent: "Mark", child: "Matt"},
        {parent: "Mary", child: "Allison"},
        {parent: "Mark", child: "Martin"},
        {parent: "Mark", child: "Mason"},
        {parent: "Mary", child: "Melanie"},
        {parent: "Morgan", child: "Melanie"},
        {parent: "Michelle", child: "Melanie"},
        {parent: "Mark", child: "Melanie"},
        {parent: "Mackenzie", child: "Melanie"},
        {parent: "Mackenzie", child: "Michelle"},
        {parent: "Mackenzie", child: "Mark"},
        {parent: "Mackenzie", child: "Matt"},
        {parent: "Mary", child: "Ella"},
        {parent: "Mary", child: "Aaron"},
        {parent: "Mary", child: "Denny"},
        {parent: "Michelle", child: "Denny"},
        {parent: "Mary", child: "Bob"},
        {parent: "Noah", child: "Nicole"},
        {parent: "Noah", child: "Nathan"},
        {parent: "Noah", child: "Nick"},
        {parent: "Noah", child: "Naomi"},
        {parent: "Noah", child: "Mary"},
        {parent: "Noah", child: "Daniel"},
        {parent: "Noah", child: "Nicholas"},
        {parent: "Noah", child: "Neil"},
        {parent: "Noah", child: "Alice"},
        {parent: "Noah", child: "David"},
        {parent: "Neil", child: "Nina"},
        {parent: "Neil", child: "Daisy"},
        {parent: "Neil", child: "Diana"},
        {parent: "Neil", child: "David"},
        {parent: "Nina", child: "David"},
        {parent: "Nina", child: "Daniel"},
      ],
      optionList: [
        {optionName: "width", name: "Width", optionType: "field", input: "number", initialValue: 650},
        {optionName: "height", name: "Height", optionType: "field", input: "number", initialValue: 450},
        {optionName: "labelKey", name: "Label Key", optionType: "hidden", initialValue: "name"},
        {optionName: "groupKey", name: "Group Key", optionType: "hidden", initialValue: "group"},
      ]
    }
  }

  render() {
    let colorOptions = [
      {optionName: "labelColor", name: "Label Color", optionType: "other", input: "string", initialValue: colors[this.props.palette].axisColor},
      {optionName: "lineColor", name : "Line Color", optionType: "field", input: "string", initialValue: colors[this.props.palette].axisColor},
    ]
    let graphStyle = [
      {optionName: "pointRadius", name: "Node Radius", optionType: "field", input: "number", initialValue: 5},
      {optionName: "lineWidth", name: "Edge Width", optionType: "field", input: "number", initialValue: 1},
      {optionName: "lineColor", name: "Edge Color", optionType: "field", input: "string", initialValue: "#9b9b9b"},
      {optionName: "lineOpacity", name: "Edge Opacity", optionType: "field", input: "number", initialValue: 0.25},
      {optionName: "labelColor", name: "Label Color", optionType: "field", input: "string", initialValue: "#1b1b1b"},
    ]
    let style = {
      title: {
        fontSize: "45px",
        textAlign: "center",
        color: colors[this.props.palette].body.text,
        padding: 15,
      },
      container: {
        padding: "80px 0px",
      },
    }

    return(
      <div className="container" style={style.container}>
        <h1 style={style.title}> Network Chart </h1>
        <ComponentContainer optionList={this.state.optionList}
          optionsData={style.optionsData}
          palette={this.props.palette}
          colorOptions={colorOptions}
          graphStyle={graphStyle}>
          <NetworkChart
            nodes={this.state.nodes}
            links={this.state.links}
            width="100%"
          />
        </ComponentContainer>
      </div>
    )
  }

}

export default NetworkExample
