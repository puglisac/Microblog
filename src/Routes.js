import React from "react";
import { Switch, Route } from "react-router-dom";
import BlogList from "./BlogList";
import HomeCard from "./HomeCard";
import NewPostForm from "./NewPostForm";
import PostDetails from "./PostDetails";

function Routes() {
	return (
		<div className="container">
			<Switch>
				<Route exact path="/">
					<HomeCard />
					<BlogList />
				</Route>
				<Route exact path="/new">
					<NewPostForm />
				</Route>
				<Route exact path="/:id">
					<PostDetails />
				</Route>
			</Switch>
		</div>
	);
}

export default Routes;
