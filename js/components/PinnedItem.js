import React from 'react';

var PinnedItem = React.createClass({
	render() {
		return(
			<li className="post" key={this.props.post['.key']} >
				<p>
					{ this.props.post['post_text'] }
				</p>
			</li>
		);
	}
})

export default PinnedItem;