import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const IrishCoffee = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "irish-coffee.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"You see, I went to The Rainbow to look for a pot of gold."`
  const quoteAttribution = `Ronald McDonald`

  return (
    <div className="container">
      <div className="cocktail-name underline">Irish Coffee</div>
      <div className="ingredients">Irish Whiskey, Coffee, Cream</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default IrishCoffee
