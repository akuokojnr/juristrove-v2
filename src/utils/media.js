import { generateMedia } from "styled-media-query"

export const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1240px",
}

const media = generateMedia(breakpoints)

const sm = media.greaterThan("sm")
const md = media.greaterThan("md")
const lg = media.greaterThan("lg")
const xl = media.greaterThan("xl")

export default { sm, md, lg, xl }
