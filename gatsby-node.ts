import type { GatsbyNode } from "gatsby"
import { createWpPages } from "./src/create/createWpPages"
import { createWpPosts } from "./src/create/createWpPosts"
import { createWpCaseStudies } from "./src/create/createWpCaseStudies"

export const createPages: GatsbyNode["createPages"] = async methods => {
  // Create Pages
  await createWpPages(methods)
  // Create Posts
  await createWpPosts(methods)
  // Create CPTs (Case Studies)
  await createWpCaseStudies(methods)
}
