import React from "react";

class Contact extends React.Component {
  state = {
    email: "",
    message: "",
  };
  
  handleInputChange = e => {
    e.preventDefault(); // --> Prevent Bubbling up
    const { name, value } = e.target; // --> De-reference for clarity
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    console.log("submitted successfully");
  };

  render() {
    return (
      <div className = "contact-form-wrapper">  
        <form onSubmit = {this.handleSubmit} action="https://formspree.io/jlalucescareer123@gmail.com" method="POST">
          <input type="email" name="email" value = {this.state.email} placeholder="Your email" />
          <textarea name="message" value = {this.state.message} placeholder="Test Message"></textarea>
          <button type="submit">Send Test</button>
        </form>
      </div>
    );
  }  
};

export default Contact;