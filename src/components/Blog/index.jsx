import React, { Component } from 'react';
import AddNewPost from "./AddNewPost";

import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

@connect(state => ({ post:state.postReducer.post }))
export default class Blog extends Component {

	render() {
		return (	
			<div>
				<AddNewPost history={this.props.history} />
			</div>
		);
	}
}


// const mapStateToProps = (state) => {
// 	return {
// 		post : state.postReducer.post
// 	}
// }

// export default connect(mapStateToProps, {})(Blog);

