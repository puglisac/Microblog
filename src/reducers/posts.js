const INITIAL_STATE = { id: { title: "title", description: "description", body: "body", comments: [ "comment" ] } };

export default function posts(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "ADD_POST":
			const { id, title, description, body } = action;
			const posts = { ...state, [id]: { title, description, body } };
			return posts;
		case "DELETE_POST":
			const lessPosts = { ...state };
			delete lessPosts[action.id];
			return lessPosts;
		case "COMMENT":
			const post = state[action.id];
			post.comments = action.comments;
			const comPosts = { ...state, [action.id]: post };
			return comPosts;
		default:
			return state;
	}
}
