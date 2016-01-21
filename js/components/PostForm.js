import React from 'react';
import ReactFireMixin from 'reactfire';


var PostForm = React.createClass({
	mixins: [ReactFireMixin],

	getInitialState() {
		return {
	   	post_text: ""
		};
	},

	_onChange(event, value) {
		this.setState({ post_text: event.target.value });
	},

	_onKeyDown(event) {
		if ( event.keyCode === 13) {
			event.preventDefault();
			var text = this.state.post_text.trim();
			if ( text ) {
				this.props.FirebasePostsRef.push({
					post_text: text,
					timestamp: Date.now()
				});
			}
			this.setState({ post_text: "" });
		}
	},

	render() {
		return (
			<textarea 
				className = 'post-input'
				name = 'post'
				value = {this.state.post_text}
				onChange = {this._onChange}
				onKeyDown = {this._onKeyDown}
			/>
		)
	}
})

export default PostForm;
