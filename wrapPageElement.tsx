import React from "react"
import Layout from "./src/components/Layout/Layout"

export default function wrapPageElement({ element }) {
  return <Layout>{element}</Layout>
}
