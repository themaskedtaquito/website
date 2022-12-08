import React, { Component } from 'react';
import './Home.css';
import Search from './Search';

class Home extends Component {

  constructor(props){
    super(props);
    this.setSearch = this.setSearch.bind(this);
    this.state = {
      search: ""
      }
  }

  setSearch(term){
    this.setState({
      search: term
    });
  }

  render() {

    return (
      <div className="Home">
        <div className="Info">
            <h3>What is a ‘Shadow Library’?</h3>
              <p>Shadow libraries are websites that collect digital copies of academic journal articles or other scholarly research that would normally be hidden behind a paywall in order to make them available for everyone to read online. One of the largest and most well known shadow library websites is Sci-Hub.</p>
        </div>
        <div className="Info">
            <h3>Why do shadow libraries exist?</h3>
              <p>Sci-Hub was created by Alexandra Elbakyan as a graduate student from Kazakhstan in response to the extreme and rising costs of accessing articles from academic journals. This problem is an even larger barrier to scholars in countries and universities that cannot afford institution-wide journal subscriptions. Many scholars have said they would have been unable to complete their Masters or PhD programs without access to sources from Sci-Hub.</p>
        </div>
        <div className="Info">
            <h3>What is the sentiment towards shadow libraries?</h3>
              <p>Academic publishers are opposed to shadow libraries because they violate copyright and allow readers to access content without paying for it.</p>
              <p>Shadow library users appreciate being able to learn from research that they would not be able to afford on their own.</p>
              <p><b>One large unknown is how paper authors feel about their work being available in shadow libraries.</b> Right now, the viewpoint of big publishers and shadow library users are the most studied, but authors are also an important party in this system. I invite any scholars using this website to search Sci-Hub for work that you have published and consider what thoughts you have about your work being made available in this way. </p>
        </div>
            <h3>Sci-Hub Search</h3>
            <Search text = {this.state.search} onChange = {this.setSearch}/>
      </div>
    );
  }
}

export default Home;
