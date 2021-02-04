import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = async () => {
		const res = await fetch('/posts');
		const data = await res.json();
		setPosts(data);
		console.log(posts);
	};

	return (
		<div className="App">
			<h1>BN React JSON Server Starter</h1>
			<h2>Features:</h2>
			<ul className="features">
				<li>
					Thanks to concurrenlty package you can run development server and
					json-server with one command only!
				</li>
				<li>
					I chose json-server for local database thanks to it's flexibilty to
					create custom data
				</li>
				<li>
					You can checkout the local mockup data here: &nbsp;
					<a href="http://localhost:5000/posts">http://localhost:5000/posts</a>
				</li>
				<li>
					This project is with uses proxy for &nbsp;
					<code>'http://localhost:5000'</code> so you can use just &nbsp;
					<code>'/posts'</code> to fetch the data not &nbsp;
					<code>'http://localhost:5000/posts'</code>
				</li>
			</ul>
			<hr />
			<h2>Mock up data:</h2>
			{posts.map(post => (
				<div className="post">
					<h2>{post.title}</h2>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	);
};

export default App;
