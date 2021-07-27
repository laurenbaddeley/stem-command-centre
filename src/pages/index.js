import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import { getUser, isLoggedIn } from "../services/auth"
import Layout from "../components/layout"
import SEO from "../components/seo"


/**
 * @desc Graphyql query to get the site title and the main page logo
 */
export default ({ data }) => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`stem`, `command`, `centre`]} />
      <Container className="text-center">
        <Row>
          <Col>
            <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
            <p>
              {isLoggedIn() ? (
                <>
                  You are logged in, so check your <Link to="/app/email">emails</Link>
                </>
              ) : (
                <>
                  You should <Link to="/app/login">log in</Link> to see restricted
                  content
                </>
              )}
            </p>
          </Col>
        </Row> 
      </Container>
  </Layout>
)

/**
 * @desc Graphyql query to get the site title and the main page logo
 */
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "images/acme_logo.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
