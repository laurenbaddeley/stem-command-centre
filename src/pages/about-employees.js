import React from "react"
import { graphql } from "gatsby"

import styles from "./about-employees.module.css"
import Container from "../components/container"
import Layout from "../components/layout"

import ada_lovelace from "../images/ada_lovelace.jpg"
import hedy_lamarr from "../images/hedy_lamarr.jpg"
import henry_ford from "../images/henry_ford.jpg"
import marissa_mayer from "../images/marissa_mayer.png"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} alt="" width="25%" height="25%" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default ({ data }) => (
  <Layout>
    <Container>
      <h1>About Our Employees</h1>
      <p>
        Here is a little bit about our excellent employees at{" "}
        {data.site.siteMetadata.title}.
      </p>
      <User
        username="Marissa Mayer"
        avatar={marissa_mayer}
        excerpt="I'm Marissa Mayer, the CEO of ACME Corporation and I specialise in Artificial Inteliigence. At university, I studied symbolic systems, a major which combined philosophy, cognitive psychology, linguistics, and computer science. I've worked at Google and Yahoo."
      />
      <User
        username="Ada Lovelace"
        avatar={ada_lovelace}
        excerpt="I'm Ada Lovelace. I am a mathematician and writer - you might have read some of my work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. I am often regarded as the first to recognise the full potential of a computing machine, and I am one of the first computer programmers."
      />
      <User
        username="Hedy Lamarr"
        avatar={hedy_lamarr}
        excerpt="I'm Hedy Lamarr, a film actress and inventor. I developed a frequency-hopping signal that could not be tracked or jammed."
      />

      <User
        username="Henry Ford"
        avatar={henry_ford}
        excerpt="I'm Henry Ford. I am an industrialist and a sponsor of the development of the assembly line technique of mass production."
      />
    </Container>
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
