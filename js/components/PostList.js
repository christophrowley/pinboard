import React from 'react';

import PinnedItem from './PinnedItem.js';


var PostList = React.createClass({
	render() {
		var _this = this;
		if( this.props.posts ) {
			var posts = this.props.posts.map( function(val) {
				return( <PinnedItem key={val['.key']} post={val} FirebasePostsRef={_this.props.FirebasePostsRef} /> );
			});
		}

		return(
			<ul id='posts' >
				{ posts ? posts : 'No posts to display' }
			</ul>
		);
	}
})

export default PostList;
