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
          <p className = "info-section">* Once you submit you will be redirected to verify you are not a spam robot: beep boop</p>

          <form className = "form-element" onSubmit = {this.handleSubmit} action="https://formspree.io/jlalucescareer123@gmail.com" method="POST">
            <div className = "first-wrapper border-bottom">
              <label className = "label-element" htmlFor = "email">                
                <svg style = {{ width : 24, height: 24 }} viewBox="0 0 24 24">
                    <path fill="#ffffff" d="M10,7H14V17H12V9H10V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
                </svg> 
                &nbsp; 
                Email
              </label>
              <input className = "email-input" onChange = {this.handleInputChange} type="email" name="email" value = {this.state.email} placeholder="johnsmith@email.com" />
            </div>

            <div className = "second-wrapper border-bottom">
              <label className = "label-element" htmlFor = "message">
                <svg style = {{ width : 24, height : 24 }} viewBox="0 0 24 24">
                  <path fill="#ffffff" d="M9,7H13A2,2 0 0,1 15,9V11A2,2 0 0,1 13,13H11V15H15V17H11L9,17V13A2,2 0 0,1 11,11H13V9H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
                </svg> 
                &nbsp; 
                Message
              </label>
              <textarea className = "email-text" onChange = {this.handleInputChange} name="message" value = {this.state.message} placeholder="Hey Jonathan just wanted to say..."></textarea>
            </div>
          
            <label htmlFor = "submit" className = "label-element submit-label">
              <svg style = {{ width : 24, height : 24 }} viewBox="0 0 24 24">
                  <path fill="#ffffff" d="M15,15A2,2 0 0,1 13,17H9V15H13V13H11V11H13V9H9V7H13A2,2 0 0,1 15,9V10.5A1.5,1.5 0 0,1 13.5,12A1.5,1.5 0 0,1 15,13.5V15M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
              </svg>
              &nbsp;
              Submit
            </label>
            <button name = "submit" className = "submit-button" type="submit" onSubmit = {this.handleSubmit}>Submit</button>
          </form>

        </div>
      </div>
    );
  }  
};

export default Contact;