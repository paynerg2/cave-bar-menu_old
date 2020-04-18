import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const CubaLibre = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cuba-libre.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"JFK blown away what else do I have to say"`
  const quoteAttribution = `Billy Joel`

  return (
    <div className="container">
      <div className="cocktail-name underline">Cuba Libre</div>
      <div className="ingredients">Rum, Coca-Cola, Lime</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default CubaLibre
