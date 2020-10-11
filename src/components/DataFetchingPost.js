import React, { useState, useEffect } from 'react'

function DataFetchingPost() {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		/// POST
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				userId: 12,
				id: 201,
				title: "Samual",
				completed: false,
			}),
			headers: {
			  'Content-type': 'text/plain',
			  'access-control-allow-origin': '*',
			  'vary': 'Accept-Encoding'
			},
		  })
		.then((response) => response.json())
		.then((json) => {console.log(json);setPosts(json)})
		.catch(err => {console.log(err)})
	}, [])

	return (
		<div>
			{posts.title}
		</div>
	)
}

export default DataFetchingPost;
