import React from "react"
import { Link, navigate } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

import { getUser, isLoggedIn, logout } from "../services/auth"


const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)

  const content = { message: "", login: true }
  if (isLoggedIn()) {
    content.message = `Hello, ${getUser().name}`
  } else {
    content.message = "You are not logged in"
  }

  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        <Navbar.Brand as="span">{content.message}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/about" className="link-no-style">
              <Nav.Link as="span" eventKey="about">
                About
              </Nav.Link>
            </Link>
          </Nav>
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/about-employees" className="link-no-style">
              <Nav.Link as="span" eventKey="about-employees">
                The Team
              </Nav.Link>
            </Link>
          </Nav>
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/news" className="link-no-style">
              <Nav.Link as="span" eventKey="news">
                News
              </Nav.Link>
            </Link>
          </Nav>
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/app/profile" className="link-no-style">
              <Nav.Link as="span" eventKey="app/profile">
                Profile
              </Nav.Link>
            </Link>
          </Nav>
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/app/email" className="link-no-style">
              <Nav.Link as="span" eventKey="app/email">
                Emails
              </Nav.Link>
            </Link>
          </Nav>
          {isLoggedIn() ? (
            <a href="/" onClick={event => {
                event.preventDefault()
                logout(() => navigate(`/app/login`))
              }}
            >
              Logout
            </a>
          ) : (
            <a href="/" onClick={event => {
                event.preventDefault()
                navigate(`/app/login`)
              }}
            >
              Login
            </a>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default CustomNavbar
