import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, ButtonGroup, Jumbotron } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editPost } from "./actionCreators";
import { getOnePost } from "./actionCreators";

const EditPostForm = () => {
	const { posts } = useSelector((st) => st.posts);
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();

	const initialState = {
		title: posts.title,
		description: posts.description,
		body: posts.body
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
			history.push("/");
		} else {
			dispatch(editPost(id, formData));
			history.push("/");
		}
	};
	const cancel = () => history.push("/");

	useEffect(
		() => {
			dispatch(getOnePost(id));
		},
		[ dispatch, id ]
	);

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
						<Button type="submit" color="success">
							Edit
						</Button>
						<Button onClick={cancel} type="button">
							Cancel
						</Button>
					</ButtonGroup>
				</Form>
			</div>
		</Jumbotron>
	);
};
export default EditPostForm;
