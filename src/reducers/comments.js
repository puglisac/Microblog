export default function comments(state = [], action) {
	switch (action.type) {
		case "GET_COMMENTS":
			const comments = { ...state, comments: action.comments };
			return comments;
		default:
			return state;
	}
}
