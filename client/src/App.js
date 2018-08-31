import React, { Component } from 'react';
import './App.css';
import Comments from './Comments.js'
import axios from 'axios';

class App extends Component {

  state = {
    text: "",
    comments: []
  }

  componentDidMount() {
    this.loadComments();
  }

  loadComments() {
    axios.get('/api/comments')
      .then(({data}) => this.setState({comments: data}))
  }

  addComment(e) {
    e.preventDefault();
    axios.post('/api/comments', {text: this.state.text})
      .then(({data}) => this.loadComments())
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Leave A Comment</h1>
          <form onSubmit={this.addComment.bind(this)} >
            <textarea 
              type="textarea" 
              value={this.state.text} 
              onChange={e => {this.setState({text: e.target.value })}} />
            <br />
            <button type="submit">Submit</button>
          </form>
        </header>
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
