const ci = require('miniprogram-ci')
let {
  version,
  description: desc
} = require('./package.json')

if (!version) version = 'v1.0.0'
if (!desc) desc = new Date() + '上传'

const project = new ci.Project({
  appid: 'wxdb06592aec752326',
  type: 'miniProgram',
  projectPath: process.cwd() + '/dist',
  privateKeyPath: process.cwd() + '/private.wxdb06592aec752326.key',
  ignores: ['node_modules/**/*'],
})
ci.upload({
  project,
  version,
  desc,
  setting: {
    minify: true,
  },
}).then(res => {
  console.log(res)
  console.log('上传成功')
}).catch(error => {
  if (error.errCode == -1) {
    console.log('上传成功')
  }
  console.log(error)
  console.log('上传失败')
  process.exit(-1)
})