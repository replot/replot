import React from "react"
import BarChart from "replot-bar"


const basicBarCode = `<BarChart data={data} xKey="country" yKey="population"
  xTitle="Country" yTitle="Population"
  axisColor="#FFF" tickColor="#FFF" gridColor="#FFF"
  labelColor="#FFF" graphTitleColor="#FFF"
  width="100%" height={450}
/>`

const basicBarData = `const data = [
  {population: 1373, country: "China"},
  {population: 1266, country: "India"},
  {population: 323, country: "United States"},
  {population: 958, country: "Indonesia"},
  {population: 805, country: "Brazil"},
  {population: 501, country: "Pakistan"},
  {population: 786, country: "Nigeria"},
  {population: 456, country: "Bangladesh"},
]`

const BasicBar = ({}) => {
  const data = [
    {population: 1373, country: "China"},
    {population: 1266, country: "India"},
    {population: 323, country: "United States"},
    {population: 958, country: "Indonesia"},
    {population: 805, country: "Brazil"},
    {population: 501, country: "Pakistan"},
    {population: 786, country: "Nigeria"},
    {population: 456, country: "Bangladesh"},
  ]
  return (
    <BarChart data={data} xKey="country" yKey="population"
      xTitle="Country" yTitle="Population"
      axisColor="#FFF" tickColor="#FFF" gridColor="#FFF"
      labelColor="#FFF" graphTitleColor="#FFF"
      axisWidth={1.5} width="100%" height={450}
    />
  )
}

export {
  BasicBar,
  basicBarCode,
  basicBarData,
}
