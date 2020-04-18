import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const CloverClub = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "clover-club.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"I've got to get going already, 
                    until I reach every place."`
  const quoteAttribution = `YUKI`

  return (
    <div className="container">
      <div className="cocktail-name underline">Clover Club</div>
      <div className="ingredients">Gin, Raspberry, Lemon</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default CloverClub
