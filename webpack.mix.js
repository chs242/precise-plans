let mix = require('laravel-mix');

mix.js('src/app.js', 'static/app.js')
  .postCss('src/app.css', 'static/app.css', [
    require("tailwindcss"),
  ])
