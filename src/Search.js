
import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

	constructor(props){
		super(props);
		this.updateText = this.updateText.bind(this);
		this.clearDefault = this.clearDefault.bind(this);
		this.onKeyUp = this.onKeyUp.bind(this);
		this.state ={
			value: "Search"
		};
	};

	clearDefault(){ //clear text from search box when you click on it
		this.setState({
			value: ""
		});
		this.props.onChange("");
	};

	onKeyUp(event) {
		console.log(event);
	    if (event.keyCode === 13) {
	      this.clearDefault()
	    };
	};

	updateText(e){
		let updateTo = e.target.value;
		this.setState({
			value: updateTo
		});
		this.props.onChange(updateTo);
	};

	render() {

    	return (
      		<div className="Inputfield">
        		<input placeholder= "Search your manuscript here" onClick = {this.clearDefault} onChange = {this.updateText} value = {this.props.text} onKeyUp = {this.onKeyUp} type = "search"></input>
      		</div>
   		);
  	}
}

export default Search;
