import React from 'react'

export default function PointList({ data }) {
	return (
		<div>
			<ul>
				{
					data.content.map((item, i) =>
						<li key={`PointList_key_${i}`}>{item}</li>
					)
				}
			</ul>
		</div>
	)
}
