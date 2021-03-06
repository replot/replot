import React from "react"
import TreeMap from "replot-treemap"
import {ComponentContainer, ColorTheme} from "replot-helpers"


class TreeExample extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      optionList: [
        {optionName: "data", optionType: "data", keyList: ["country", "university"], weightKey: "size", initialValue: [
      {"university":"Massachusetts Institute of Technology","size":28,"country":"United States"},
        {"university":"University of Pennsylvania","size":1,"country":"United States"},
        {"university":"Boston University","size":2,"country":"United States"},
        {"university":"Università degli Studi di Trento","size":2,"country":"Italy"},
        {"university":"Fondazione Bruno Kessler","size":4,"country":"Italy"},
        {"university":"National ICT Australia ","size":1,"country":"Australia"},
        {"university":"Ben Gurion University of the Negev","size":2,"country":"Israel"},
        {"university":"University of Maryl&","size":3},
        {"university":"University of Texas Dallas","size":1,"country":"United States"},
        {"university":"University of California Irvine","size":2,"country":"United States"},
        {"university":"Eidgenössische Technische Hochschule ETH Zürich / Swiss Federal Institute of Technology Zurich ","size":4,"country":"Switzerland"},
        {"university":"Princeton University","size":3,"country":"United States"},
        {"university":"University of California Berkeley","size":3,"country":"United States"},
        {"university":"Georgia Institute of Technology","size":4,"country":"United States"},
        {"university":"University at Buffalo","size":1,"country":"United States"},
        {"university":"Harvard University","size":4,"country":"United States"},
        {"university":"University of Michigan","size":2,"country":"United States"},
        {"university":"University of California San Diego","size":3,"country":"United States"},
        {"university":"Yale University","size":2,"country":"United States"},
        {"university":"Columbia University New York","size":1,"country":"United States"},
        {"university":"Cornell University","size":4,"country":"United States"},
        {"university":"Northwestern University","size":1,"country":"United States"},
        {"university":"Northeastern University","size":2,"country":"United States"},
        {"university":"Imperial College London","size":1,"country":"United Kingdom"},
        {"university":"University of Twente / Universiteit Twente","size":1,"country":"Netherlands"},
        {"university":"INCAE Business School","size":1,"country":"Costa Rica"},
        {"university":"Queen Mary University of London","size":1,"country":"United Kingdom"},
        {"university":"University of Cambridge","size":1,"country":"United Kingdom"},
        {"university":"Rutgers The State University of New Jersey","size":1,"country":"United States"},
        {"university":"Goldsmiths University of London","size":1,"country":"United Kingdom"},
        {"university":"Telefónica Investigación y Desarrollo","size":1,"country":"Spain"},
        {"university":"IDIAP Research Institute","size":2,"country":"Switzerland"},
        {"university":"New York University","size":1,"country":"United States"},
        {"university":"University of Southern California","size":1,"country":"United States"},
        {"university":"Royal Institute of Technology / Kungliga Tekniska Högskolan","size":1,"country":"Sweden"},
        {"university":"Michigan State University","size":1,"country":"United States"},
        {"university":"Université Laval","size":1,"country":"Canada"},
        {"university":"University of Colorado Boulder","size":2,"country":"United States"},
        {"university":"University of California Santa Barbara","size":1,"country":"United States"},
        {"university":"Google","size":2,"country":"United States"},
        {"university":"University College London","size":1,"country":"United Kingdom"},
        {"university":"University of Amsterdam / Universiteit van Amsterdam","size":1,"country":"Netherlands"},
        {"university":"University of British Columbia","size":2,"country":"Canada"},
        {"university":"Carnegie Mellon University","size":3,"country":"United States"},
        {"university":"University of Toronto","size":1,"country":"Canada"},
        {"university":"Max Planck Gesellschaft","size":1,"country":"Germany"},
        {"university":"Broad Institute of MIT & Harvard","size":1},
        {"university":"University of Glasgow","size":1,"country":"United Kingdom"},
        {"university":"Technion Israel Institute of Technology","size":1,"country":"Israel"},
        {"university":"Technical University of Denmark / Danmarks Tekniske Universitet","size":4,"country":"Denmark"},
        {"university":"Purdue University","size":1,"country":"United States"},
        {"university":"University of Tokyo / 東京大学","size":1,"country":"Japan"},
        {"university":"École Normale Supérieure Paris","size":1,"country":"France"},
        {"university":"University of South Florida","size":1,"country":"United States"},
        {"university":"University of Notre Dame","size":2,"country":"United States"},
        {"university":"Institut National de Recherche en Informatique et en Automatique","size":3,"country":"France"},
        {"university":"Universität zu Köln","size":1,"country":"Germany"},
        {"university":"University of Minnesota","size":1,"country":"United States"},
        {"university":"University of Colorado Denver","size":1,"country":"United States"},
        {"university":"University of Delaware","size":1,"country":"United States"},
        {"university":"Bio-Rad Laboratories","size":1,"country":"United States"},
        {"university":"Rice University","size":1,"country":"United States"},
        {"university":"University of California Los Angeles UCLA","size":1,"country":"United States"},
        {"university":"Tyndall National Institute","size":1,"country":"Ireland"},
        {"university":"Universität Otto Friedrich Universität Bamberg","size":2,"country":"Germany"},
        {"university":"Universitat Pompeu Fabra","size":1,"country":"Spain"},
        {"university":"International Institute of Information Technology Bangalore","size":1,"country":"India"},
        {"university":"Universidad de Alcalá","size":1,"country":"Spain"},
        {"university":"Boğaziçi University","size":1,"country":"Turkey"},
        {"university":"Johann Wolfgang Goethe Universität Frankfurt am Main","size":1,"country":"Germany"},
        {"university":"FR71 Institut Informatique et Mathématiques Appliquées de Grenoble","size":1,"country":"France"},
        {"university":"Australian National University","size":2,"country":"Australia"},
        {"university":"University of Oxford","size":1,"country":"United Kingdom"},
        {"university":"Microsoft","size":1,"country":"United States"},
        {"university":"École Polytechnique Fédérale de Lausanne","size":1,"country":"Switzerland"},
        {"university":"Stanford University","size":1,"country":"United States"},
        {"university":"Indiana University","size":1,"country":"United States"},
        {"university":"Institute of Information Science & Technologies / Istituto di Scienza e Tecnologie dell'Informazione Alessandro Faedo","size":1},
        {"university":"German Research Center for Artificial Intelligence","size":1,"country":"Germany"},
        {"university":"Università di Pisa (Università degli Studi di Pisa)","size":1,"country":"Italy"},
        {"university":"Union College Schenectady NY","size":1,"country":"United States"},
        {"university":"Universidad Carlos III de Madrid","size":1,"country":"Spain"},
        {"university":"Carleton University","size":1,"country":"Canada"},
        {"university":"Dartmouth College","size":1,"country":"United States"},
        {"university":"University of Illinois Urbana Champaign","size":1,"country":"United States"},
      {"university":"University of Texas Austin","size":1,"country":"United States"}]},
        {optionName: "initialAnimation", name: "Initial Animation", optionType: "bool", initialValue: true},
        {optionName: "displayPercentages", name: "Percentages", optionType: "bool", initialValue: true},
        {optionName: "width", name: "Width", optionType: "field", input: "string", initialValue: "98%"},
        {optionName: "height", name: "Height", optionType: "field", input: "number", initialValue: 420},
        {optionName: "otherThreshold", name: "Other Threshold", optionType: "field", input: "number", initialValue: .025},
        {optionName: "tooltip", name: "Tooltip", optionType: "bool", initialValue: false},
        {optionName: "tooltipColor", name: "Tooltip Color", optionType: "state", states:["dark","light"], initialValue: "dark"},
        {optionName: "weightKey", name: "Weight", optionType: "hidden", initialValue: "size"},
        {optionName: "keyOrder", name: "Key Order", optionType: "hidden", initialValue: ["country", "university"]},
        {optionName: "titleScale", name: "Title Scale", optionType: "hidden", initialValue: 2},
      ],
      keyOrder: ["country", "university"],
    }
  }

  render() {
    return(
      <ComponentContainer optionList={this.state.optionList}
        palette={this.props.palette}>
        <TreeMap data={this.state.optionList[0].initialValue}
          colorPalette={ColorTheme[this.props.palette].treeMapPalette}
          grayscalePalette={ColorTheme[this.props.palette].treeMapPalette}/>
      </ComponentContainer>
    )
  }

}


export default TreeExample
