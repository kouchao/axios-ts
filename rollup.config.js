import ts from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve';

const formats = ['umd', 'esm']
const output = formats.map((format) => ({
  file: `dist/bundle.${format}.js`,
  format,
  name: 'axiosTs',
}))

export default {
  input: 'src/index.ts',
  output,
  plugins: [
    resolve(),
    ts(),
  ],
}
