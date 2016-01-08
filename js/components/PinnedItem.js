import React from 'react';

var PinnedItem = React.createClass({
	_deletePost() {
		this.props.FirebasePostsRef.child(this.props.post['.key']).remove();
	},

	render() {
		return(
			<li className="post" >
				<div>
					<span onClick={this._deletePost} >x</span>
				</div>
				<p>
					{ this.props.post['post_text'] }
				</p>
			</li>
		);
	}
})

export default PinnedItem;