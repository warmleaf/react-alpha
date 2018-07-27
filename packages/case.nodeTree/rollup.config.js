import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import { sizeSnapshot } from "rollup-plugin-size-snapshot"
import pkg from './package.json'

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
  'styled-components': '',
  '@react-alpha/base.flex': 'Flex',
  'react-sortable-tree': 'SortableTree',
  'react-contextmenu-wl': 'ContextMenuTrigger'
}

const external = [
  'react', 
  'prop-types', 
  'styled-components', 
  '@react-alpha/base.flex',
  'react-sortable-tree',
  'react-contextmenu-wl'
]

export default [
  {
    input: 'src/index.js',
    output: {
      file: `lib/es/index.js`,
      name: `${pkg.name}`,
      format: 'es',
      banner,
      globals
    },
    external,
    plugins: [
      resolve({
        preferBuiltins: true
      }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      babel({
        exclude: 'node_modules/**',
      }),
      sizeSnapshot(),
      terser({
        output: {
          comments: true,
          beautify: true,
        },
      })
    ]
  },
  {
    input: 'src/index.js',
    output: {
      file: `lib/cjs/index.js`,
      name: `${pkg.name}`,
      format: 'cjs',
      banner,
      globals,
      exports: 'named'
    },
    external,
    plugins: [
      resolve({
        preferBuiltins: true
      }),
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
      babel({
        exclude: 'node_modules/**',
      }),
      // commonjs({
      //   include: 'node_modules/**'
      // }),
      sizeSnapshot(),
      terser({
        output: {
          comments: true,
          beautify: true,
        },
      })
    ]
  }
]