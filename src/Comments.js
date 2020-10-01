import React, { useEffect, useState } from "react";
import { Button, Form, Input, FormGroup, InputGroup, InputGroupAddon } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { addComment, getComments, deleteComment } from "./actionCreators";

const Comments = ({ id }) => {
	const dispatch = useDispatch();
	const { comments } = useSelector((st) => st.comments);

	const initialState = {
		comment: ""
	};
	const [ formData, setFormData ] = useState(initialState);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((data) => ({
			...data,
			[name]: value
		}));
	};
	const removeComment = (commId) => {
		dispatch(deleteComment(id, commId));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const { comment } = formData;
		dispatch(addComment(id, comment));
		setFormData(initialState);
	};

	useEffect(
		() => {
			dispatch(getComments(id));
		},
		[ dispatch, id ]
	);
	if (!comments) {
		return <h1>Loading</h1>;
	}
	return (
		<div>
			<h3>Comments</h3>
			<p />
			<ul>
				{comments.map((c) => (
					<p key={c.id}>
						{c.text}
						<Button className="ml-2 btn-sm" color="danger" onClick={() => removeComment(c.id)}>
							<FontAwesomeIcon icon={faTrash} />
						</Button>
					</p>
				))}
			</ul>
			<div className="lead">
				<Form onSubmit={handleSubmit}>
					<FormGroup>
						<InputGroup>
							<Input
								className="text-center"
								onChange={handleChange}
								type="text"
								name="comment"
								id="comment"
								placeholder="add comment"
								value={formData.comment}
							/>
							<InputGroupAddon addonType="append">
								<Button color="primary">Add</Button>
							</InputGroupAddon>
						</InputGroup>
					</FormGroup>
				</Form>
			</div>
		</div>
	);
};
export default Comments;
