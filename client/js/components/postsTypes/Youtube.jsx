import React from 'react'

export default function Youtube({ data }) {
	return (
		<div>
			<iframe id="ytplayer" type="text/html" width="640" height="360"
				src={ data.content }
				frameborder="0">
			</iframe>
		</div>
	)
}
