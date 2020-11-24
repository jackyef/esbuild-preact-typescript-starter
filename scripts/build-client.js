const path = require('path');

require('esbuild').build({
  entryPoints: [path.resolve(__dirname, '../src/client.jsx')],
  bundle: true,
  outfile: path.resolve(__dirname, '../public/out.js'),
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  minify: true,
  sourcemap: true,
});
