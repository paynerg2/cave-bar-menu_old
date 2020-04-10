import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const Honeysuckle = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "honeysuckle.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"I must admit that I really like pictures of nude girls and that 
                influenced the way I drew."`
  const quoteAttribution = `Go Nagai`

  return (
    <div className="container">
      <div className="cocktail-name underline">Honeysuckle</div>
      <div className="ingredients">Light Rum, Citrus, Honey</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default Honeysuckle
