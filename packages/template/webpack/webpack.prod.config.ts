/*
 * @Author: last order
 * @Date: 2020-06-06 13:12:51
 * @LastEditTime: 2020-12-14 16:45:46
 */
import baseConfig from './webpack.base.config'
import { merge } from 'webpack-merge'
import webpack = require('webpack')
import OptimizationCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// import SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const WebpackBar = require('webpackbar')

export default (): webpack.Configuration => {
  // const smp = new SpeedMeasurePlugin()
  const config: webpack.Configuration = {
    optimization: {
      minimize: true
    },
    plugins: [
      new OptimizationCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano')
      }),
      new WebpackBar({
        name: 'Build'
      })
    ]
  }

  return merge(
    baseConfig(),
    config
  )
}
