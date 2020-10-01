import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import Voter from "./Voter";

const Post = ({ id, post }) => {
	return (
		<div className="p-3 my-2 rounded col-6">
			<Toast>
				<a href={`/${id}`}>
					<ToastHeader>{post.title}</ToastHeader>
				</a>
				<ToastBody>{post.description}</ToastBody>
				<Voter id={id} num={post.votes} />
			</Toast>
		</div>
	);
};
export default Post;
