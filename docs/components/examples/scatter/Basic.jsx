import React from "react"
import ScatterPlot from "replot-scatter"


const basicScatterCode = `<ScatterPlot data={data} xKey="height" yKey="weight"/>`

const basicScatterData = `const data = [
  {height: 70, weight: 155},
  {height: 72, weight: 144},
  {height: 73, weight: 158},
  {height: 72, weight: 160},
  {height: 77, weight: 186},
  {height: 68, weight: 153},
  {height: 69, weight: 160},
  {height: 67, weight: 166},
  {height: 60, weight: 90},
  {height: 63.5, weight: 100},
  {height: 62, weight: 102},
  {height: 65, weight: 112},
  {height: 59, weight: 90},
  {height: 58.5, weight: 95},
  {height: 61.5, weight: 115},
  {height: 69, weight: 125},
  {height: 70, weight: 135},
]`

const BasicScatter = ({}) => {
  const data = [
    {height: 70, weight: 155},
    {height: 72, weight: 144},
    {height: 73, weight: 158},
    {height: 72, weight: 160},
    {height: 77, weight: 186},
    {height: 68, weight: 153},
    {height: 69, weight: 160},
    {height: 67, weight: 166},
    {height: 60, weight: 90},
    {height: 63.5, weight: 100},
    {height: 62, weight: 102},
    {height: 65, weight: 112},
    {height: 59, weight: 90},
    {height: 58.5, weight: 95},
    {height: 61.5, weight: 115},
    {height: 69, weight: 125},
    {height: 70, weight: 135},
  ]
  return(
    <div style={{ display: "inline-block" }}>
      <ScatterPlot data={data}
        xKey="height"
        yKey="weight"
        height={450}
      />
    </div>
  )
}

export {
  BasicScatter,
  basicScatterCode,
  basicScatterData,
}
