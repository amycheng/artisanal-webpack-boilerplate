"Artisanal" Webpack + ES6 + Sass Boilerplate
=============================================

I wanted to learn how to use [webpack](https://webpack.github.io/) so I set out to create the simplest and more barebones boilerplate that would allow me to use [Babel](https://babeljs.io/) to transpile next-gen JS and compile [SASS](https://http://sass-lang.com/). This is what I came up with.

- Amy (4/1/2016)

## To Install

Requirements:
- Node 5+ (reccomended by the Webpack docs)

Run:
- `npm install`

## To use

If you want to build the files: `npm run build`

If you want to start and server and edit files, while viewing the change:
1. `npm run start`
2. navigate to `localhost:8080/webpack-dev-server/bundle` to view changes to your files as you make them (hot loading)

## Notes
- files with `.jsx` will be transpiled by Babel (which why in `src/app.js` you still see ES5 syntax)
- no css file will be generated, webpack makes it all inline via JS

