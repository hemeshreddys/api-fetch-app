import React, { Component } from 'react'
import './App.css'
import DataFetching from './components/DataFetching'
import DataFetchingPost from './components/DataFetchingPost'

class App extends Component {
	render() {
		return (
			<div className="App">
				<DataFetching />
			</div>
		)
	}
}

export default App
