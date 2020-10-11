import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(19rem,1fr));
.header{
	color:#a2a2a2;
}
.number{
	font-size:50px;
	color:#d9d9da;
}
p{
	color:#0d73cc;
}
.card{
	border: 1px solid #d9d9da;
	padding: 25px;
}
`

function DataFetching() {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => response.json())
		.then((json) => setPosts(json))
		.catch(err => { console.log(err)})
	}, [])

	return (
		<Container style={{textAlign:'left'}}>
			{posts.map(post => <div className="card" key={post.id}><h1 class="header"><span className="number">{post.id}</span> {post.title}</h1><p>{post.body}</p></div>)}
		</Container> 
	)
}
export default DataFetching
