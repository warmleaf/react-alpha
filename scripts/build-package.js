var chalk = require('chalk')
var emoji = require('node-emoji')
var fs = require('fs')
var path = require('path')
var cp = require('child_process')
var pkgPath = path.resolve(__dirname, '../packages')
fs.readdir(pkgPath, function (err, files) {
  console.log(chalk.magenta('start building...'))
  files.map(function (file) {
    if (/base\.|case\./.test(file)) {
      var filePath = path.resolve(pkgPath, file)
      fs.stat(filePath, function (err, stat) {
        if (stat && stat.isDirectory()) {
          cp.exec('cd ' + filePath + '&& npm run build', function (err, stdout, stderr) {
            console.log(stdout, chalk.green(emoji.emojify(':sparkles: build ' + file + ' done')), stderr)
          })
        }
      })
    }
  })
})