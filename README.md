This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##Microblog

It’s time to build a blogging app that will eventually tie together your learning about React, Router, and Redux, along with full-stack development with a backend. Are you excited? (Hint: Of course you are!)

Two things this exercise is not about:

CSS or design. There are lots of things with React & Redux to work on here, so go with the simplest layout/theme you can.
Authentication: any site visitor will be able to do any of the functionality listed.
Part I: Basic Blog Functionality
This first part will not use Redux and will not use a backend. You should use React state and React Router.

Make a blogging site with the following features:

A site header/navigation box that appears on all pages, with links to the homepage (“Blog”) and a post-add form (“Add a new post”)

(We don’t always show the header on mockups, but this should always appear on all pages).


A “new post” form that lets you enter a title, description, and body. This should be routed to /new.

Canceling should redirect to the homepage.

Saving should also redirect to the homepage.


A “post view” page that shows a post. This should be routed to /[postId].

It should have a button that shows an edit form for the post; this does not need to be routed differently (the url should stay the same). The edit form can look like the new-post form, above.

It should have a button to delete the post. This should redirect to the homepage on deletion.


A “homepage list” that shows the title and description of each post. The title should be a link to the detail of the post. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
