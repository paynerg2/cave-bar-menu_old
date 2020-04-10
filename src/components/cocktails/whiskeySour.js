import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const WhiskeySour = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "whiskey-sour.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"Music, the fish stirs in the egg
                  You are there"`
  const quoteAttribution = `Owl Statue`

  return (
    <div className="container">
      <div className="cocktail-name underline">Whiskey Sour</div>
      <div className="ingredients">Bourbon, Lemon, Egg White, Angostura</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default WhiskeySour
