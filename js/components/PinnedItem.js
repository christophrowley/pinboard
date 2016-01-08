import React from 'react';

var PinnedItem = React.createClass({
	_deletePost() {
		this.props.FirebasePostsRef.child(this.props.post['.key']).remove();
	},

	render() {
		var timestamp = new Date( this.props.post.timestamp );
		var parsed_timestamp = timestamp.getHours() + ':' + timestamp.getMinutes() + ' - ' + timestamp.getDate().toString() + '/' + (timestamp.getMonth().toString() + 1) + '/' + timestamp.getFullYear().toString();
		return(
			<li className="post" >
				<div>
					<span>{ parsed_timestamp }</span>
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
