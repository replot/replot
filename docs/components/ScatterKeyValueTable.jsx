import React from "react"


class ScatterKeyValueRow extends React.Component {

  changeHandlerShoe(e) {
    this.props.updateShoeData({
      gender: this.props.gender,
      height: this.props.height,
      weight: this.props.weight,
      shoeSize: e.target.value,
    })
  }

  changeHandlerWeight(e) {
    this.props.updateWeightData({
      gender: this.props.gender,
      height: this.props.height,
      weight: e.target.value,
      shoeSize: e.target.shoeSize,
    })
  }

  render() {
    const style = {
      cell: {
        minWidth: "100px",
        color: "white",
        fontSize: "0.8rem"
      }
    }

    return(
      <tr>
        <td style={style.cell}>{this.props.height}</td>
          <input style={{width:"50%"}} type="text" value={parseFloat(this.props.weight) || ""}
          onChange={this.changeHandlerWeight.bind(this)} />
        <td style={style.cell}>
          <input style={{width:"50%"}} type="text" value={parseFloat(this.props.shoeSize) || ""}
          onChange={this.changeHandlerShoe.bind(this)} />
        </td>
      </tr>
    )
  }

}

class ScatterKeyValueTable extends React.Component {

  render() {
    const style = {
      container: {
        width: "30%",
        display:"inline-block",
        verticalAlign: "top",
        padding: "20px 40px",
        color: "white"
      },
      cell: {
        minWidth: "100px",
        color: "white",
        fontSize: "1.2rem",
        borderBottom: "thin solid #ffffff"
      }
    }
    let rows = []
    rows.push(
      <tr key="labels">
        <td style={style.cell}> Height </td>
        <td style={style.cell}> Weight </td>
        <td style={style.cell}> Shoe Size </td>
      </tr>
    )
    for (let dataPoint of this.props.data) {
      rows.push(
        <ScatterKeyValueRow key={dataPoint.gender.concat(dataPoint.weight)}
          gender={dataPoint.gender} height={dataPoint.height}
          weight={dataPoint.weight} shoeSize={dataPoint.shoeSize}
          updateShoeData={this.props.updateShoeData.bind(this)}
          updateWeightData={this.props.updateWeightData.bind(this)} />
      )
    }

    return (
      <div className="container" style={style.container}>
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }

}

export default ScatterKeyValueTable
