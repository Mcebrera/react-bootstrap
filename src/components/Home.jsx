import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import '../components-css/Home.css';

export default class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome To My Website.</h2>
          <p>This is a simple site built with react, react-bootstrap, and react-router.</p>

          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assests/person-1.png" circle className="profile-pic" />
            <h3>Mike</h3>
            <p>Be so very light. Be a gentle whisper. You need the dark in order to show the light. Every time you practice, you learn more. Get tough with it, get strong.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assests/person-2.jpg" circle className="profile-pic" />
            <h3>Sarah</h3>
            <p>Every day I learn. No worries. No cares. Just float and wait for the wind to blow you around.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assests/person-3.jpg" circle className="profile-pic" />
            <h3>Jim</h3>
            <p>This is your creation - and it's just as unique and special as you are. Now it's beginning to make a little sense. We don't have to be committed. We are just playing here.</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
