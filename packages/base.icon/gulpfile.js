const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const terser = require('rollup-plugin-terser');
const sizeSnapshot = require("rollup-plugin-size-snapshot");
const pkg = require('./package.json');

const banner = `
/* ${pkg.name} version ${pkg.version}
 *
 * Copyright (c) 2013-present, ${pkg.author}
 * 
 * This source code is licensed under the ${pkg.license} license found in the
 * LICENSE file in the root directory of this source tree.
 */
`
const globals = {
  react: 'React',
  'prop-types': 'string',
  'react-icon-base': 'IconBase'
}

const external = ['react', 'prop-types', 'react-icon-base']

const rollupExe = (file) => rollup.rollup({
  input: './src/' + file,
  external,
  plugins: [
    resolve({
      preferBuiltins: true
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    babel({
      exclude: 'node_modules/**',
    }),
    sizeSnapshot.sizeSnapshot(),
    terser.terser({
      output: {
        comments: true,
        beautify: true,
      },
    })
  ]
}).then(bundle => Promise.all([
  bundle.write({
    file: './lib/es/' + file,
    format: 'es',
    name: pkg.name,
    banner,
    globals
  }),
  bundle.write({
    file: './lib/cjs/' + file,
    format: 'cjs',
    name: pkg.name,
    banner,
    globals
  })
]))

gulp.task('default', (cb) => fs.readdir(
  path.resolve(__dirname, 'src'),
  (err, files) => { 
    files.map(file => rollupExe(file))
    cb()
  }
))
