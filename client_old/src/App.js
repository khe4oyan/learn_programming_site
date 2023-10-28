import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.scss';
import Home from './pages/Home/Home'
import Post from './pages/Post/Post';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import api from './api/api';

export default function App() {
	const [postTypes, setPostTypes] = useState(null);

	useEffect(() => {
		api.getAllPostTypes()
		.then(d => setPostTypes(d))
	}, []);

	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/post/:postId' element={ <Post postTypes={postTypes}/> } />
			</Routes>
			<Footer />
		</div>
	);
}