import React from 'react'

function Header(props){
    return(
	<div  className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-9">
          <h1 className="text-left">{props.items.h1}</h1>
        </div>
        <div className="col-sm-6 col-lg-6">
          <p className="text-left">{props.items.text}</p>
          <p>&nbsp;</p>
          <a href={props.items.a} className="registration" role="button">{props.items.name_a}</a>
        </div>
        <div className="col-sm-6 col-lg-6 centerPhoto">
          <img alt={props.items.alt} src={props.items.img} data-holder-rendered="true" />
        </div>
      </div>
    </div>
    )
}


export default Header







