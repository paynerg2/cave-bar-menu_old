import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const PBOldFashioned = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pb-old-fashioned.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"That is not dead which can eternal lie, And with strange aeons even death may die."`
  const quoteAttribution = `H.P. Lovecraft`

  return (
    <div className="container">
      <div className="cocktail-name underline">Peanut-Butter Old-Fashioned</div>
      <div className="ingredients">Peanut-Butter Whiskey, Rye, Angostura</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default PBOldFashioned
