import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

class Banner extends Component {
	render() {
		return (
			<div className="Banner">
				<div className="Name">Sunny Jiao</div>
				<div className="NameSubtitle">
					2B Computer Engineering, University of Waterloo
				</div>
				<div className="SocialIcons">
					<a
						className="github-icon"
						href="https://github.com/chitsbits"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="bi bi-github"></i>
					</a>
					<a
						className="linkedin-icon"
						href="https://www.linkedin.com/in/sunny-jiao/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="bi bi-linkedin"></i>
					</a>
				</div>
			</div>
		);
	}
}

export default Banner;
