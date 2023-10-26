import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import 'resetcss_khc/index.css';
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
}