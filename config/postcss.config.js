const themeDir = __dirname + "/../themes/enchanted-lowkey/";

const cssnanoPlugin = require("cssnano")({
  path: [themeDir],
  preset: [
    "default",
    {
      discardComments: {
        removeAll: true,
      },
    },
  ],
});

module.exports = {
  plugins: [
    require("tailwindcss")(__dirname + "/tailwind.config.js"),
    require("autoprefixer")({ path: [themeDir] }),
    ...(process.env.HUGO_ENVIRONMENT === "production" ? [cssnanoPlugin] : []),
  ],
};
