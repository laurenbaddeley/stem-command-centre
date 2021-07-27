import React from "react"
import { Link, graphql } from "gatsby"
import { Card } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./news.module.css"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout pageInfo={{ pageName: "news" }}>
        <SEO title="All posts" />
        <div align="center">
          <h1>News and Events</h1>
        </div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <div align="center">
                <Card border="dark" style={{width:'70%'}}>
                  <Card.Body>
                    <Card.Title>
                      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                      </Link>
                    </Card.Title>
                    <Card.Text>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </Card.Text>
                    <img src={node.frontmatter.image.childImageSharp.resolutions.src} alt="thumbnail" className={styles.center}/>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Posted on {node.frontmatter.date}</small>
                  </Card.Footer>
                </Card>
              </div>
              <br />
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image {
              id
              childImageSharp {
                id
                resolutions {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
