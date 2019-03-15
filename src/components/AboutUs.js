import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div>
      <Jumbotron >
        <h1 style={{ justifyContent: 'center' }}>Hello,Tezos Community!</h1><br />
        <p style={{ justifyContent: 'center' }}>
          We are a group of Tezos holders.<br />
          We love the technology behind Tezos and<br />
          we want to help the community grow and organize.<br /><br />

          That is why we decided to start the BAKERS PERFORMANCE INDEX (BPI).<br />
          As it says, <Link to='/'>BAKERS PERFORMANCE INDEX (BPI)</Link> is here to help Tezos holders<br /> who delegates their xtz to a baking service to check & compare their rewards.<br /><br />

          Baking is a totally new industry with bad and good services.<br />
          Time and competition will tell which services will thrive<br />
          and which will get out of business.<br />
          <Link to='/'>BAKERS PERFORMANCE INDEX (BPI)</Link> is here to help in this process<br />
          and to bring transaprency in the baking delegation industry still in its early days.<br /><br />

          Our approach is designed to be plain simple:<br />
          "How much rewards do I get from delegating my XTZ<br />
          to this very specific baking service?<br />
          What is the ROI I can expect at each cycle?<br />
          Are my rewards delivered as announced by the baking service?<br />
          Are the fees announced exact?".<br />
          For this ßeta version we delegated the same small amount of<br />
          10 ꜩ to 60 (sixty)baking services at cycle 34.<br /><br />
          We display raw results such as rewards, ROI(%)<br />
          and balances for the last two cycles and the global
           figures since cycle 34.<br />
          <Link to='/'>BAKERS PERFORMANCE INDEX (BPI)</Link> is here to stay and improve.<br />
          We have a great roadmap in front of us with a lot of work to do and deliver.<br />
          We will add many features and a better design<br />
          to this ßeta version in the coming next weeks.<br /><br />
          We are here to help and we hope that this version<br />
          is valuable to you until next version.<br /><br />
          If you want to support initiative, feel free to make a donation:<br />
          tz1WG2nPzCwXMdiWtZGZUsGiNTcDvV5mM9Td
  </p>
        <p><Link to='/baking-service'><Button variant="primary">Baking Service? Get in Touch</Button></Link></p>
      </Jumbotron >
    </div >
  )
}

export default AboutUs;
