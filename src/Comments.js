import React, { useState } from "react";
import { Button, Form, Input, FormGroup, InputGroup, InputGroupAddon } from "reactstrap";
import { updateComments } from "./actions";
import { useDispatch } from "react-redux";

const Comments = ({ comments, id }) => {
	const dispatch = useDispatch();
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
	const deleteComment = (text) => {
		const filtered = comments.filter((c) => c !== text);
		dispatch(updateComments(id, filtered));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const { comment } = formData;
		comments.push(comment);
		dispatch(updateComments(id, comments));
		setFormData(initialState);
	};

	return (
		<div>
			<h3>Comments</h3>
			<p />
			<ul>
				{comments.map((c) => (
					<p>
						{c}
						<Button className="ml-2" color="danger" onClick={() => deleteComment(c)}>
							X
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
