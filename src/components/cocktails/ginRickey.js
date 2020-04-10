import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const GinRickey = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gin-rickey.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"How dare you interrupt my lime rickey!"`
  const quoteAttribution = `Charles Montgomery Burns`

  return (
    <div className="container">
      <div className="cocktail-name underline">Gin Rickey</div>
      <div className="ingredients">Gin, Citrus, Soda</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default GinRickey
