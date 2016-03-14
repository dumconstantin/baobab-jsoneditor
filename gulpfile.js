var gulp = require('gulp')
var babel = require('gulp-babel')
var sourcemaps = require('gulp-sourcemaps')
var glob = require('glob')
var path = require('path')
var fs = require('fs')
var camelCase = require('camelcase')
var header = require('gulp-header')
var bundleFileName = 'bundle'
var packageJson = require('./package.json')

gulp.task('bundle', function (done) {
  var files = glob.sync('./src/**/*.js')
  var fileNames = files.map(function (file) {
    return path.basename(file, '.js')
  }).filter(function (filename) {
    return filename !== bundleFileName
  })

  var imports = fileNames.reduce(function (acc, fileName) {
    acc += `\nimport ${camelCase(fileName)} from "./${fileName}"`
    return acc
  }, '')

  var exports = fileNames.reduce(function (acc, fileName) {
    acc += `\nexport { ${camelCase(fileName)} }`
    return acc
  }, '')

  var entry = '\nvar entry = {}'
  entry += fileNames.reduce(function (acc, fileName) {
    acc += `\nentry.${camelCase(fileName)} = ${fileName}`
    return acc
  }, '')
  entry += '\nexport default entry'

  var bundle = imports + entry + exports

  fs.writeFileSync(`./src/${bundleFileName}.js`, bundle, 'utf8')

  done()
})

gulp.task('compile', function () {
  return gulp.src('src/**/*')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(header(`/*
 * Baobab-JsonEditor
 *
 * Homepage: https://github.com/dumconstantin/baobab-jsoneditor
 * Version: ${packageJson.version}
 * Author: dumconstantin (Dumitrescu Constantin)
 * License: MIT
 */\n`))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/'))
})

gulp.task('build', ['bundle', 'compile'])
