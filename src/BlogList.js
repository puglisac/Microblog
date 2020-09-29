import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const BlogList = () => {
	const posts = useSelector((st) => st.posts);
	return (
		<div className="row">
			{Object.keys(posts).map((key) => {
				return <Post key={key} id={key} post={posts[key]} />;
			})}
		</div>
	);
};
export default BlogList;
