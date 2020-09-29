import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

const Post = ({ id, post }) => {
	return (
		<div className="p-3 my-2 rounded col-6">
			<Toast>
				<a href={`/${id}`}>
					<ToastHeader>{post.title}</ToastHeader>
				</a>
				<ToastBody>{post.description}</ToastBody>
			</Toast>
		</div>
	);
};
export default Post;
