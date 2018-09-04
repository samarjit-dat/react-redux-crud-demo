import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import PostForm from './components/Postform'
import Post from './components/Posts'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Post />
        </div>
      </Provider>
    );
  }
}

export default App;
