import React from "react"
import NetworkChart from "replot-network"


class NetworkExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      nodes: [
        {id: 1, name: "One", age: 10, country: "India"},
        {id: 2, name: "Two", age: 30, country: "India"},
        {id: 3, name: "Three", age: 20, country: "India"},
        {id: 4, name: "Four", age: 50, country: "United States"},
        {id: 5, name: "Five", age: 40, country: "United States"},
        {id: 6, name: "Six", age: 20, country: "China"},
        {id: 7, name: "Seven", age: 10, country: "China"}
      ],
      links: [
        {parent: 2, child: 1},
        {parent: 2, child: 7},
        {parent: 4, child: 3},
        {parent: 4, child: 2},
        {parent: 5, child: 3},
        {parent: 5, child: 6}
      ]
    }
  }

  render() {
    return(
      <div className="container" style={{padding: "80px 50px"}}>
        <h1 style={{textAlign: "left", color: "white"}}> Network Chart </h1>
        <h1 style={{textAlign: "left", color: "white"}}> Coming Soon</h1>
        <div style={{width:"70%", display:"none"}}>
          <NetworkChart nodes={this.state.nodes} links={this.state.links}
            labelKey="name" labelColor="white"
            groupKey="country" lineColor="white"/>
        </div>
      </div>
    )
  }

}


export default NetworkExample
