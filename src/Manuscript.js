import React, { Component } from 'react';
import './Manuscript.css';

class Manuscript extends Component {
  render() {
    return (
      <div className="Manuscript">
      	<div className = "flex">
	      <div>
	      	<h3>About this site</h3>
	        <div className ="description">
	        	<p>This website was created as a scholarly translation of a manuscript written by Mari Allison. A PDF of the original manuscript can be downloaded <a target = "blank" href = "/O’Brien_Assignment2DraftManuscript.pdf">here</a>. The manuscript calls for further research to be done surveying the perspectives of paper authors. Once that research is completed, both the summarized findings and the raw data will be made available in the Results tab.
	        	</p>

	        </div>
	        <div className ="embed">
	        	<iframe src="/O’Brien_Assignment2DraftManuscript.pdf" width ="80%" height ="600px"></iframe>
	        </div>
	       </div>
	    </div>
      </div>
    );
  }
}

export default Manuscript;
