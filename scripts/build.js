const path = require('path');

const start = new Date().getTime();

const run = async () => {
  await require('esbuild').build({
    entryPoints: [path.resolve(__dirname, '../src/client.tsx')],
    bundle: true,
    outfile: path.resolve(__dirname, '../public/out.js'),
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
    minify: true,
    sourcemap: true,
    loader: {
      '.png': 'file', // make image file use file-loader
    },
    target: 'es2015'
  });

  console.log('Finished build in', new Date().getTime() - start, 'ms');
}

run();
