import React from "react"


class DataRow extends React.Component {

  changeHandler(e) {
    let newData = {}
    for (let key of this.props.keyList) {
      newData[key] = this.props.data[key]
    }
    newData[this.props.weightKey] = e.target.value || 0
    this.props.updateData(newData)
  }

  render() {
    const style = {
      cell: {
        minWidth: "100px",
        color: "white",
        fontSize: "0.8rem"
      }
    }

    let columns = []
    for (let key of this.props.keyList) {
      columns.push(
        <td key={this.props.data[key] + this.props.row}
          style={style.cell}> {this.props.data[key]} </td>
      )
    }
    columns.push(
      <td key={this.props.weightKey + this.props.row} style={style.cell}>
        <input type="text" value={parseInt(this.props.data[this.props.weightKey])}
          onChange={this.changeHandler.bind(this)}/>
      </td>
    )

    return(
      <tr>
        {columns}
      </tr>
    )

  }
}

class DataTable extends React.Component {

  render() {
    const style = {
      container: {
        float: "right",
        width:"30%",
        display:"inline-block",
        verticalAlign:"top",
        padding:"20px 40px",
        color:"white"
      },
      cell: {
        minWidth: "100px",
        color: "white",
        fontSize: "1.2rem",
        borderBottom: "thin solid #ffffff"
      }
    }

    let rowCount = 0
    let rows = []

    let headings = []
    for (let key of this.props.keyList){
      headings.push(
        <td key={rowCount + key} style={style.cell}> {key.charAt(0).toUpperCase() + key.slice(1)} </td>
      )
    }
    headings.push(
      <td key={rowCount + this.props.weightKey} style={style.cell}> {this.props.weightKey.charAt(0).toUpperCase() + this.props.weightKey.slice(1)} </td>
    )
    rows.push(
      <tr key={"row" + rowCount}>
        {headings}
      </tr>
    )

    for (let dataPoint of this.props.data) {
      rowCount++
      rows.push(
        <DataRow key={"row" + rowCount} data={dataPoint}
          keyList={this.props.keyList} weightKey={this.props.weightKey} row={rowCount}
          updateData={this.props.updateData}/>
      )
    }

    return (
      <div style={style.container}>
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}

export default DataTable
