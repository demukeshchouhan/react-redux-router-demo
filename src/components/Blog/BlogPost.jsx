import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import _ from 'lodash';

import styled from "styled-components";
import {
	Grid, Row, Col
  } from "react-bootstrap";

//   css

const Post = styled.div`
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem #222;
  border: 1px solid #eee;
  padding: 2rem;
  
  &:after {
	  content : "",
	  clear: both;
	  display: block;
  }
`;

const RowDiv = styled(Row)`
	margin-bottom: 0.5rem
`;

const mapStateToProps = (state, props) => ({
	post : state.postReducer.post
});

class BlogPost extends Component {


	render() {
		let postId = Number(this.props.match.params.id);
		var getPostById = 1;
		if(getPostById){
			getPostById = _.find(this.props.post, {"id" : postId});
		}
		console.log(getPostById);
		return (
			<RowDiv> 
				<Col sm={12} md={12}>
				<Post>
					<h2>Single BlogPost</h2>
					<h3>{getPostById.title} <em>{new Date(getPostById.created_at).toLocaleDateString()}</em></h3>
					<p>{getPostById.description}</p>
				</Post>
				</Col>
			</RowDiv>
		);
	}
}

export default withRouter(connect(mapStateToProps)(BlogPost));


