import React from 'react'

export default function Paragraph({ data }) {
	return (
		<div
			dangerouslySetInnerHTML={{ __html: data.content }}
		/>
	)
}
