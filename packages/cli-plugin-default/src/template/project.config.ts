import webpack = require('webpack')
import WebpackDevServer = require('webpack-dev-server')

interface PagesConfig {
  filename: string,
  template: string,
  title?: string,
  inject?: boolean | 'body' | 'head',
  minify?: boolean,
  chunks?: string[]
}

interface PagesInterface {
  [propName: string]: PagesConfig
}

interface TerserOptions {
  parallel?: boolean | number,
  dropConsole?: boolean,
  dropDebugger?: boolean
}

export class ProjectConfig {
  publicPath?: string = ''
  pages?: PagesInterface
  devServer?: WebpackDevServer.Configuration = {
    host: 'localhost',
    port: 8080,
    overlay: {
      warnings: false,
      errors: true
    }
  }

  terserPlugin?: TerserOptions = {
    parallel: true,
    dropConsole: true,
    dropDebugger: true
  }

  configWebpack?(config?: webpack.Configuration): webpack.Configuration
}
