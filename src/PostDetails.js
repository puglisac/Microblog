import React, { useEffect } from "react";
import { Jumbotron, Button, ButtonGroup } from "reactstrap";
import Comments from "./Comments";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getOnePost } from "./actionCreators";
import Voter from "./Voter";

const PostDetails = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { posts } = useSelector((st) => st.posts);

	const { id } = useParams();

	const removePost = () => {
		dispatch(deletePost(id));
		history.push("/");
	};
	const edit = () => {
		history.push(`/${id}/edit`);
	};
	useEffect(
		() => {
			dispatch(getOnePost(id));
		},
		[ dispatch, id ]
	);

	if (!posts) {
		return <h1>Loading</h1>;
	}

	return (
		<div>
			<Jumbotron>
				<h2 className="display-3">{posts.title}</h2>
				<p className="lead">{posts.body}</p>

				<ButtonGroup>
					<Button color="primary " onClick={edit}>
						Edit Post
					</Button>
					<Button color="danger " onClick={removePost}>
						Delete Post
					</Button>
				</ButtonGroup>

				<hr className="my-2" />
				<Comments key={id} id={id} />
				<Voter id={id} num={posts.votes} />
			</Jumbotron>
		</div>
	);
};

export default PostDetails;
