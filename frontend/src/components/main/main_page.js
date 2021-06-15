import React, { Component } from 'react'

export default class MainPage extends Component {
	render() {
		let loggedIn = "";
		if (this.props.isLoggedIn) {
			loggedIn = (
				<span className="user-title"> 
					{this.props.user.username}
				</span>
			)
		}
		return (
			<div>
				<h1>Welcome {loggedIn} to HomeCooked</h1>

				<footer>
					Copyright &copy; 2021 HomeCooked
				</footer>
			</div>
		)
	}
}
