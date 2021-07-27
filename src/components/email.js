import React from "react"
import { Accordion, Card, Row, Col } from "react-bootstrap"

const Email = () => (
  <>
    <h1>Your emails</h1>

    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <Row>
            <Col md={5}><i>From: </i>Henry Ford (henry.ford@acmecorp.com)</Col>
            <Col md={5}><i>Subject: </i>CAKES!!</Col> 
            <Col md={2}><i>Date: </i>30/07/19</Col> 
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p>!!!!CAKES!!!</p>
            <p>It is my birthday today and so I've brought some delicious cakes in.</p>
            <p>Come and help yourself (while stocks last!) :)</p>
            <p>Henry</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          <Row>
            <Col md={5}><i>From: </i>Hedy Lamarr (hedy.lamarr@acmecorp.com)</Col>
            <Col md={5}><i>Subject: </i>Urgent: Bid Needs Reviewed</Col> 
            <Col md={2}><i>Date: </i>03/08/19</Col> 
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <p>Hi Marissa,</p>
            <p>I urgently need you to review the bid that has just come in - I've left a hardcopy on your desk. It is from a big client so we need to review and respond ASAP. I've already had a look through it and written some notes.</p>
            <p>I'll swing by your desk at 4pm today to have a quick chat about this bid.</p>
            <p>Thanks!</p>
            <p>Hedy</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
          <Row>
            <Col md={5}><i>From: </i>Ada Lovelace (ada.lovelace@acmecorp.com)</Col>
            <Col md={5}><i>Subject: </i>Final Report</Col> 
            <Col md={2}><i>Date: </i>08/09/19</Col> 
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <p>Hi Marissa!</p>
            <p>I have finished writing up my report on the Analytical Engine. I have made some interesting discoveries with regards to the full potential of computing machines. I need to send this report over to Charles Babbage by the end of the week. So would you be able to review my report by Wednesday?</p>
            <p>Thank you very much,</p>
            <p>Ada</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3">
          <Row>
            <Col md={5}><i>From: </i>Hedy Lamarr (hedy.lamarr@acmecorp.com)</Col>
            <Col md={5}><i>Subject: </i>Merge Request - Please review</Col> 
            <Col md={2}><i>Date: </i>10/09/19</Col> 
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            <p>Afternoon Marissa,</p>
            <p>I have put a merge request on you for my latest code changes. Please review and merge when you get a chance.</p>
            <p>Thanks,</p>
            <p>H</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="4">
          <Row>
            <Col md={5}><i>From: </i>Ada Lovelace (ada.lovelace@acmecorp.com)</Col>
            <Col md={5}><i>Subject: </i>Team Curry Night</Col> 
            <Col md={2}><i>Date: </i>11/10/19</Col> 
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
            <p>Hi everyone!</p>
            <p>As we are nearly finished our project, and we have all done such a great job, I thought it would be nice if we all went out to celebrate! I am thinking we go out for a curry at the local tandoori place round the corner.</p>
            <p>How does Thursday night work for everyone? 5.30pm after work?</p>
            <p>Please let me know if you can make it and I will book a table!</p>
            <p>Thanks!</p>
            <p>Ada</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="5">
          <Row>
            <Col md={5}><i>From: </i>Henry Ford (henry.ford@acmecorp.com)</Col>
            <Col md={5}><i>Subject: </i>Meeting Request: Project Review</Col> 
            <Col md={2}><i>Date: </i>15/10/19</Col> 
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="5">
          <Card.Body>
            <p>Hi Marissa,</p>
            <p>Are you free for a meeting to discuss the project review on Thursday morning at 10am?</p>
            <p>Cheers,</p>
            <p>Henry</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="6">
          <Row>
            <Col md={5}><i>From: </i>Dr Edward Vil (dr.e.vil@wickedcorp.com)</Col>
            <Col md={5}><i>Subject: </i>Business Proposal</Col> 
            <Col md={2}><i>Date: </i>31/10/19</Col> 
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="6">
          <Card.Body>
            <p>NKRRU SGXOYYG,</p>
            <p>SKKZ SK GZ IIIDOB ZXOIQ RGTK GZ BOOO.DDD GS YNGXV ZUSUXXUC. ZNK VGYYIUJK OY ZCU KOMNZ FKXU YKBKT.</p>
            <p>O RUUQ LUXCGXJ ZU SKKZOTM EUA.</p>
            <p>XKMGXJY,</p>
            <p>JX K. BOR</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="7">
          <Row>
            <Col md={5}><i>From: </i>Henry Ford (henry.ford@acmecorp.com)</Col>
            <Col md={5}><i>Subject: </i>Charity Run</Col> 
            <Col md={2}><i>Date: </i>31/10/19</Col> 
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="7">
          <Card.Body>
            <p>Hi everyone,</p>
            <p>I am running the Tewkesbury Half Marathon for charity and I was hoping to get some sponsors. I am running for my STEM (Science, Technology, Engineering and Maths) Charity, which helps to promote engineering careers to students. Engineering is such a great area to work in and there are SO many jobs that students just aren't aware of.</p>
            <p>So please, spare some change and sponsor me today. There is a sponsor sheet by my desk.</p>
            <p>Thank you very much,</p>
            <p>Henry</p>
            <p>P.S. There are cakes at my desk for anyone who sponsors me! :) </p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </>
)

export default Email
