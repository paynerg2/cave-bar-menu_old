import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const ClassicDaiquiri = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "classic-daiquiri.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"And we won't give a damn when we drink our rum with the girls of Old Maui."`
  const quoteAttribution = `Traditional Sea Song`

  return (
    <div className="container">
      <div className="cocktail-name underline">Daiquiri</div>
      <div className="ingredients">Light Rum, Citrus</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default ClassicDaiquiri
