import React from "react"
import BoxPlot from "replot-boxplot"


const basicBoxplotCode = `<BoxPlot data={data} weightKey="score" groupKey="gender"
  xTitle="Gender" yTitle="Score"
  axisColor="#FFF" tickColor="#FFF" gridColor="#FFF"
  labelColor="#FFF" graphTitleColor="#FFF"
  axisWidth={1.5} width="100%" height={450}
/>`

const basicBoxplotData = `const data = [
  {gender: "female", score: 93},
  {gender: "female", score: 95},
  {gender: "female", score: 60},
  {gender: "female", score: 74},
  {gender: "female", score: 82},
  {gender: "female", score: 90},
  {gender: "female", score: 71},
  {gender: "female", score: 80},
  {gender: "female", score: 88},
  {gender: "female", score: 85},
  {gender: "female", score: 94},
  {gender: "male", score: 96},
  {gender: "male", score: 66},
  {gender: "male", score: 74},
  {gender: "male", score: 77},
  {gender: "male", score: 76},
  {gender: "male", score: 82},
  {gender: "male", score: 81},
  {gender: "male", score: 88},
  {gender: "male", score: 84},
  {gender: "male", score: 91}
]`

const BasicBoxplot = ({}) => {
  const data = [
    {gender: "female", score: 93},
    {gender: "female", score: 95},
    {gender: "female", score: 60},
    {gender: "female", score: 74},
    {gender: "female", score: 82},
    {gender: "female", score: 90},
    {gender: "female", score: 71},
    {gender: "female", score: 80},
    {gender: "female", score: 88},
    {gender: "female", score: 85},
    {gender: "female", score: 94},
    {gender: "male", score: 96},
    {gender: "male", score: 66},
    {gender: "male", score: 74},
    {gender: "male", score: 77},
    {gender: "male", score: 76},
    {gender: "male", score: 82},
    {gender: "male", score: 81},
    {gender: "male", score: 88},
    {gender: "male", score: 84},
    {gender: "male", score: 91}
  ]
  return (
    <BoxPlot data={data} weightKey="score" groupKey="gender"
      xTitle="Gender" yTitle="Score"
      axisColor="#FFF" tickColor="#FFF" gridColor="#FFF"
      labelColor="#FFF" graphTitleColor="#FFF"
      axisWidth={1.5} width="100%" height={450}
    />
  )
}

export {
  BasicBoxplot,
  basicBoxplotCode,
  basicBoxplotData,
}
