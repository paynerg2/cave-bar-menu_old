import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const ClassicManhattan = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "classic-manhattan.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"I am become death, the destroyer of worlds."`
  const quoteAttribution = `J. Robert Oppenheimer `

  return (
    <div className="container">
      <div className="cocktail-name underline">Manhattan</div>
      <div className="ingredients">Rye, Sweet Vermouth, Angostura</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default ClassicManhattan
