import { groq } from "next-sanity"


export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    ...,
    sections[] {
      ...,
      _type == "newsBlock" => {
      ...,
      newsItem[]-> {
      ...,
        parents[]-> {
          title,
          slug,
        }
      }
      }
    },
    "slug": slug.current,
  }
`

export const pagePathsQuery = groq`
  *[_type == "page" && slug.current != null].slug.current
`


export const getAllBlogsQuery = groq`
  *[_type == "news"] {
  ...,
  newsItem[]-> {
      ...,
        parents[]-> {
          title,
          slug,
        }
      }
}
`