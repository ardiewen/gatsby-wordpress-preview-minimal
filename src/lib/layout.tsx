import React from "react"
import { Hero, HeroData } from "../components/Sections"

type Layouts = Array<HeroData>

export const getLayouts = (layouts: Layouts = []) =>
  layouts?.map((section, index) => {
    switch (section.__typename) {
      case `WpPage_Acf_Layouts_Hero`:
        return <Hero key={index} data={section} />
      default:
        throw new Error(`[Error] Unhandled section type: ${section.__typename}`)
    }
  })
