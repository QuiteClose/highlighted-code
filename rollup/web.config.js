import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import includePaths from 'rollup-plugin-includepaths';

export default {
  input: './esm/index.js',
  plugins: [
    includePaths({
      include: {
        'highlight.js': 'dedicated/web.js'
      },
    }),
    nodeResolve(),
    commonjs(),
    terser()
  ],
  output: {
    esModule: false,
    file: './web.js',
    format: 'module'
  }
};
