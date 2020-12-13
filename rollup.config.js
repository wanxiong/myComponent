import path from 'path';
import fs from 'fs';
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel';

const root = path.resolve(__dirname, 'packages')
console.log(process.env.NODE_ENV)
const isDev = process.env.NODE_ENV !== 'product';
console.log(isDev)
const externalAry = [
  "react",
  "react-dom",
  'moment',
  'loadsh'
];


const plugins = [
    resolve(),
    babel({ runtimeHelpers: true }),
    commonjs({
      // include: "**node_modules/**",
      // namedExports: { react: ["useState", "Component", "useRef", "useEffect"] }
    }),
    postcss({
      // Extract CSS to the same location where JS file is generated but with .css extension.
      extract: true,
      // Use named exports alongside default export.
      namedExports: true,
      // Minimize CSS, boolean or options for cssnano.
      minimize: true,
      // Enable sourceMap.
      sourceMap: isDev,
      // This plugin will process files ending with these extensions and the extensions supported by custom loaders.
      extensions: [".less", ".css"],
    }),
    isDev && terser(),
]


module.exports = fs.readdirSync(root)
  // 保留文件夹
  .filter(item => {
     return fs.statSync(path.resolve(root, item)).isDirectory()
  })
  .map(item => {
    const pkg = require(path.resolve(root, item, 'package.json'))
    return {
      input: path.resolve(root, item, 'index.js'),
      output: [
        {
          exports: 'auto',
          file: path.resolve(root, item, pkg.main),
          format: 'cjs',
          sourcemap: isDev,
        }, {
          exports: 'auto',
          file: path.resolve(root, item, pkg.module),
          format: 'es',
          sourcemap: isDev,
        }
      ],
      plugins: plugins,
      //  将模块视为外部模块，不会打包在库中
      /*
        external 是一个从外部传入的数组表示不需要被打包的包
        通过判断当前处理的包的名称是否已数组中的包名开头，来将其排除
      */
      external: externalAry,
    }
  })