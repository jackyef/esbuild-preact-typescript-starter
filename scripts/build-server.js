const path = require('path');

require('esbuild').build({
  entryPoints: [path.resolve(__dirname, '../src/server.jsx')],
  bundle: true,
  outfile: path.resolve(__dirname, '../dist/server.js'),
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  minify: true,
  sourcemap: true,
});
