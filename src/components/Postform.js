import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/postAction'

class Postform extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        let post = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.createPost(post);
       
    }
  render() {
    return (
      <div>
        <h1>Add Form</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Title: </label>
                <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
            </div>
            <br/>
            <div>
                <label>Body: </label>
                <textarea name="body" onChange={this.onChange} value={this.state.body} />
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, {createPost})(Postform);
