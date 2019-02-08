// * Colors
// const themeColor = localStorage.getItem("themeColor")
const themeColor = null
const white = "#fff"
const ghost = "#f0f0f0"
const gray = "#dcdcdc"
const primary = themeColor || "rgb(46, 49, 146)"
const primaryHover = "rgb(46, 49, 146)"
const primaryTrans = "rgba(46, 49, 146, 0.5)"
const secondary = "rgb(255, 180, 0)"
const secondaryHover = "rgb(255, 180, 0)"
const link = primary
const linkHover = primaryTrans

// * Fonts
const linkHoverFont = "TikRotalic"

export const theme = {
  // * Color Theme Variables -------------------
  themeColor,
  white,
  ghost,
  gray,
  primary,
  primaryHover,
  primaryTrans,
  secondary,
  secondaryHover,
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
