import React from "react"
import ReactDOM from "react-dom"
import Radium from "radium"
import {ColorTheme} from "replot-helpers"
import ComponentPage from "./pages/ComponentPage.jsx"
import ExamplePage from "./pages/ExamplePage.jsx"
import HomePage from "./pages/HomePage.jsx"

const componentTitles = {
  treemap: "Treemap",
  bar: "Bar Chart",
  line: "Line Chart",
  scatter: "Scatter Chart",
  boxplot: "Box Plot",
  map: "Map Chart",
  network: "Network Chart",
}

const componentExamples = {
  treemap: [
    {name: "Basic", imgURL: "/static/img/treemap/example-basic.png", pageURL: "/treemap/basic"},
    {name: "Vertical", imgURL: "/static/img/treemap/example-vertical.png", pageURL: "/treemap/vertical"},
    {name: "Nested", imgURL: "/static/img/treemap/example-nested.png", pageURL: "/treemap/nested"},
  ],
  bar: [
    {name: "Basic", imgURL: "/static/img/bar/example-basic.png", pageURL: "/bar/basic"},
    {name: "Grouped", imgURL: "/static/img/bar/example-grouped.png", pageURL: "/bar/grouped"},
  ],
  line: [
    {name: "Basic", imgURL: "/static/img/line/example-basic.png", pageURL: "/line/basic"},
    {name: "Grouped", imgURL: "/static/img/line/example-basic-grouped.png", pageURL: "/line/basic_grouped"},
    {name: "Bold", imgURL: "/static/img/line/example-bold.png", pageURL: "/line/bold"},
    {name: "Custom Color", imgURL: "/static/img/line/example-custom-color.png", pageURL: "/line/custom_color"},
    {name: "Custom Tooltip", imgURL: "/static/img/line/example-custom-tooltip.png", pageURL: "/line/custom_tooltip"},
    {name: "Logarithmic", imgURL: "/static/img/line/example-logarithmic.png", pageURL: "/line/logarithmic"},
    {name: "Minimalistic", imgURL: "/static/img/line/example-minimalistic.png", pageURL: "/line/minimalistic"},
    {name: "Retro", imgURL: "/static/img/line/example-retro.png", pageURL: "/line/retro"},
    {name: "Shaded", imgURL: "/static/img/line/example-shaded.png", pageURL: "/line/shaded"},
    {name: "Titled", imgURL: "/static/img/line/example-titled.png", pageURL: "/line/titled"},
  ],
  scatter: [
    {name: "Basic", imgURL: "/static/img/scatter/example-basic.png", pageURL: "/scatter/basic"},
  ],
  boxplot: [
    {name: "Basic", imgURL: "/static/img/boxplot/example-basic.png", pageURL: "/boxplot/basic"},
  ],
  map: [
    {name: "Basic", imgURL: "/static/img/map/example-basic.png", pageURL: "/map/basic"},
    {name: "Red", imgURL: "/static/img/map/example-red.png", pageURL: "/map/red"},
    {name: "Logarithmic", imgURL: "/static/img/map/example-logarithmic.png", pageURL: "/map/logarithmic"},
    {name: "Custom Tooltip", imgURL: "/static/img/map/example-custom-tooltip.png", pageURL: "/map/custom_tooltip"},
    {name: "Zoomed", imgURL: "/static/img/map/example-zoomed.png", pageURL: "/map/zoomed"},
  ],
  network: [
    {name: "Advanced", imgURL: "/static/img/network/example-advanced.png", pageURL: "/network/advanced"},
    {name: "Basic", imgURL: "/static/img/network/example-basic.png", pageURL: "/network/basic"},
    {name: "Bold", imgURL: "/static/img/network/example-bold.png", pageURL: "/network/bold"},
    {name: "Custom Color", imgURL: "/static/img/network/example-custom-color.png", pageURL: "/network/custom_color"},
    {name: "Custom Tooltip", imgURL: "/static/img/network/example-custom-tooltip.png", pageURL: "/network/custom_tooltip"},
    {name: "Grouped", imgURL: "/static/img/network/example-grouped.png", pageURL: "/network/grouped"},
    {name: "Labeled", imgURL: "/static/img/network/example-labeled.png", pageURL: "/network/labeled"},
    {name: "Pastel", imgURL: "/static/img/network/example-pastel.png", pageURL: "/network/pastel"},
    {name: "Weighted Links", imgURL: "/static/img/network/example-weighted-links.png", pageURL: "/network/weighted_links"},
    {name: "Weighted Nodes", imgURL: "/static/img/network/example-weighted-nodes.png", pageURL: "/network/weighted_nodes"},
  ],
}

const paths = window.location.pathname.split('/')
if (paths[1] === '') {
  ReactDOM.render(
    <HomePage />,
    document.getElementById("replot-home")
  )
} else if (paths[2] === '') {
  ReactDOM.render(
    <ComponentPage
      componentTitle={componentTitles[paths[1]]} componentType={paths[1]}
      examples={componentExamples[paths[1]]}
    />,
    document.getElementById("page")
  )
} else {
  ReactDOM.render(
    <ExamplePage
      componentTitle={componentTitles[paths[1]]} componentType={paths[1]}
      exampleType={paths[2]}
    />,
    document.getElementById("page")
  )
}
