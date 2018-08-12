import React from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import '../components-css/About.css';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Image src="assests/action-activity.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assests/person-1.png" className="about-profile-pic" rounded />
            <h3>Michael Cebrera</h3>
            <p>We'll lay all these little funky little things in there. This is probably the greatest thing that's ever happened in my life. The shadows are just like the highlights, but we're going in the opposite direction. I can't think of anything more rewarding than being able to express yourself to others through painting. The first step to doing anything is to believe you can do it. See it finished in your mind before you ever start. Use what you see, don't plan it.</p>
            <p>We'll make some happy little bushes here. I get carried away with this brush cleaning. Just make a decision and let it go. With practice comes confidence. If you don't think every day is a good day - try missing a few. You'll see. Let that brush dance around there and play.</p>
            <p>If you hypnotize it, it will go away. Maybe there's a happy little Evergreen that lives here. It's a super day, so why not make a beautiful sky? It looks so good, I might as well not stop. Volunteering your time; it pays you and your whole community fantastic dividends.</p>
          </Col>
        </Grid>
      </div>
    );
  }
}
