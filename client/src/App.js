import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.scss';
import Home from './pages/Home/Home'
import Post from './pages/Post/Post';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/post/:postId' element={ <Post /> } />
			</Routes>
			<Footer />
		</div>
	);
}