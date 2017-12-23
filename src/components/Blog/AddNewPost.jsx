import React, { Component } from 'react';
import * as newPostAction from "../../actions";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import styled from "styled-components";
import { history } from "react-router-dom";
// import autobind from "autobind-decorator";

import {
	Grid, Row, Col, form, FormGroup, FormControl, Button
} from "react-bootstrap";


//   css

const FormWrapperDiv = styled.div`
	background-color: #fff;
	padding: 5rem 2rem;
	&:after{
		content:"";
		clear:both;
		display:table;
	}
`;

const FormMainWrapper = styled.div`
	background-color: #6c08c9;
	padding : 3rem;
`;




class AddNewPost extends Component {


	handleAddPost(e) {
		e.preventDefault();

		let title = this.inputTitle.value.trim();
		let description = this.inputDescription.value.trim();

		const fields = [this.inputTitle, this.inputDescription];

		if((title !== "") && (description !== "")) {
			let makeNewId = _.last(this.props.post).id;
			console.log("=====", makeNewId);

			this.props.actions.newPostAction({
				id : ++makeNewId,
				title : title,
				description : description,
				created_at : +new Date()
			});

			this.props.history.push("/");
			console.log("props", this.props.history)
		}

		if(fields.length > 0){
			fields.forEach((field, val) => {
				field.value = ""
			});
		}
	}

	

	render() {
		
		return (
			<Row >
				<FormWrapperDiv>
				<Col md={6} lgOffset={3} mdOffset={3}>
				<h4>Add New Post</h4>
				<form 
					onSubmit={(e) => this.handleAddPost(e)} 
				>
				<FormMainWrapper>
					<FormGroup>
					<FormControl 
						type="text" 
						name="title" 
						placeholder="Enter Title"
						inputRef={ title => this.inputTitle = title }
					/>
					</FormGroup>
					<FormGroup>
					<FormControl
						componentClass="textarea" 
						name="description" 
						placeholder="Enter Description"
						inputRef = {input => this.inputDescription = input}
					/>
					</FormGroup>
					<Button type="submit" bsStyle="info">Create New Post</Button>
					</FormMainWrapper>
				</form>
				</Col>
				</FormWrapperDiv>
			</Row>
		);
	}
}


const mapStateToProps = (state, props) => {
	return {
		post : state.postReducer.post,
		postProps: props
	}
}

const mapDispatchToProps = (dispatch) => (
	{
		actions: bindActionCreators(newPostAction, dispatch)
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(AddNewPost);