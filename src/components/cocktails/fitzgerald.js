import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const Fitzgerald = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "fitzgerald.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"You've met with a terrible fate, haven't you?"`
  const quoteAttribution = `Happy Mask Salesman`

  return (
    <div className="container">
      <div className="cocktail-name underline">Fitzgerald</div>
      <div className="ingredients">Gin, Citrus, Angostura</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default Fitzgerald
