const paletteDark = {
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
  boxPalette: ["#ff8463", "#00da9d"],
  boxFill: "#1a5d70",
  dark: "#112e37",

  buttonHover: "#23596c",
  greenInput: "rgba(0, 218, 157, 0.75)",
  greenButton: "#0d8d82",
  tableBg: "rgba(127, 146, 152, 0.1)",
  tableField: "#194f63",
  tableFieldBorder: "rgba(0, 218, 157, 0.50)",
  shadow: "#0c3c4a",

  logoPNG: "static/design2_logo.png"
}

const paletteLight = {
  white: "#f6f6f6",
  darkGray: "#565f7c",
  midGray: "#818caa",
  lightGray: "#bfc5d3",
  purple: "#9f85de",
  pink: "#fe7676",
  orange: "#f36a4a",
  lightGreen: "#52e79d",
  green: "#08d377",

  tableBg: "rgba(191, 197, 211, 0.5)",
  tableShadow: "rgba(86, 95, 124, 0.25)",

  input: "rgba(82, 231, 157, 0.25)",

  buttonActive: "rgba(82, 231, 157, 0.75)",

  barPalette: ["#fe7676", "#f36a4a", "#FFBE47", "#52e79d", "#08d377", "#2FCCBA",  "#9f85de", "#6633AA"],
  treeMapPalette: ["#fe7676", "#08d377", "#9f85de"],
  groupedBarPalette: ["#fe7676", "#2FCCBA",  "#9f85de"],
  linePalette: ["#fe7676", "#FFBE47", "#52e79d", "#2FCCBA",  "#9f85de", "#6633AA"],
  scatterPalette: ["#2FCCBA", "#fe7676"],
  networkPalette: ["#fe7676", "#FFBE47", "#08d377", "#2FCCBA",  "#9f85de", "#6633AA"],
  boxPalette: ["#fe7676", "#08d377"],
}

const colorsDark = {

  body: {
    text: paletteDark.white,
    bg: "#281d29",
    gradient: "linear-gradient(#3e3a3f,#170c18)",
  },

  landing: {
    bg: "url('static/replot_cover_bg.png')",
  },

  getStartedButton: {
    border: "rgba(255,255,255,0.4)",
    text: "#fff",
    bg: "none",
  },

  optionsTable: {
    bg: "rgba(0,0,0,0.1)",
  },

  optionsPane: {
    paneHeader: {
      bg: "rgba(0,0,0,0.2)",
      text: "#aaa",
      activeText: "#ccc",
      activeBg: "rgba(120,0,140,0.2)",
    }
  },

  header: paletteDark.dark,

  codeBlockLeftBorder: paletteDark.green,
  codeBlockBorders: paletteDark.gray,

  input: "rgba(120,0,140,0.2)",
  inputBackground: "rgba(0,0,0,0.2)",
  inputText: paletteDark.greenInput,

  button: paletteDark.darkGreen,
  buttonActive: paletteDark.greenButton,
  buttonHover: paletteDark.buttonHover,

  optionsField: "rgba(0,0,0,0.2)",
  optionsFieldBorder: "rgba(120,0,140,0.2)",

  lightAccent: paletteDark.orange,
  white: paletteDark.white,
  black: paletteDark.darkGreen,
  mainColor: paletteDark.green, //used for options pane title
  darkAccent: paletteDark.gray, //used for options pane title

  barPalette: paletteDark.gradientPalette, //used for bar and network
  treeMapPalette: paletteDark.treeMapPalette,
  groupedBarPalette: paletteDark.groupedBarPalette,
  linePalette: paletteDark.linePalette,
  scatterPalette: paletteDark.scatterPalette,
  networkPalette: paletteDark.gradientPalette,
  boxPalette: paletteDark.boxPalette,
  boxFill: paletteDark.darkGreen,

  axisColor: paletteDark.white
}

const colorsLight = {
  backgroundPNG: paletteLight.backgroundPNG,
  logoPNG: paletteLight.logoPNG,

  bodyText: paletteLight.darkGray,
  bodyBg: paletteLight.white,

  titleShadow: paletteLight.white,

  header: paletteLight.lightGray,

  codeBlockLeftBorder: paletteLight.purple,
  codeBlockBorders: paletteLight.lightGray,

  input: paletteLight.lightGreen,
  inputBackground: paletteLight.lightGray,
  inputText: paletteLight.white,

  button: paletteLight.none,
  buttonActive: paletteLight.buttonActive,
  buttonHover: paletteLight.tableBg,

  optionsLabelBg: paletteLight.midGray,
  optionsTableBg: paletteLight.tableBg,
  optionsShadow: paletteLight.tableShadow,
  optionsField: paletteLight.lightGray,
  optionsFieldBorder: paletteLight.darkGray,


  lightAccent: paletteLight.white,
  white: paletteLight.darkGray, //used for data header
  black: paletteLight.darkGray,
  mainColor: paletteLight.white, //used for options pane title
  darkAccent: paletteLight.darkGray, //used for options pane title

  barPalette: paletteLight.barPalette,
  treeMapPalette: paletteLight.treeMapPalette,
  groupedBarPalette: paletteLight.groupedBarPalette,
  linePalette: paletteLight.linePalette,
  scatterPalette: paletteLight.scatterPalette,
  networkPalette: paletteLight.networkPalette,
  boxPalette: paletteLight.boxPalette,
  boxFill: paletteLight.white,

  axisColor: paletteLight.darkGray
}

let colors = {
  light: colorsLight,
  dark: colorsDark
}

let body = document.getElementById("body")
body.style.backgroundColor = colors["dark"].body.bg
body.style.backgroundImage = colors["dark"].body.gradient

export default colors
