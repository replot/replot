import React from "react"
import LineChart from "replot-line"


const shadedLineCode = `<LineChart data={markets} groupKey="index" xKey="year" yKey="value" shadeArea={true}/>`

const shadedLineData = `const markets = [
  {index: "Dow Jones", year: 2006, value: 12463.15},
  {index: "Dow Jones", year: 2007, value: 13264.82},
  {index: "Dow Jones", year: 2008, value: 8776.39},
  {index: "Dow Jones", year: 2009, value: 10428.05},
  {index: "Dow Jones", year: 2010, value: 11577.51},
  {index: "Dow Jones", year: 2011, value: 12217.56},
  {index: "Dow Jones", year: 2012, value: 13104.14},Grouped
  {index: "Dow Jones", year: 2013, value: 16576.66},
  {index: "Dow Jones", year: 2014, value: 17823.07},
  {index: "Dow Jones", year: 2015, value: 17425.03},
  {index: "Dow Jones", year: 2016, value: 19762.6},
  {index: "S&P 500", year: 2006, value: 1418.3},
  {index: "S&P 500", year: 2007, value: 1468.36},
  {index: "S&P 500", year: 2008, value: 903.25},
  {index: "S&P 500", year: 2009, value: 1115.1},
  {index: "S&P 500", year: 2010, value: 1257.64},
  {index: "S&P 500", year: 2011, value: 1257.6},
  {index: "S&P 500", year: 2012, value: 1426.19},
  {index: "S&P 500", year: 2013, value: 1848.36},
  {index: "S&P 500", year: 2014, value: 2058.9},
  {index: "S&P 500", year: 2015, value: 2043.94},
  {index: "S&P 500", year: 2016, value: 2238.83},
  {index: "NASDAQ 100", year: 2006, value: 1756.9},
  {index: "NASDAQ 100", year: 2007, value: 2084.93},
  {index: "NASDAQ 100", year: 2008, value: 1211.65},
  {index: "NASDAQ 100", year: 2009, value: 1860.31},
  {index: "NASDAQ 100", year: 2010, value: 2217.86},
  {index: "NASDAQ 100", year: 2011, value: 2277.83},
  {index: "NASDAQ 100", year: 2012, value: 2660.93},
  {index: "NASDAQ 100", year: 2013, value: 3592},
  {index: "NASDAQ 100", year: 2014, value: 4236.28},
  {index: "NASDAQ 100", year: 2015, value: 4593.27},
  {index: "NASDAQ 100", year: 2016, value: 4863.62},
]`

const ShadedLine = ({}) => {
  const markets = [
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
    {index: "S&P 500", year: 2006, value: 1418.3},
    {index: "S&P 500", year: 2007, value: 1468.36},
    {index: "S&P 500", year: 2008, value: 903.25},
    {index: "S&P 500", year: 2009, value: 1115.1},
    {index: "S&P 500", year: 2010, value: 1257.64},
    {index: "S&P 500", year: 2011, value: 1257.6},
    {index: "S&P 500", year: 2012, value: 1426.19},
    {index: "S&P 500", year: 2013, value: 1848.36},
    {index: "S&P 500", year: 2014, value: 2058.9},
    {index: "S&P 500", year: 2015, value: 2043.94},
    {index: "S&P 500", year: 2016, value: 2238.83},
    {index: "NASDAQ 100", year: 2006, value: 1756.9},
    {index: "NASDAQ 100", year: 2007, value: 2084.93},
    {index: "NASDAQ 100", year: 2008, value: 1211.65},
    {index: "NASDAQ 100", year: 2009, value: 1860.31},
    {index: "NASDAQ 100", year: 2010, value: 2217.86},
    {index: "NASDAQ 100", year: 2011, value: 2277.83},
    {index: "NASDAQ 100", year: 2012, value: 2660.93},
    {index: "NASDAQ 100", year: 2013, value: 3592},
    {index: "NASDAQ 100", year: 2014, value: 4236.28},
    {index: "NASDAQ 100", year: 2015, value: 4593.27},
    {index: "NASDAQ 100", year: 2016, value: 4863.62},
  ]
  return (
    <div style={{ display: "inline-block" }}>
      <LineChart data={markets} groupKey="index" xKey="year" yKey="value" shadeArea={true} height={450}
        axisColor="#AAA" tickColor="#AAA" gridColor="#AAA" labelColor="#AAA" legendFontColor="#AAA"
      />
    </div>
  )
}

export {
  ShadedLine,
  shadedLineCode,
  shadedLineData,
}
