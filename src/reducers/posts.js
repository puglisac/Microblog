// const INITIAL_STATE = { id: { title: "title", description: "description", body: "body", comments: [ "comment" ] } };

export default function posts(state = [], action) {
	switch (action.type) {
		case "GET_POSTS":
			const allPosts = { ...state, posts: action.posts };
			return allPosts;

		default:
			return state;
	}
}
