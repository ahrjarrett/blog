const path = require("path")

const routes = {
  // home: {
  //   path: '/',
  //   component: path.resolve(__dirname, 'home.js')
  // },

  test: {
    path: "/blah",
    component: path.resolve(__dirname, "../components/test.js")
  }

  // page2: {
  //   path: '/2019-02-16-draw-an-interactive-elevation-chart-with-d3-and-react',
  //   component: path.resolve(__dirname, 'page-2.js')
  // }
}

module.exports = { routes }
