import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

const OurOffer = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Hello, Baking Services!</h1>
        <p>
          If you are on the BPI List, you made it on our radar. Great<br />
          If you are not on the BPI List, no worries.<br />
          We are planning a full new round of delegations.<br />
          We will delegate 1000 xtz at cycle 100 to each<br />
          baking service that needs to be listed on BPI.<br />
          We will repeat the same operation at cycle 200<br />
          for new comers to enter the BPI list.<br />
          Basically every 100 cycles, we will create new<br />
          delegation rounds. If you are here since cycle 100,<br />
          you will obviously keep your baking history in our app.<br />
          If you are a baking service and you need to enter the BPI list<br />
          please get in touch with us and we will get back to you.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  )
}

export default OurOffer;
