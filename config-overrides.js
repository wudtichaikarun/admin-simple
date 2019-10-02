const { override, addWebpackAlias, fixBabelImports } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "styled-components": path.resolve("./node_modules/styled-components"),
    "@ant-design/icons/lib/dist$": path.resolve(
      __dirname,
      "src/constants/antdIcon.js"
    )
  }),
  // addBundleVisualizer({
  //   analyzerMode: 'server',
  //   reportFilename: 'report.html',
  // }),
  fixBabelImports("antd", {
    libraryName: "antd",
    style: "css",
    libraryDirectory: "lib"
  })
);
