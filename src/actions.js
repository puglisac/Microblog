import { ADD_POST, DELETE_POST, COMMENT } from "./actionTypes";

export const add = (id, title, description, body) => ({
	type: ADD_POST,
	id,
	title,
	description,
	body
});

export const remove = (id) => ({
	type: DELETE_POST,
	id
});

export const updateComments = (id, comments) => ({
	type: COMMENT,
	id,
	comments
});
