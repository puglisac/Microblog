import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { vote } from "./actionCreators";

const Voter = ({ id, num }) => {
	const [ votes, setVotes ] = useState(num);
	const dispatch = useDispatch();
	const up = () => {
		dispatch(vote(id, "up"));
		setVotes(votes + 1);
	};
	const down = () => {
		dispatch(vote(id, "down"));
		setVotes(votes - 1);
	};

	return (
		<div>
			<p>Votes: {votes}</p>
			<Button onClick={down} color="danger">
				<FontAwesomeIcon icon={faThumbsDown} />
			</Button>

			<Button onClick={up} color="success">
				<FontAwesomeIcon icon={faThumbsUp} />
			</Button>
		</div>
	);
};
export default Voter;
