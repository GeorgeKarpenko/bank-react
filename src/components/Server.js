import React from 'react'

function Server(props){
    return(
		<div className="row">
		  <div className="col-lg-12">
        <h2>{props.items.h2}</h2>
		  </div>
      <div className="col-sm-6 col-lg-6">
        <blockquote className="blockquote">
          <p>&nbsp;</p>
          <small className="blockquote-footer">{props.items.text}</small> 
        </blockquote>
      </div>
      <div className="col-sm-6 col-lg-6 centerPhoto">
        <img  alt={props.items.alt} src={props.items.img} data-holder-rendered="true" />
      </div>
		</div>
    )
}

export default Server