import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const ClassicGimlet = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "classic-gimlet.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"For I spent all me tin on the lassies drinking gin, far across the 
                western ocean I must wander..."`
  const quoteAttribution = `The Dubliners`

  return (
    <div className="container">
      <div className="cocktail-name underline">Gimlet</div>
      <div className="ingredients">Gin, Citrus</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default ClassicGimlet
