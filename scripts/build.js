const path = require('path');

const start = new Date().getTime();

const run = async () => {
  await require('esbuild').build({
    entryPoints: [path.resolve(__dirname, '../src/client.tsx')],
    bundle: true,
    outdir: path.resolve(__dirname, '../docs'),
    // enable experimental codesplitting https://github.com/evanw/esbuild/blob/57d6f87e089f44404df5040d2b8a0a12815b6d60/CHANGELOG.md#0516
    splitting: true, 
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
    minify: true,
    sourcemap: true,
    loader: {
      '.png': 'file', // make image file use file-loader
    },
    target: 'es2015',
    format: 'esm',
  });

  console.log('Finished build in', new Date().getTime() - start, 'ms');
}

run();
