import React from 'react';
import PostList from './PostList.js';
import PostForm from './PostForm.js';


var PinBoard = React.createClass({
	render() {
		return(
			<div>
				<PostList FirebasePostsRef={ this.props.FirebasePostsRef } />
				<PostForm FirebasePostsRef={ this.props.FirebasePostsRef } />
			</div>
		);
	}
})

export default PinBoard;
