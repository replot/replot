import React from "react"


class ScatterKeyValueRow extends React.Component {

  changeHandler(e) {
    this.props.updateData({
      continent: this.props.continent,
      population: this.props.population,
      gdp: e.target.value
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
      <tr key={this.props.continent.concat(this.props.population)}>
        <td style={style.cell}>{this.props.country} </td>
        <td style={style.cell}>{this.props.population}</td>
        <td style={style.cell}>
          <input type="text" value={parseFloat(this.props.gdp)}
            onChange={this.changeHandler.bind(this)} />
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
        <td style={style.cell}> Country </td>
        <td style={style.cell}> Population </td>
        <td style={style.cell}> GDP </td>
      </tr>
    )
    for (let dataPoint of this.props.data) {
      rows.push(
        <ScatterKeyValueRow key={dataPoint.continent.concat(dataPoint.population)}
          continent={dataPoint.continent} country={dataPoint.country}
          population={dataPoint.population} gdp={dataPoint.gdp}
          updateData={this.props.updateData.bind(this)} />
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
