import React from "react";
import axios from "axios"; // For making client request.


class ContactForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleForm = e => {
    axios.post(
      "https://formcarry.com/s/w1rSIoT41mh",
      this.state,
      { headers: { "Accept": "application/json" } }
    )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    e.target.reset()

    e.preventDefault();
  }

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  confirmationMessage = () => {
    alert('Your message was sent! We get in touch soon')
  }

  render() {
    return (
      <div className="col-sm-4 offset-sm-4">
        <form id="contact-form" onSubmit={this.handleForm} >
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.handleFields}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              onChange={this.handleFields} />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea
              className="form-control"
              rows="5"
              message="message"
              onChange={this.handleFields} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.confirmationMessage}>Submit</button>
        </form>
      </div>
    )
  }
}
export default ContactForm2;

//Working Code
// import React from "react";
// import axios from "axios"; // For making client request.


// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "", surname: "", email: "", message: "" };
//   }

//   handleForm = e => {
//     axios.post(
//       "https://formcarry.com/s/yourFormId",
//       this.state,
//       { headers: { "Accept": "application/json" } }
//     )
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
  //     });

  //   e.preventDefault();
  // }

  // handleFields = e => this.setState({ [e.target.name]: e.target.value });

  // render() {
  //   return (
  //     <form onSubmit={this.handleForm}>
  //       <label htmlFor="name">Name</label>
  //       <input type="text" id="name" name="name" onChange={this.handleFields} />

  //       <label htmlFor="surname">Surname</label>
  //       <input type="text" id="surname" name="surname" onChange={this.handleFields} />

  //       <label htmlFor="email">Email</label>
  //       <input type="email" id="email" name="email" onChange={this.handleFields} />

//         <label htmlFor="message">Your Message</label>
//         <textarea name="message" id="message" onChange={this.handleFields}></textarea>

//         <button type="submit">Send</button>
//       </form>
//     );
//   }
// }

// export default Form;
