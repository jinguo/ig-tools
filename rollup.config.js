import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    babel({ babelHelpers: 'bundled' })
  ]
};
