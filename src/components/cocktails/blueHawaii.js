import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const BlueHawaii = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "classic-blue-hawaii.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"A blue wind is now knocking at the door to your heart."`
  const quoteAttribution = `Takahashi Youko`

  return (
    <div className="container">
      <div className="cocktail-name underline">Blue Hawaii</div>
      <div className="ingredients">Light Rum, Curacao, Pineapple, Citrus</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default BlueHawaii
