import Typography from 'typography'
import theme from 'typography-theme-github'

const typography = new Typography({ ...theme, bodyFontFamily: ['GT Super Text', 'Georgia'] })

console.log(typography)
export default typography
