const fs = require('fs')
const path = require('path')
const axios = require('axios')
const parse = require('./parse.js')
const codegen = require('./codegen.js')

function gen() {
  axios.request("http://47.244.136.132/swagger-ui/dist/hex.yaml").then(r => {
    let opt = {
      swagger: r.data,
      moduleName: 'api',
      className: 'api'
    }
    let data = parse(opt)
    let codeResult = codegen(data)
    codeResult.forEach(x => {
      fs.writeFileSync(path.join(__dirname, `dist/${x.tag}.js`), x.template)
    })
  })
}
gen();
//生成命令：node tools/codegen/index.js
