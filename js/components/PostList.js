import React from 'react';


var PostList = React.createClass({
	render() {
		if( this.props.posts ) {
			var posts = this.props.posts.map( function(val) {
				return(
					<li className='post' key={val['.key']} >
						<p>
							{ val.post_text }
						</p>
					</li>
				);
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
