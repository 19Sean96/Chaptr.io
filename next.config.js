const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withSvgr = require("next-svgr");
const withImages = require("next-images");

module.exports = 
// withImages(
  withSvgr(
    withCSS(
      withSass({
        webpack(config, options) {
          config.module.rules.push({
            test: /\.(|eot|ttf|woff|woff2)$/,
            use: {
              loader: "url-loader",
              options: {
                limit: 100000,
              },
            },
          });

          return config;
        },
      })
    )
//   )
);
