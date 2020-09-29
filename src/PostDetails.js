import React from "react";
import { Jumbotron } from "reactstrap";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PostDetails = () => {
	const posts = useSelector((st) => st.posts);
	const { id } = useParams();
	const post = posts[id];
	return (
		<div>
			<Jumbotron>
				<h2 className="display-3">{post.title}</h2>
				<p className="lead">{post.body}</p>
				<hr className="my-2" />
				<Comments comments={post.comments} id={id} />
			</Jumbotron>
		</div>
	);
};

export default PostDetails;
