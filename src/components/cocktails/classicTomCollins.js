import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const ClassicTomCollins = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "classic-tom-collins.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"...he is talking about you in a very rough manner — calling you 
                hard names, and convincing people there is nothing you wouldn't 
                steal short of a red-hot stove."`
  const quoteAttribution = `Man #2 on Tom Collins`

  return (
    <div className="container">
      <div className="cocktail-name underline">Tom Collins</div>
      <div className="ingredients">Gin, Citrus, Soda</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default ClassicTomCollins
