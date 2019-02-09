// * Colors
// const themeColor = localStorage.getItem("themeColor")
const themeColor = null
const black = "#000"
const white = "#fff"
// const ghost = "#f0f0f0"
const ghost = "#fcf8e4"
const gray = "#dcdcdc"
const primary = themeColor || "#30866f"
const primaryHover = "rgb(43, 134, 110)"
const primaryTrans = "rgba(43, 134, 110, 0.3)"
const secondary = "rgb(255, 180, 0)"
const secondaryHover = "rgb(255, 180, 0)"
const tertiary = "rgb(46, 49, 146)"
const tertiaryTrans = "rgba(46, 49, 146, 0.35)"

const link = primary
const linkHover = primaryTrans

// * Fonts
const linkHoverFont = "TikRotalic"

export const theme = {
  // * Color Theme Variables -------------------
  themeColor,
  black,
  white,
  ghost,
  gray,
  primary,
  primaryHover,
  primaryTrans,
  secondary,
  secondaryHover,
  tertiary,
  tertiaryTrans,
  link,
  linkHover,
  linkHoverFont,

  // * Default Dimensions ----------------------
  sidebarWidth: 215,
  navHeight: "3.125rem",

  // * Misc. -----------------------------------
  boxShadow: "0 0 0.625rem 0 rgba(0, 0, 0, 0.1)",
  textShadow: "rgba(0,0,0,.01) 0 0 1px"
}
