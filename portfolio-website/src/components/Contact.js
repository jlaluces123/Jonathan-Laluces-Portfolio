import React from "react";
import "../styles/Contact.css";

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
        <div className = "form-wrapper">
          <h1 className = "contact-header">Get In Touch</h1>
          <form className = "form-element" onSubmit = {this.handleSubmit} action="https://formspree.io/jlalucescareer123@gmail.com" method="POST">
            <label className = "label-element" for = "email">Email</label>
            <input className = "email-input" onChange = {this.handleInputChange} type="email" name="email" value = {this.state.email} placeholder="Your email" />
            <label className = "label-element" for = "message">Message</label>
            <textarea className = "email-text" onChange = {this.handleInputChange} name="message" value = {this.state.message} placeholder="Test Message"></textarea>
            <button className = "submit-button" type="submit" onSubmit = {this.handleSubmit}>Send Test</button>
          </form>
        </div>
      </div>
    );
  }  
};

export default Contact;