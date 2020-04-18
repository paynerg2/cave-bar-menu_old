import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const WhiteLady = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "white-lady.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"Lorem ipsum dolor sit amet."`
  const quoteAttribution = `Placeholder`

  return (
    <div className="container">
      <div className="cocktail-name underline">White Lady</div>
      <div className="ingredients">Gin, Cointreau, Lemon</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default WhiteLady
