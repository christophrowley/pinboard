import React from 'react';
import ReactFireMixin from 'reactfire';


var PostList = React.createClass({
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
		if( this.state.post_data.length != 0 ) {
			var posts = this.state.post_data.map( function(val) {
				return(
					<div className='post' key={val.key} >
						{ val.post_text }
					</div>
				);
			});
		}

		return(
			<div>
				{ posts ? posts : 'No posts to display' }
			</div>
		);
	}
})

export default PostList;