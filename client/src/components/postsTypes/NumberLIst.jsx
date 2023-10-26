import React from 'react'

export default function NumberLIst({ data }) {
	return (
		<div>
			{
				data.content.map((item, i) => 
					<p key={`numberList_key_${i}`}><span>{i}. </span> {item}</p>
				)
			}
		</div>
	)
}
