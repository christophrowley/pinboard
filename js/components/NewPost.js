import React from 'react';


var NewPost = React.createClass({
	getInitialState() {
		return {
			active: false,
			post_text: ''
		};
	},

	componentDidUpdate() {
		if( this.state.active ) {
			console.log( 'I am supposed to be working');
			this.refs.textInput.getDOMNode().focus();
		}  
	},	

	_toggleActivation(event) {
		if( this.state.active ) {
			this.setState({
				active: false,
				post_text: ''
			});
		} else {
			this.setState({ active: true });
		}
	},

	_onChange(event, value) {
		this.setState({ post_text: event.target.value });
	},

	_onKeyDown(event) {
		if( event.keyCode === 13) {
			event.preventDefault();
			var text = this.state.post_text.trim();
			if( text ) {
				this.props.FirebasePostsRef.push({
					post_text: text,
					timestamp: Date.now()
				});
			}
			this.setState({ post_text: "" });
		}
	},

	render() {
		return(
			<li className={ this.state.active ? 'active new post' : 'new post' } onClick={this._toggleActivation} >
				<div className="post-meta"></div>
				<p>
				{ this.state.active ? 
					<textarea 
						ref = 'textInput'
						value = {this.state.post_text}
						onChange = {this._onChange}
						onKeyDown = {this._onKeyDown}
					/> : ''
				}
				</p>
			</li>
		)
	}
})

export default NewPost;
