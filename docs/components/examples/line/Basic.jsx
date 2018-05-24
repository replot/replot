import React from "react"
import LineChart from "replot-line"


const basicLineCode = `<LineChart data={data} xKey="year" yKey="value"/>`

const basicLineData = `const data = [
  {index: "Dow Jones", year: 2006, value: 12463.15},
  {index: "Dow Jones", year: 2007, value: 13264.82},
  {index: "Dow Jones", year: 2008, value: 8776.39},
  {index: "Dow Jones", year: 2009, value: 10428.05},
  {index: "Dow Jones", year: 2010, value: 11577.51},
  {index: "Dow Jones", year: 2011, value: 12217.56},
  {index: "Dow Jones", year: 2012, value: 13104.14},
  {index: "Dow Jones", year: 2013, value: 16576.66},
  {index: "Dow Jones", year: 2014, value: 17823.07},
  {index: "Dow Jones", year: 2015, value: 17425.03},
  {index: "Dow Jones", year: 2016, value: 19762.6},
]`

const BasicLine = ({}) => {
  const data = [
    {index: "Dow Jones", year: 2006, value: 12463.15},
    {index: "Dow Jones", year: 2007, value: 13264.82},
    {index: "Dow Jones", year: 2008, value: 8776.39},
    {index: "Dow Jones", year: 2009, value: 10428.05},
    {index: "Dow Jones", year: 2010, value: 11577.51},
    {index: "Dow Jones", year: 2011, value: 12217.56},
    {index: "Dow Jones", year: 2012, value: 13104.14},
    {index: "Dow Jones", year: 2013, value: 16576.66},
    {index: "Dow Jones", year: 2014, value: 17823.07},
    {index: "Dow Jones", year: 2015, value: 17425.03},
    {index: "Dow Jones", year: 2016, value: 19762.6},
  ]
  return (
    <div style={{ display: "inline-block" }}>
      <LineChart data={data} xKey="year" yKey="value" height={450}/>
    </div>
  )
}

export {
  BasicLine,
  basicLineCode,
  basicLineData,
}
