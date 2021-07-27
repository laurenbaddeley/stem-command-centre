import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import acme_extra_logo from "../images/acme_extra_logo.jpg"

export default ({ data }) => (
  <Layout  pageInfo={{ pageName: "about" }}>
    <SEO title="About" />
      <div align="center">
        <img src={acme_extra_logo} alt="acme_extra_logo"/>
        <h1>About Acme Corporation</h1>
    </div>
    <p align="justify">Acme means "pinnacle", so the name was sometimes used to symbolize the best. An early global Acme brand name was the "Acme City" whistle made from mid 1870s onwards by J Hudson & Co, followed by the "Acme Thunderer", and "Acme siren" in 1895. The name became particularly popular for businesses in the 1920s, when alphabetized business telephone directories such as the Yellow Pages began to be widespread: A name at the beginning of the alphabet would be listed first, and a name implying "the best" was even better. There was a flood of businesses named Acme; some survive to this day, including Acme Brick, Acme Markets, and Acme Boots. Early Sears catalogues contained a number of products with the "Acme" trademark, including anvils, which are frequently used in Warner Bros. cartoons. The ubiquitousness of the name became something of a joke.</p>
    <p align="justify">Warner Brothers animator Chuck Jones has said the name Acme was chosen because of its prevalence:</p>
    <p align="justify" style={{  maxWidth: 1200, padding: `0 2rem` }}><i>"Since we had to search out our own entertainment, we devised our own fairy stories. If you wanted a bow and arrow you got a stick. If you wanted to conduct an orchestra you got a stick. If you wanted a duel you used a stick. You couldn't go and buy one; that's where the terms Acme came from. Whenever we played a game where we had a grocery store or something we called it the ACME corporation. Why? Because in the yellow pages if you looked, say, under drugstores, you'd find the first one would be Acme Drugs. Why? Because "AC" was about as high as you could go; it means the best; the superlative."</i></p>
    <p align="justify">The name Acme also had other connotations for people in Los Angeles at the time. During the time the Warner Bros. cartoons were being produced, the traffic lights in Los Angeles were manufactured by the Acme Traffic Signal Company. The traffic lights paired "Stop" and "Go" semaphore arms with small red and green lights. Bells played the role of today's amber or yellow lights, ringing when the flags changed—a process that took five seconds. The Acme semaphore traffic lights were often used in Warner Bros.' Looney Tunes and Merrie Melodies cartoons for comedic effect due to their loud bell which was often followed by screeching tires and many sight gags.</p>
    <p align="justify">It is a misconception that Acme is an acronym standing for such things as "A Company Making Everything", "American Companies Make Everything" or "American Company that Manufactures Everything".</p> 
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
