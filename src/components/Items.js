import React from 'react'

function Items(props){
    return(
		<div className="row">
			<div className={props.items.class}>
				<blockquote className="blockquote">
				  <h2>{props.items.h2}</h2><p>&nbsp;</p>
				  <small className="blockquote-footer">{props.items.text}</small> 
				</blockquote>
			</div>
			<div className="col-sm-6 col-lg-6 centerPhoto">
				<img alt={props.items.alt} src={props.items.img} data-holder-rendered="true"></img>
			</div>
		</div>
    )
}


export default Items