import ts from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";

const formats = ['umd', 'esm']
const output = formats.map((format) => ({
  file: `dist/axios-ts.${format}.min.js`,
  format,
  name: 'axiosTs',
}))

export default {
  input: 'src/index.ts',
  output,
  plugins: [
    resolve(),
    commonjs(),
    ts(),
    terser()
  ],
}
