import React from "react";

class Contact extends React.Component {
  
  handleInputChange = e => {
    e.preventDefault(); // --> Prevent Bubbling up
    const { name, value } = e.target; // --> De-reference for clarity
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className = "contact-form-wrapper">  
        <form action="https://formspree.io/jlalucescareer123@gmail.com" method="POST">
  
        </form>
      </div>
    );
  }  
};

export default Contact;