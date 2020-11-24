const path = require('path');
const watch = require('node-watch');

const start = new Date().getTime();

const run = async () => {
  let result = await require('esbuild').build({
    entryPoints: [path.resolve(__dirname, '../src/client.tsx')],
    bundle: true,
    outdir: path.resolve(__dirname, '../docs'),
    // enable experimental codesplitting https://github.com/evanw/esbuild/blob/57d6f87e089f44404df5040d2b8a0a12815b6d60/CHANGELOG.md#0516
    splitting: true, 
    define: {
      'process.env.NODE_ENV': JSON.stringify('development'),
    },
    minify: false,
    sourcemap: false,
    loader: {
      '.png': 'file', // make image file use file-loader
    },
    target: 'es2015',
    format: 'esm',

    incremental: true, // used to enable faster rebuild on development
  });

  console.log('Finished build in', new Date().getTime() - start, 'ms');

  // refer to: https://esbuild.github.io/api/#incremental
  watch(path.resolve(__dirname, '../src'), {
    recursive: true, // listens for changes in subdirectory as well
  }, async () => {
    const start = new Date().getTime();
    result = await result.rebuild();

    console.log('Rebuilt in', new Date().getTime() - start, 'ms');
  });
}

run();

console.log('Development server started and watching directory: ./src ...');
