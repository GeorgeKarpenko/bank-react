import React from 'react'

function Business(props){
  	const Elements = props.items.map(item =>
			<div className="col-lg-4 col-md-6 col-sm-12 text-center">
				<img alt={item.name}  src={item.img} data-holder-rendered="true" ></img>
					<p>&nbsp;</p>
				<h4 >{item.name}</h4><p>&nbsp;</p>
			</div>
		)
    return(
		<div className="row busines" >
			{Elements}
		</div> 
    )
	
}

export default Business