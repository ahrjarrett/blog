import Typography from 'typography'
import theme from 'typography-theme-github'

console.log('TYPOGRAPHY!', theme)

const typography = new Typography({ ...theme })

// const sansSerif = ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol']

// const typography = new Typography({
//   baseFontSize: '16px',
//   baseLineHeight: 1.45,
//   headerFontFamily: sansSerif,
//   bodyFontFamily: ['Georgia'],
// })

export default typography
