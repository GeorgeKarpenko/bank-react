import React from 'react'

function Application(props){
    return(
		<div class="row">
			<a href={props.items.a} role="button" className="application">{props.items.name}</a>
		</div>
    )
}

export default Application