import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const JohnCollins = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "john-collins.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"Literally just a Tom Collins but with bourbon."`
  const quoteAttribution = `Placeholder`

  return (
    <div className="container">
      <div className="cocktail-name underline">John Collins</div>
      <div className="ingredients">Bourbon, Lemon, Soda</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default JohnCollins
