import React, { useState, useEffect } from 'react'

function DataFetchingPost() {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		/// POST
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
			  title: 'foo',
			  body: 'bar',
			  userId: 1,
			}),
			headers: {
			  'Content-type': 'application/json; charset=UTF-8',
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

export default DataFetchingPost
