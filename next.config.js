const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
const withSvgr = require("next-svgr");

module.exports = withSvgr(withCSS(withSass({
   webpack (config, options) {
       config.module.rules.push({
           test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
           use: {
               loader: 'url-loader',
               options: {
                   limit: 100000
               }
           }
       });

       return config;
   }
})));