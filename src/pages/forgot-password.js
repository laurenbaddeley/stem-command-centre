import React from "react"
import { navigate } from "gatsby"
import { Row, Col, Container, Form, FormControl, Button } from "react-bootstrap"

import Layout from "../components/layout"
import { handlePasswordReset } from "../services/auth"

import doh from "../images/homer-doh.jpg"

/**
 * @desc Page for a user to enter security question details to request a password when forgotten
 */
export default class ForgotPassword extends React.Component {
  state = {
    emailAddress: "",
    dob: "",
    mothersMaiden: "",
    petName: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }


  handleSubmit = event => {
    event.preventDefault()
    let passwordReset = handlePasswordReset(this.state)
    if (passwordReset === true) {
      alert('Your password has been reset to:\n\nS3cur3\n\nPlease write this down before selecting OK.\nYou can now log in with this new password')
      navigate(`/app/login`)
    } else {
      alert('Those details did not match our database. Please ensure you have entered them correctly.')
    }
  }

  render() {
    return (
      <Layout>
        <Container className="text-center">
          <Row>
            <Col>
              <h1>Forgotten your password?</h1>
              <img src={doh} alt="doh" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                Please answer the following security questions to reset your password.
              </h4>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  Email address
                </Form.Label>
                <Col sm={10}>
                  <FormControl 
                    type="email"
                    placeholder="email@acme.com"
                    className="mr-2"
                    name="emailAddress"
                    value={this.state.emailAddress}
                    onChange={this.handleInputChange} 
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalDOB">
                <Form.Label column sm={2}>
                  Date of Birth
                </Form.Label>
                <Col sm={10}>
                  <FormControl 
                    type="date"
                    name="dob"
                    value={this.state.dob}
                    onChange={this.handleInputChange} 
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalMaidenName">
                <Form.Label column sm={2}>
                  Mother's Maiden Name
                </Form.Label>
                <Col sm={10}>
                  <FormControl 
                    type="text"
                    name="mothersMaiden"
                    value={this.state.mothersMaiden}
                    onChange={this.handleInputChange} 
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalPet">
                <Form.Label column sm={2}>
                  Name of First Pet
                </Form.Label>
                <Col sm={10}>
                  <FormControl 
                    type="text"
                    name="petName"
                    value={this.state.petName}
                    onChange={this.handleInputChange} 
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit">Submit</Button>
                </Col>
              </Form.Group>
            </Form>
        </Col>
        </Row>
        </Container>
      </Layout>
    )
  }
}
