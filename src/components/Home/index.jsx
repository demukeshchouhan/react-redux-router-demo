import React, { Component } from 'react'
import { connect } from "react-redux";
import Post from "../Blog/Post";

@connect(state => ({ post:state.postReducer.post }))
export default class Home extends Component {
  render() {
    return (
      <div>
        <Post postData={this.props.post}/>
      </div>
    )
  }
}
