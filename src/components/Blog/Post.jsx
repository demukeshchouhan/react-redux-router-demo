import React, { Component } from 'react';
// import format from "date-format";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
	Grid, Row, Col
  } from "react-bootstrap";

//   css

const PostDiv = styled.div`
	background-color: #fff;
	padding: 2rem;
	box-shadow: 0 0.3rem 1rem #eee;
	border-bottom: 0.01rem solid #d1b9e7;
`;

const PostDate = styled.p`
  color : #ccc;
`;

const PostDateSpan = styled.span`
  color : #aaa;
`;

const PostDateH2 = styled.h2`
  font-size: 2.5rem;
  color : #6c08c9;
`;

export default class Post extends Component {
	
	render() {
	let postData = this.props.postData;
	var breakBR = null;
	let post = postData.map((key) => {
	if(key.id % 3 === 0){
		breakBR = <br/>;
	};

		return(
			<Col sm={12} md={4} key={key.id} >
			<PostDiv>
				<Link to={"blog/post/"+ Number(key.id)}>
					<PostDateH2>{key.title}</PostDateH2>
					<hr/>
				</Link>
				<p>{key.description}</p>
				<PostDate><PostDateSpan>Created on: </PostDateSpan>{new Date(key.created_at).toLocaleDateString()}</PostDate>
			</PostDiv>
			{breakBR}
			</Col>
		);
		
	});

		return (
			<Row>
				{post}
			</Row>
		);
	}
}
