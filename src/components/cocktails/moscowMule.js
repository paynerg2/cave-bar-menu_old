import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const MoscowMule = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "moscow-mule.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"I am afraid a monster is grown that will devour all of us. Yet we must fight him."`
  const quoteAttribution = `Isaac Asimov`

  return (
    <div className="container">
      <div className="cocktail-name underline">Moscow Mule</div>
      <div className="ingredients">Vodka, Citrus, Ginger</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default MoscowMule
