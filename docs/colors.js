const paletteA = {
  orange: "#ff5a3c",
  white: "#dfe3e6",
  darkGreen: "#0d404e",
  green: "#00da9d",
  gray: "#7f9298",
  gradientPalette: ["#ff5a3c", "#ff8463", "#ffaf8c", "#FFD2AD", "#bfd5a8", "#8fd9a8", "#00da9d", "#009b76"],
  treeMapPalette: ["#ff5a3c", "#8fd9a8", "#ff8463", "#ffaf8c", "#FFD2AD", "#bfd5a8", "#00da9d", "#009b76"],
  groupedBarPalette: ["#ff8463", "#bfd5a8", "#00da9d", "#009b76"],
  linePalette: ["#ff5a3c", "#ff8463", "#FFD2AD", "#bfd5a8", "#8fd9a8", "#00da9d", "#009b76"],
  scatterPalette: ["#ff8463", "#00da9d"],
  dark: "#112e37",

  buttonHover: "#23596c",
  greenInput: "rgba(0, 218, 157, 0.75)",
  greenButton: "#0d8d82",
  tableBg: "rgba(127, 146, 152, 0.1)",
  tableField: "#194f63",
  tableFieldBorder: "rgba(0, 218, 157, 0.50)",
  shadow: "#0c3c4a",

  backgroundPNG: "url('static/design2_background.png')",
  logoPNG: "static/design2_logo.png"
}
const paletteB = {
  white: "#ffffff",
  pink: "#e74a7a",
  coral: "#fc6563",
  darkBlue: "#2d3a47",
  darkPink: "#a95874", // or 9a446e

  buttonHover: "#425568",
  buttonActive: "#fb7f7d",

  textShadow: "rgba(231, 74, 122, 0.75)",
  tableShadow: "#2b3845",
  tableBg: "rgba(169, 88, 116, 0.1)",
  tableLabel: "#331620",
  tableFieldBorder: "rgba(252, 101, 99, 0.75)",
  tableField: "#524355",

  barPalette:["#fbc9c8", "#fbb2b0", "#fc9894", "#fc8b85", "#fc6a67", "#f7535c", "#f03f5c", "#d5174b"],
  treeMapPalette: ["#fc8b85", "#f7535c", "#fbc9c8"],
  groupedBarPalette: ["#fbc9c8", "#fc6a67", "#f03f5c", "#d5174b"],
  linePalette: ["#fbc9c8", "#fc9894", "#fc6a67", "#f7535c", "#f03f5c", "#d5174b"],
  scatterPalette: ["#d5174b", "#fbc9c8"],
  networkPalette: ["#fbc9c8", "#fc9894", "#fc6a67", "#f7535c", "#f03f5c", "#d5174b"],

  backgroundPNG: "url('static/color2_background.png')",
  logoPNG: "static/color2_logo.png"
}
const paletteC = {
  gray: "#C5C6B6",
  pink: "#F16B6F",
  green: "#AACD6E",
  orange: "#EA6B41",
  brown: "#3C3530",

  dark: "#b25c40",

  tableBg: "rgba(234, 107, 65, 0.25)",
  tableFieldBorder: "rgba(170, 205, 110, 1)",
  tableField: "#bfbb86",
  tableShadow: "rgba(60, 53, 48, 0.25)",

  input: "rgba(231, 74, 122, 0.75)",

  barPalette:["#fea9ac", "#fc858f", "#f46b72", "#de836e", "#caa56f", "#adcc6f", "#8ebc57", "#799b3f"],
  treeMapPalette: ["#fea9ac", "#f46b72", "#8ebc57", "#799b3f"],
  groupedBarPalette: ["#fea9ac", "#f46b72", "#8ebc57", "#799b3f"],
  linePalette: ["#fea9ac", "#f46b72", "#de836e", "#caa56f", "#8ebc57", "#799b3f"],
  scatterPalette: ["#799b3f", "#f46b72"],
  networkPalette: ["#fea9ac", "#f46b72", "#caa56f", "#adcc6f", "#8ebc57", "#799b3f"],
}
const paletteD = {
  brown: "#3C1B1F",
  pink: "#B21E4B",
  tan: "#E2BF81",
  sand: "#F6E1B5",

  tableBg: "rgba(51, 22, 26, 0.75)",
  tableLabel: "#99163e",
  tableShadow: "rgb(43, 18, 21)",
  tableField: "#4c2227",

  input: "rgba(178, 30, 75, 0.5)",

  buttonHover: "rgba(178, 30, 75, 0.5)",

  dark: "#5e1c2c",

  barPalette: ["#D88B67", "#ce6a5d", "#c13d50", "#B21E4B", "#a2375f", "#975873", "#8F7183", "#706475"],
  treeMapPalette: ["#706475", "#a2375f", "#c13d50"]
}

const colorsA = {
  backgroundPNG: paletteA.backgroundPNG,
  logoPNG: paletteA.logoPNG,

  bodyText: paletteA.white,
  bodyBg: paletteA.darkGreen,

  titleShadow: paletteA.greenInput,

  header: paletteA.dark,

  codeBlockLeftBorder: paletteA.green,
  codeBlockBorders: paletteA.gray,

  input: paletteA.greenInput,
  inputBackground: paletteA.darkGreen,

  button: paletteA.darkGreen,
  buttonActive: paletteA.greenButton,
  buttonHover: paletteA.buttonHover,

  optionsLabelBg: paletteA.dark,
  optionsTableBg: paletteA.tableBg,
  optionsShadow: paletteA.shadow,
  optionsField: paletteA.tableField,
  optionsFieldBorder: paletteA.tableFieldBorder,

  lightAccent: paletteA.orange,
  white: paletteA.white,
  black: paletteA.darkGreen,
  mainColor: paletteA.green, //used for options pane title
  darkAccent: paletteA.gray, //used for options pane title

  barPalette: paletteA.gradientPalette, //used for bar and network
  treeMapPalette: paletteA.treeMapPalette,
  groupedBarPalette: paletteA.groupedBarPalette,
  linePalette: paletteA.linePalette,
  scatterPalette: paletteA.scatterPalette,
  networkPalette: paletteA.gradientPalette,

  axisColor: paletteA.white
}
const colorsB = {
  backgroundPNG: paletteB.backgroundPNG,
  logoPNG: paletteB.logoPNG,

  bodyText: paletteB.white,
  bodyBg: paletteB.darkBlue,

  titleShadow: paletteB.textShadow,

  codeBlockLeftBorder: paletteB.pink,
  codeBlockBorders: paletteB.white,

  input: paletteB.textShadow,
  inputBackground: paletteB.darkBlue,

  button: paletteB.darkBlue,
  buttonActive: paletteB.buttonActive,
  buttonHover: paletteB.buttonHover,

  optionsLabelBg: paletteB.tableLabel,
  optionsTableBg: paletteB.tableBg,
  optionsShadow: paletteB.tableShadow,
  optionsField: paletteB.tableField,
  optionsFieldBorder: paletteB.tableFieldBorder,

  lightAccent: paletteB.pink,
  white: paletteB.white,
  black: paletteB.darkBlue,
  mainColor: paletteB.coral, //used for options pane title
  darkAccent: paletteB.darkPink, //used for options pane title

  barPalette: paletteB.barPalette,
  treeMapPalette: paletteB.treeMapPalette,
  groupedBarPalette: paletteB.groupedBarPalette,
  linePalette: paletteB.linePalette,
  scatterPalette: paletteB.scatterPalette,
  networkPalette: paletteB.networkPalette,

  axisColor: paletteB.white
}
const colorsC = {
  backgroundPNG: paletteC.backgroundPNG,
  logoPNG: paletteC.logoPNG,

  bodyText: paletteC.brown,
  bodyBg: paletteC.gray,

  titleShadow: paletteC.green,

  header: paletteC.green,

  codeBlockLeftBorder: paletteC.pink,
  codeBlockBorders: paletteC.brown,

  input: paletteC.input,
  inputBackground: paletteC.tableField,

  button: paletteC.none,
  buttonActive: paletteC.tableBg,
  buttonHover: paletteC.tableBg,

  optionsLabelBg: paletteC.brown,
  optionsTableBg: paletteC.tableBg,
  optionsShadow: paletteC.tableShadow,
  optionsField: paletteC.tableField,
  optionsFieldBorder: paletteC.pink,

  lightAccent: paletteC.pink,
  white: paletteC.brown,
  black: paletteC.gray,
  mainColor: paletteC.green, //used for options pane title
  darkAccent: paletteC.dark, //used for options pane title

  barPalette: paletteC.barPalette,
  treeMapPalette: paletteC.treeMapPalette,
  groupedBarPalette: paletteC.groupedBarPalette,
  linePalette: paletteC.linePalette,
  scatterPalette: paletteC.scatterPalette,
  networkPalette: paletteC.networkPalette,

  axisColor: paletteC.brown
}
const colorsD = {
  backgroundPNG: paletteD.backgroundPNG,
  logoPNG: paletteD.logoPNG,

  bodyText: paletteD.tan,
  bodyBg: paletteD.brown,

  titleShadow: paletteD.tableShadow,

  codeBlockLeftBorder: paletteD.pink,
  codeBlockBorders: paletteD.sand,

  input: paletteD.input,
  inputBackground: paletteD.tableField,

  button: paletteD.tableBg,
  buttonActive: paletteD.pink,
  buttonHover: paletteD.buttonHover,

  optionsLabelBg: paletteD.pink,
  optionsTableBg: paletteD.tableBg,
  optionsShadow: paletteD.tableShadow,
  optionsField: paletteD.tableField,
  optionsFieldBorder: paletteD.pink,

  lightAccent: paletteD.sand,
  white: paletteD.tan, //used for data header
  black: paletteD.brown,
  mainColor: paletteD.sand, //used for options pane title
  darkAccent: paletteD.dark, //used for options pane title

  barPalette: paletteD.barPalette,
  treeMapPalette: paletteD.treeMapPalette,
  groupedBarPalette: paletteD.groupedBarPalette,
  linePalette: paletteD.linePalette,
  scatterPalette: paletteD.scatterPalette,
  networkPalette: paletteD.networkPalette,

  axisColor: paletteD.sand
}

let colors = {
  light: colorsC,
  dark: colorsA
}

document.getElementById("body").style.backgroundColor = colors.bodyBg

export default colors
