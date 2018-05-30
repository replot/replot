import React from "react"
import ScatterPlot from "replot-scatter"


const retroScatterCode = `let colors = ["#33FF00", "#FFB000", "#E1E1E1"]
<ScatterPlot data={data} xKey="height" yKey="weight" groupKey="gender" weightKey="shoeSize"
  color={colors} xTitle="Height" yTitle="Weight"
  axisColor="#00FF66" tickColor="#00FF66" gridColor="#00FF66"
  labelColor="#00FF66" graphTitleColor="#00FF66" legendFontColor="#00FF66"
  labelFontFamily="Courier" graphTitleFontFamily="Courier" legendFontFamily="Courier"
/>`

const retroScatterData = `const data = [
  {gender: "male", height: 70, weight: 155, shoeSize: 10},
  {gender: "male", height: 72, weight: 144, shoeSize: 12},
  {gender: "male", height: 73, weight: 158, shoeSize: 11.5},
  {gender: "male", height: 72.5, weight: 160, shoeSize: 11},
  {gender: "male", height: 77, weight: 186, shoeSize: 13},
  {gender: "male", height: 68, weight: 153, shoeSize: 10},
  {gender: "male", height: 69, weight: 160, shoeSize: 9},
  {gender: "male", height: 67, weight: 166, shoeSize: 9.5},
  {gender: "male", height: 64.5, weight: 169, shoeSize: 9},
  {gender: "male", height: 63, weight: 126, shoeSize: 9.5},
  {gender: "male", height: 66.5, weight: 120, shoeSize: 9},
  {gender: "male", height: 65.5, weight: 147, shoeSize: 11},
  {gender: "female", height: 60, weight: 91, shoeSize: 6},
  {gender: "female", height: 63.5, weight: 100, shoeSize: 6.5},
  {gender: "female", height: 62, weight: 102, shoeSize: 6.5},
  {gender: "female", height: 66, weight: 112, shoeSize: 7},
  {gender: "female", height: 59, weight: 90, shoeSize: 6},
  {gender: "female", height: 58.5, weight: 95, shoeSize: 5.5},
  {gender: "female", height: 61.5, weight: 115, shoeSize: 6},
  {gender: "female", height: 69.5, weight: 125, shoeSize: 8},
  {gender: "female", height: 71, weight: 135, shoeSize: 8.5},
  {gender: "female", height: 58, weight: 140, shoeSize: 4.5},
  {gender: "female", height: 68.5, weight: 158, shoeSize: 7.5},
  {gender: "female", height: 64, weight: 160.5, shoeSize: 7.5},
  {gender: "female", height: 65, weight: 130.5, shoeSize: 7},
]`

const RetroScatter = ({}) => {
  const data = [
    {gender: "male", height: 70, weight: 155, shoeSize: 10},
    {gender: "male", height: 72, weight: 144, shoeSize: 12},
    {gender: "male", height: 73, weight: 158, shoeSize: 11.5},
    {gender: "male", height: 72.5, weight: 160, shoeSize: 11},
    {gender: "male", height: 77, weight: 186, shoeSize: 13},
    {gender: "male", height: 68, weight: 153, shoeSize: 10},
    {gender: "male", height: 69, weight: 160, shoeSize: 9},
    {gender: "male", height: 67, weight: 166, shoeSize: 9.5},
    {gender: "male", height: 64.5, weight: 169, shoeSize: 9},
    {gender: "male", height: 63, weight: 126, shoeSize: 9.5},
    {gender: "male", height: 66.5, weight: 120, shoeSize: 9},
    {gender: "male", height: 65.5, weight: 147, shoeSize: 11},
    {gender: "female", height: 60, weight: 91, shoeSize: 6},
    {gender: "female", height: 63.5, weight: 100, shoeSize: 6.5},
    {gender: "female", height: 62, weight: 102, shoeSize: 6.5},
    {gender: "female", height: 66, weight: 112, shoeSize: 7},
    {gender: "female", height: 59, weight: 90, shoeSize: 6},
    {gender: "female", height: 58.5, weight: 95, shoeSize: 5.5},
    {gender: "female", height: 61.5, weight: 115, shoeSize: 6},
    {gender: "female", height: 69.5, weight: 125, shoeSize: 8},
    {gender: "female", height: 71, weight: 135, shoeSize: 8.5},
    {gender: "female", height: 58, weight: 140, shoeSize: 4.5},
    {gender: "female", height: 68.5, weight: 158, shoeSize: 7.5},
    {gender: "female", height: 64, weight: 160.5, shoeSize: 7.5},
    {gender: "female", height: 65, weight: 130.5, shoeSize: 7},
  ]
  let colors = ["#33FF00", "#FFB000", "#E1E1E1"]
  return (
    <div style={{ display: "inline-block" }}>
      <ScatterPlot data={data} xKey="height" yKey="weight" groupKey="gender" weightKey="shoeSize" height={450}
        color={colors} xTitle="Height" yTitle="Weight"
        axisColor="#00FF66" tickColor="#00FF66" gridColor="#00FF66"
        labelColor="#00FF66" graphTitleColor="#00FF66" legendFontColor="#00FF66"
        labelFontFamily="Courier" graphTitleFontFamily="Courier" legendFontFamily="Courier"
      />
    </div>
  )
}

export {
  RetroScatter,
  retroScatterCode,
  retroScatterData,
}
