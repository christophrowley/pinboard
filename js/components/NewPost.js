import React from 'react';
import ReactDOM from 'react-dom';
import onClickOutside from 'react-onclickoutside';


var NewPost = React.createClass({
	mixins: [onClickOutside],

	getInitialState() {
		return {
			active: false,
			post_text: ''
		};
	},

	componentDidUpdate() {
		if ( this.state.active ) {
			ReactDOM.findDOMNode( this.refs.textInput ).focus();
		}  
	},	

	handleClickOutside( event ) {
		if ( this.state.active ) {
			this.setState({
				active: false,
				post_text: ''
			});
		}
	},

	_activate() {
		if ( !this.state.active ) {
			this.setState({ active: true });
		}
	},

	_onChange( event, value ) {
		this.setState({ post_text: event.target.value });
	},

	_onKeyDown( event ) {
		switch ( event.keyCode ) {
			case 13: // Return key
				event.preventDefault();
				var text = this.state.post_text.trim();
				if ( text ) {
					this.props.FirebasePostsRef.push({
						post_text: text,
						timestamp: Date.now()
					});
				}
				this.setState({ post_text: "" });
				break;
			case 27: // Esc key
				event.preventDefault();
				this.setState({
					active: false,
					post_text: ''
				});
				break;
		}
	},

	render() {
		return (
			<li className = { this.state.active ? 'active new post' : 'new post' } onClick = {this._activate} >
				<div className = 'inner' >
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
				</div>
			</li>
		)
	}
})

export default NewPost;
