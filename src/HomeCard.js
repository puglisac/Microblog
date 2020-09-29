import React from "react";
import { Jumbotron } from "reactstrap";

const HomeCard = (props) => {
	return (
		<div>
			<Jumbotron>
				<h1 className="display-3">Microblog</h1>
				<p className="lead">
					Welcome to <b>Microblog</b>, our innovative site for communicating on the information superhighway.
				</p>
			</Jumbotron>
		</div>
	);
};

export default HomeCard;
