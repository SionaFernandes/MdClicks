# Webpack Basic Setup

A simple webpack configuration for frontend projects.

### Installation

```
npm install
```

### Start Dev Server

```
npm run start
```

### Build Prod Version

```
npm run build
```

- This will replace/rebuild the dist/ folder.
- A bundle.(random number).js is created. (The random nuber is for cache busting) 
- The inline CSS is extracted from the bundle.(random number).js file and a new minified style.(random number).css file is created.
- The Assets folder contains the Images and fonts with the respected images and fonts used.
- Finally, a new index.html file is generated and all the other generated files and assets are linked to it.

### Features:

* SASS/SCSS
* PostCSS (Autoprefixer, PurgeCss - Removes all unused CSS)
* Image (jpeg,gif,svg,webp,png,jpg)
* Fonts (woff,woff2,eot,ttf,otf)
* ES6+ to Es5 with Babel
* Hashing is used for cache busting.

### Plugins

* MiniCssExtractPlugin - Extracts Css in a seperate file
* OptimizeCSSAssetsPlugin - Minifies the extracted CSS
* HtmlWebpackPlugin - Creates a new index.html file in the dis folder and links the style and Js file from dist/
* CleanWebpackPlugin - Deletes the old content from dist/ and rebuilds everything