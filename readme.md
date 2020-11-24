# esbuild + Preact + TypeScript starter
This project is a POC implementation of building a web-app with preact and TypeScript, with esbuild as the transpiler + bundler + minifier.

This project builds in 30-40ms. On development, it rebuilds under 10ms (when you make changes). These numbers are taken on a MacBook Pro 13" 2020. 

These numbers of course would increase as the number of modules increase. One idea to improve this is to use [Snowpack](https://github.com/snowpackjs/snowpack) on development, and then only use esbuild when bundling to production.

## Includes
- [**esbuild**](https://github.com/evanw/esbuild), for bundling, transpiling, minifying, and generating source maps
- [**Preact**](https://github.com/preactjs/preact), UI runtime
- [**TypeScript**](https://www.typescriptlang.org/)
- [**Goober**](https://github.com/cristianbote/goober), a less than 1KB css-in-js solution

## Caveats
- Codesplitting is still experimental
  - Codesplitting is only available when outputting to `esm` format. This output can only be used inside `<script type="module">` tag
  - Follow the issue https://github.com/evanw/esbuild/issues/16
- esbuild doesn't seem to handle some cases when targetting `es5`. Some errors occurs like:
  - ```js
     > src/styles/app.ts: error: Transforming tagged template literals to the configured target environment is not supported yet
    73 │ export const AppMain = css`
       ╵                           ^
    > src/styles/app.ts: error: Transforming const to the configured target environment is not supported yet
    73 │ export const AppMain = css`
       ╵        ~~~~~
    ```
  - This basically means if you need to support older browsers that doesn't support ES6 (es2015), esbuild might not be viable for you.
  - Follow the issue https://github.com/evanw/esbuild/issues/297

