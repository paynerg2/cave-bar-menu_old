import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const DarkAndStormy = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "dark-and-stormy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"I gazed proudly up at the sky and remembered something Mr. Rihaku had said while 
                we were drinking together, It made me feel so cheerful, I felt I wanted to recite it 
                like a spell to protect me. I murmured it to myself. The night is short - walk on, girl."`
  const quoteAttribution = `Tomihiko Morimi`

  return (
    <div className="container">
      <div className="cocktail-name underline">{`Dark & Stormy`}</div>
      <div className="ingredients">Dark Rum, Citrus, Ginger, Soda</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default DarkAndStormy
