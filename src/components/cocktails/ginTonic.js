import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./styles.css"

const GinTonic = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gin-and-tonic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const quote = `"85% of all known worlds in the Galaxy, be they primitive or 
                highly advanced, have invented a drink called jynnan tonnyx, or 
                gee-N'N-T'N-ix, or jinond-o-nicks, or any one of a thousand or 
                more variations on the same phonetic theme."`
  const quoteAttribution = `Douglas Adams`

  return (
    <div className="container">
      <div className="cocktail-name underline">{`Gin & Tonic`}</div>
      <div className="ingredients">Gin, Tonic</div>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      <div className="quote">{quote}</div>
      <div className="quote attribution">{quoteAttribution}</div>
    </div>
  )
}

export default GinTonic
