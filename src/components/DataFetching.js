import React, { useState, useEffect } from 'react'

function DataFetching() {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		fetch('https://shankar.free.beeceptor.com/my/api/shankar')
		.then((response) => response.json())
		.then((json) => setPosts(json))
		.catch(err => { console.log(err)})
	}, [])

	return (
		<ul style={{textAlign:'left'}}>
			{posts.map(post => <li key={post.id}>{post.title}</li>)}
		</ul> 
	)
}
export default DataFetching
