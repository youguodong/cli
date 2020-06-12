/*
 * @Author: last order
 * @Date: 2020-06-11 14:24:07
 * @LastEditTime: 2020-06-12 16:39:29
 */
import { HOST, PORT } from '../config/index'
import webpack = require('webpack')
import WebpackDevServer = require('webpack-dev-server')
import portFinder = require('portfinder')
import BundleAnalyzerPlugin = require('webpack-bundle-analyzer')

export const buildMode = (mode: string): string => {
  const str = ['test', 'development', 'production', 'preProduction'].find(item => mode === item)

  return str === 'test' || str === 'development' ? 'development' : 'production'
}

export const report = (config: webpack.Configuration, type: boolean): webpack.Configuration => {
  if (type) {
    if (!config.plugins.includes(BundleAnalyzerPlugin)) {
      config.plugins.push(
        new BundleAnalyzerPlugin.BundleAnalyzerPlugin({
          openAnalyzer: false
        })
      )
    }
  }

  return config
}
export const getPort = async (): Promise<number> => {
  const result = await portFinder.getPortPromise({
    port: PORT,
    stopPort: PORT + 1000
  })

  return result
}

export const server = async (compiler: webpack.Compiler): Promise<WebpackDevServer> => {
  const port = await getPort() as unknown as number
  const devServer = new WebpackDevServer(compiler, {
    host: HOST,
    port: port,
    hot: true,
    hotOnly: true,
    compress: true,
    noInfo: true,
    quiet: true,
    overlay: {
      warnings: false,
      errors: true
    },
    open: false,
    useLocalIp: true,
    clientLogLevel: 'none'
  })

  return devServer as WebpackDevServer
}
