import React from 'react';
import ReactFireMixin from 'reactfire';

import Header from './Header.js';
import PostList from './PostList.js';
import PostForm from './PostForm.js';


var PinBoard = React.createClass({
	mixins: [ReactFireMixin],

	getInitialState() {
		return{
			post_data: []
		}
	},

	componentWillMount() {
		this.bindAsArray( this.props.FirebasePostsRef, 'post_data' );
	},

	render() {
		return(
			<div>
				<Header />
				<PostList posts={this.state.post_data} FirebasePostsRef={ this.props.FirebasePostsRef } />
			</div>
		);
	}
})

export default PinBoard;
