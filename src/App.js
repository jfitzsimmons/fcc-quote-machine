import React, { Component } from 'react';
import './App.css';
import './quotes.js';

class App extends Component {
  render() {
    return (
      <div id="quote-box" className="quote-box">
        <div id="text" className="">

        </div>
        <div id="author" className="">

        </div>
        <button id="tweet-quote" className="">
          <a href="twitter.com/intent/tweet">Tweet</a>
        </button>
        <button id="new-quote" className="" >
          New Quote
        </button>

      </div>
    );
  }
}

export default App;
