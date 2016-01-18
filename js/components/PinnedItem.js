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
				<div className="inner">
					<div className="post-meta">
							<span>{ parsed_timestamp }</span>
							<span className="delete" onClick={this._deletePost} ></span>
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
