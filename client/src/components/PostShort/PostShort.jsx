import React from 'react'
import { Link } from 'react-router-dom';

export default function PostShort({ data }) {
	const {
		id,
		title,
	} = data;

	return (
		<Link to={`/post/${id}`}>
			{title}
		</Link>
	)
}
