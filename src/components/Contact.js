import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

//CREATE firebase and contact
//https://medium.com/get-it-working/get-googles-firestore-working-with-react-c78f198d2364

const Contact = () => {
  return (
    <div>
      <Jumbotron>
        <h1>CONTACT PAGE</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
  </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>;
    </div>
  )
}

export default Contact;
