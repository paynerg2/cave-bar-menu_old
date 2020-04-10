import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const OldFashioned = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "classic-old-fashioned.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"They worshipped, so they said, the Great Old Ones who lived ages before 
                there were any men..."`
  const quoteAttribution = `H.P. Lovecraft`

  return (
    <div className="container">
      <div className="cocktail-name underline">Old-Fashioned</div>
      <div className="ingredients">Bourbon, Angostura, Citrus</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default OldFashioned
