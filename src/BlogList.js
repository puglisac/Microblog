import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "./actionCreators";
import Post from "./Post";

const BlogList = () => {
	const dispatch = useDispatch();
	const { posts } = useSelector((st) => st.posts);

	useEffect(
		() => {
			dispatch(getAllPosts());
		},
		[ dispatch ]
	);

	console.log(posts);
	if (!Array.isArray(posts)) {
		return <h1>Loading</h1>;
	}
	return <div className="row">{posts.map((p) => <Post key={p.id} id={p.id} post={p} />)}</div>;
};
export default BlogList;
