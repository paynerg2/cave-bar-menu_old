import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const Cosmopolitan = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cosmopolitan.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"Triple L, baby!"`
  const quoteAttribution = `Henry Zebrowski`

  return (
    <div className="container">
      <div className="cocktail-name underline">Cosmopolitan</div>
      <div className="ingredients">Light Rum, Cointreau, Lime, Cranberry</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default Cosmopolitan
