import React from 'react';

var PinnedItem = React.createClass({
	_deletePost() {
		this.props.FirebasePostsRef.child(this.props.post['.key']).remove();
	},

	_parseTimestamp( timestamp ) {
		return timestamp.getHours() + ':' + timestamp.getMinutes() + ' - ' + timestamp.getDate().toString() + '/' + (timestamp.getMonth().toString() + 1) + '/' + timestamp.getFullYear().toString();
	},

	render() {
		var timestamp = new Date( this.props.post.timestamp );
		return (
			<li className = 'post' >
				<div className = 'inner'>
					<div className = 'post-meta'>
							<span>{ _parseTimestamp( timestamp ) }</span>
							<span className = 'delete' onClick = {this._deletePost} ></span>
						</div>
					<p>
						{ this.props.post['post_text'] }
					</p>
				</div>
			</li>
		);
	}
})

export default PinnedItem;
