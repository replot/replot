import React from "react"
import NetworkChart from "replot-network"


const boldNetworkCode = `<NetworkChart data={trades} parentKey="exporter" childKey="importer" height={450}
  lineWidth={3} lineOpacity={1} nodeRadius={10}
/>`

const boldNetworkData = `const trades = [
  {exporter: "Germany", importer: "European Union", volume: 1468990},
  {exporter: "Netherlands", importer: "European Union", volume: 798744},
  {exporter: "European Union", importer: "France", volume: 745931},
  {exporter: "European Union", importer: "United States", volume: 631868},
  {exporter: "Canada", importer: "United States", volume: 615908},
  {exporter: "Belgium", importer: "European Union", volume: 628796},
  {exporter: "China", importer: "Hong Kong", volume: 496359},
  {exporter: "China", importer: "United States", volume: 554573},
  {exporter: "European Union", importer: "United Kingdom", volume: 580318},
  {exporter: "China", importer: "European Union", volume: 547015},
  {exporter: "Italy", importer: "European Union", volume: 539556},
  {exporter: "Mexico", importer: "United States", volume: 501114},
  {exporter: "Russia", importer: "European Union", volume: 395834},
  {exporter: "Spain", importer: "European Union", volume: 365191},
  {exporter: "China", importer: "Japan", volume: 311146},
  {exporter: "European Union", importer: "Switzerland", volume: 300133},
  {exporter: "South Korea", importer: "China", volume: 251471},
  {exporter: "Poland", importer: "European Union", volume: 267854},
  {exporter: "European Union", importer: "Austria", volume: 244913},
  {exporter: "Czech Republic", importer: "European Union", volume: 225091},
  {exporter: "Japan", importer: "United States", volume: 206464},
  {exporter: "European Union", importer: "Sweden", volume: 204849},
  {exporter: "China", importer: "Germany", volume: 187293},
  {exporter: "Norway", importer: "European Union", volume: 179502},
  {exporter: "Germany", importer: "United States", volume: 184247},
  {exporter: "European Union", importer: "Turkey", volume: 158206},
  {exporter: "Hungary", importer: "European Union", volume: 154862},
  {exporter: "European Union", importer: "Japan", volume: 143807},
  {exporter: "Australia", importer: "China", volume: 128725},
  {exporter: "European Union", importer: "Denmark", volume: 129951},
  {exporter: "Taiwan", importer: "China", volume: 124502},
  {exporter: "United Kingdom", importer: "United States", volume: 116675},
  {exporter: "Germany", importer: "Switzerland", volume: 115041},
  {exporter: "Ireland", importer: "European Union", volume: 105853},
]`

const BoldNetwork = ({}) => {
  const trades = [
    {exporter: "Germany", importer: "European Union", volume: 1468990},
    {exporter: "Netherlands", importer: "European Union", volume: 798744},
    {exporter: "European Union", importer: "France", volume: 745931},
    {exporter: "European Union", importer: "United States", volume: 631868},
    {exporter: "Canada", importer: "United States", volume: 615908},
    {exporter: "Belgium", importer: "European Union", volume: 628796},
    {exporter: "China", importer: "Hong Kong", volume: 496359},
    {exporter: "China", importer: "United States", volume: 554573},
    {exporter: "European Union", importer: "United Kingdom", volume: 580318},
    {exporter: "China", importer: "European Union", volume: 547015},
    {exporter: "Italy", importer: "European Union", volume: 539556},
    {exporter: "Mexico", importer: "United States", volume: 501114},
    {exporter: "Russia", importer: "European Union", volume: 395834},
    {exporter: "Spain", importer: "European Union", volume: 365191},
    {exporter: "China", importer: "Japan", volume: 311146},
    {exporter: "European Union", importer: "Switzerland", volume: 300133},
    {exporter: "South Korea", importer: "China", volume: 251471},
    {exporter: "Poland", importer: "European Union", volume: 267854},
    {exporter: "European Union", importer: "Austria", volume: 244913},
    {exporter: "Czech Republic", importer: "European Union", volume: 225091},
    {exporter: "Japan", importer: "United States", volume: 206464},
    {exporter: "European Union", importer: "Sweden", volume: 204849},
    {exporter: "China", importer: "Germany", volume: 187293},
    {exporter: "Norway", importer: "European Union", volume: 179502},
    {exporter: "Germany", importer: "United States", volume: 184247},
    {exporter: "European Union", importer: "Turkey", volume: 158206},
    {exporter: "Hungary", importer: "European Union", volume: 154862},
    {exporter: "European Union", importer: "Japan", volume: 143807},
    {exporter: "Australia", importer: "China", volume: 128725},
    {exporter: "European Union", importer: "Denmark", volume: 129951},
    {exporter: "Taiwan", importer: "China", volume: 124502},
    {exporter: "United Kingdom", importer: "United States", volume: 116675},
    {exporter: "Germany", importer: "Switzerland", volume: 115041},
    {exporter: "Ireland", importer: "European Union", volume: 105853},
  ]
  return(
    <div style={{ display: "inline-block" }}>
      <NetworkChart data={trades} parentKey="exporter" childKey="importer" height={450}
        lineWidth={3} lineOpacity={1} nodeRadius={10}
      />
    </div>
  )
}


export {
  BoldNetwork,
  boldNetworkCode,
  boldNetworkData,
}
