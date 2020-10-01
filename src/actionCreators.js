import axios from "axios";

const API_URL = "http://localhost:5000/api/posts";

export function getAllPosts() {
	return async function(dispatch) {
		try {
			const { data } = await axios.get(`${API_URL}`);
			data.sort((a, b) => b.votes - a.votes);
			dispatch(gotPosts(data));
		} catch (e) {
			console.log(e);
		}
	};
}

export function getOnePost(id) {
	return async function(dispatch) {
		try {
			const { data } = await axios.get(`${API_URL}/${id}`);
			dispatch(gotPosts(data));
		} catch (e) {
			console.log(e);
		}
	};
}

export function addPost(post) {
	return async function(dispatch) {
		try {
			await axios.post(`${API_URL}/`, post);
		} catch (e) {
			console.log(e);
		}
	};
}
export function editPost(id, post) {
	return async function(dispatch) {
		try {
			await axios.put(`${API_URL}/${id}`, post);
		} catch (e) {
			console.log(e);
		}
	};
}
export function deletePost(id) {
	return async function(dispatch) {
		try {
			await axios.delete(`${API_URL}/${id}`);
		} catch (e) {
			console.log(e);
		}
	};
}
export function gotPosts(posts) {
	return {
		type: "GET_POSTS",
		posts
	};
}

export function addComment(id, text) {
	return async function(dispatch) {
		try {
			await axios.post(`${API_URL}/${id}/comments`, { text });
			const { data } = await axios.get(`${API_URL}/${id}/comments`);
			dispatch(gotComments(data));
		} catch (e) {
			console.log(e);
		}
	};
}

export function deleteComment(postId, commId) {
	return async function(dispatch) {
		try {
			await axios.delete(`${API_URL}/${postId}/comments/${commId}`);
			const { data } = await axios.get(`${API_URL}/${postId}/comments`);
			dispatch(gotComments(data));
		} catch (e) {
			console.log(e);
		}
	};
}

export function getComments(id) {
	return async function(dispatch) {
		try {
			const { data } = await axios.get(`${API_URL}/${id}/comments`);
			dispatch(gotComments(data));
		} catch (e) {
			console.log(e);
		}
	};
}

export function vote(id, direction) {
	return async function() {
		try {
			await axios.post(`${API_URL}/${id}/vote/${direction}`);
		} catch (e) {
			console.log(e);
		}
	};
}

export function gotComments(comments) {
	return {
		type: "GET_COMMENTS",
		comments
	};
}

export function gotError() {
	return {
		type: "ERROR"
	};
}
