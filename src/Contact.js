import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
      	<div className = "flex">
	      <div>
	      	<h3>Contact Information</h3>
	        <div className ="contact">
	        	<p><b>Mari Allison</b></p>
	        	<p>Email: maritaylor.allison@gmail.com </p>
	        	<p>Phone: (562)243-5626 </p>
	        </div>
	       </div>
	    </div>
      </div>
    );
  }
}

export default Contact;
