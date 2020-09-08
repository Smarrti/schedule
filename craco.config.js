const path = require("path")

module.exports = {
  webpack: {
    alias: {
      "@ui": path.resolve(__dirname, "./src/ui"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@features": path.resolve(__dirname, "./src/features"),
    },
  },
}
