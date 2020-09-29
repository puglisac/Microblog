import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, ButtonGroup, Jumbotron } from "reactstrap";
import { add } from "./actions";
import { useDispatch } from "react-redux";

const NewPostForm = () => {
	const dispatch = useDispatch();
	const initialState = {
		title: "",
		description: "",
		body: ""
	};
	const [ formData, setFormData ] = useState(initialState);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((data) => ({
			...data,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (e.target.value === "cancel") {
			return;
		}
		const { title, description, body } = formData;
		dispatch(add(title, title, description, body));
		setFormData(initialState);
	};

	return (
		<Jumbotron>
			<h1 className="display-3">New Post</h1>
			<div className="NewPostForm m-5">
				<Form onSubmit={handleSubmit}>
					<FormGroup>
						<Label for="title">Title</Label>
						<Input
							className="text-center"
							onChange={handleChange}
							type="text"
							name="title"
							id="title"
							value={formData.title}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="description">Description</Label>
						<Input
							className="text-center"
							onChange={handleChange}
							type="text"
							name="description"
							id="description"
							value={formData.description}
						/>
					</FormGroup>
					<FormGroup>
						<Label for="body">Body</Label>
						<Input onChange={handleChange} type="textarea" name="body" id="body" value={formData.body} />
					</FormGroup>
					<ButtonGroup>
						<Button type="submit" color="primary">
							Add
						</Button>
						<Button type="button">Cancel</Button>
					</ButtonGroup>
				</Form>
			</div>
		</Jumbotron>
	);
};
export default NewPostForm;
