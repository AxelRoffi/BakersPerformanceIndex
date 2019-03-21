import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BakingService = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Hello, Baking Services!</h1><br />
        <p>
          If you are on the <Link to='/'>BAKERS PERFORMANCE INDEX (BPI)</Link><br /> Great! You made it on our radar.<br /><br />
          If you are not on the <Link to='/'>BPI</Link>, no worries.<br />
          We are planning a full new round of delegations to <br />
          all baking services already on the <Link to='/'>BPI</Link> or not.<br />
          We will delegate <b>1000 XTZ</b> at <b>CYCLE 100</b> to each<br />
          baking service that needs to be on <Link to='/'>BPI</Link>.<br />
          You need to get in touch with us before the beginning of cycle 99.<br /><br />
          We will repeat the same operation at cycle 200<br />
          for new comers to enter the <Link to='/'>BPI</Link>.<br /><br />
          Basically every 100 cycles, we will create new<br />
          delegation rounds. If you are on the <Link to='/'>BPI</Link> since cycle 100,<br />
          you will obviously keep your baking history &<br /><br /> rewards delivery track record in our app.<br /><br />
          If you are a baking service, wether you already are<br /> on the <Link to='/'>BPI</Link> or not,  and you want to be part of this new round of delegations<br />
          please get in touch with us and we will get back to you.
        </p>
        <p>
          <Link to='/contact'><Button variant="primary">GET MY BAKING SERVICE ON THE BPI</Button></Link>
        </p>
      </Jumbotron>
    </div>
  )
}

export default BakingService;
