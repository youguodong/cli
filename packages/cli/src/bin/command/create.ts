// import { checkDirectory, copy } from '../../utils'
// import * as templatePackge from '../../template/package.json'
import Vue from '../../../../cli-plugin-vue/index'
// import fs = require('fs')
// import path = require('path')
// import ora = require('ora')
// import chalk = require('chalk')

export default async (projectName, options) => {
  console.log(projectName)
  console.log(2341234)
  console.log(options)
  new Vue({})
}

// const defaultCreate = async projectName => {
// const dir = path.resolve(process.cwd(), projectName)
//   const res = await checkDirectory(dir)
//   if (res) return console.log('文件夹已存在')
//   console.log()
//   const spinner = ora({
//     text: ' 正在努力生成项目中...',
//     spinner: 'dots'
//   })
//   spinner.start()
//   const templatePath = path.resolve(__dirname, '../../../template')
//   const projectPath = path.resolve(process.cwd(), projectName)
//   fs.mkdirSync(projectPath)
//   const fileList = fs.readdirSync(templatePath)
//   const Package = templatePackge
//   Package.name = projectName
//   fs.writeFileSync(`${projectPath}/package.json`, JSON.stringify(Package, null, 2))
//   fileList.map(async file => {
//     const exclude = ['dist', 'webpack', 'node_modules', 'yarn.lock', 'package.json', 'package-lock.json', 'project.config.ts']
//     const result = exclude.find(item => item === file)

//     if (!result) {
//       const template = path.resolve(templatePath, file)
//       await copy(template, projectPath)
//     }
//   })

//   setTimeout(() => {
//     spinner.text = ' 项目创建成功\n'
//     spinner.succeed()
//     console.log(`  - ${chalk.cyan(`cd ${projectName}`)}`)
//     console.log(`  - ${chalk.cyan('npm install')}`)
//     console.log(`  - ${chalk.cyan('npm run dev')}`)
//   }, 4000)
// }