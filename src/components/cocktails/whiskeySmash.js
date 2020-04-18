import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const WhiskeySmash = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "whiskey-smash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"I’m just gonna go smash this orange and eat it."`
  const quoteAttribution = `Ben Kissel`

  return (
    <div className="container">
      <div className="cocktail-name underline">Whiskey Smash</div>
      <div className="ingredients">Bourbon, Lemon, Mint</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default WhiskeySmash
