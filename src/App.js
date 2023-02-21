
import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

class App extends Component {
  pageSize = 10;
  // apiKey = "f07735d34aa04c6bbb8855de5fb9e802"
  // access by environement variables ,,can accessed if start with REACT_APP_
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            height='3'
            color='#f11946'
            progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}npm
          />
          <Navbar />
          <Routes>
            {/* usekeys to alter the page content on click */}
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.pageSize} country="in" category="general" />} />

            <Route exact path="/business " element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='business' pageSize={this.pageSize} country="in" category="business" />} />

            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pageSize={this.pageSize} country="in" category="sports" />} />

            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize={this.pageSize} country="in" category="entertainment" />} />

            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pageSize={this.pageSize} country="in" category="health" />} />

            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize={this.pageSize} country="in" category="technology" />} />
          </Routes >
        </Router >
      </div >
    );
  }
}

export default App;