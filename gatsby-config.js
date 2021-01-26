require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
require("ts-node").register({ files: true })

module.exports = require("./gatsby-config.ts")
