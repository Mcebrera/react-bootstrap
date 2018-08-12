import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import '../components-css/News.css';

export default class News extends React.Component {
  render() {
    return (
      <div>
        <Image src="assests/mountain-man.jpg" className="header-image" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>They say everything looks better with odd numbers of things. But sometimes I put even numbers—just to upset the critics. All kinds of happy little splashes. But we're not there yet, so we don't need to worry about it.</p>
              <p>Don't be bashful drop me a line. Son of a gun. Van Dyke Brown is a very nice brown, it's almost like a chocolate brown.</p>
              <p>Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. If you didn't have baby clouds, you wouldn't have big clouds. Talent is a pursued interest. That is to say, anything you practice you can do. Here's something that's fun. It's beautiful - and we haven't even done anything to it yet.</p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assests/action-activity.jpg" className="header-image" />
              <p>Don't be bashful drop me a line. Son of a gun. Van Dyke Brown is a very nice brown, it's almost like a chocolate brown.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}