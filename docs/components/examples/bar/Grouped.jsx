import React from "react"
import BarChart from "replot-bar"


const groupedBarCode = `<BarChart data={data} xKey="country" yKey="population" groupKey="year"
  xTitle="Year" yTitle="Population"
  axisColor="#FFF" tickColor="#FFF" gridColor="#FFF"
  labelColor="#FFF" graphTitleColor="#FFF" legendFontColor="#FFF"
  width="100%" height={450}
/>`

const groupedBarData = `const data = [
  {country: "Github", year: 2015, population: 1100000},
  {country: "Github", year: 2016, population: 1600000},
  {country: "Github", year: 2017, population: 2400000},
  {country: "Netherlands", year: 2015, population: 1692500},
  {country: "Netherlands", year: 2016, population: 1698700},
  {country: "Netherlands", year: 2017, population: 1703500},
  {country: "Israel", year: 2015, population: 806400},
  {country: "Israel", year: 2016, population: 819100},
  {country: "Israel", year: 2017, population: 832100},
  {country: "New Zealand", year: 2015, population: 452900},
  {country: "New Zealand", year: 2016, population: 466000},
  {country: "New Zealand", year: 2017, population: 470500},
  {country: "Iceland", year: 2015, population: 32900},
  {country: "Iceland", year: 2016, population: 33200},
  {country: "Iceland", year: 2017, population: 33500}
]`

const GroupedBar = ({}) => {
  const data = [
    {country: "Github", year: 2015, population: 1100000},
    {country: "Github", year: 2016, population: 1600000},
    {country: "Github", year: 2017, population: 2400000},
    {country: "Netherlands", year: 2015, population: 1692500},
    {country: "Netherlands", year: 2016, population: 1698700},
    {country: "Netherlands", year: 2017, population: 1703500},
    {country: "Israel", year: 2015, population: 806400},
    {country: "Israel", year: 2016, population: 819100},
    {country: "Israel", year: 2017, population: 832100},
    {country: "New Zealand", year: 2015, population: 452900},
    {country: "New Zealand", year: 2016, population: 466000},
    {country: "New Zealand", year: 2017, population: 470500},
    {country: "Iceland", year: 2015, population: 32900},
    {country: "Iceland", year: 2016, population: 33200},
    {country: "Iceland", year: 2017, population: 33500}
  ]
  return(
    <BarChart data={data} xKey="country" yKey="population" groupKey="year"
      xTitle="Year" yTitle="Population"
      axisColor="#FFF" tickColor="#FFF" gridColor="#FFF"
      labelColor="#FFF" graphTitleColor="#FFF" legendFontColor="#FFF"
      axisWidth={1.5} width="100%" height={450}
    />
  )
}

export {
  GroupedBar,
  groupedBarCode,
  groupedBarData,
}
