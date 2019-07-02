import React from 'react'

function Footer(props){
    return(
		<footer className="text-center">
        <div className="container" >
		      <div className="col-sm-5 col-auto mx-auto">

		 <p>&nbsp;</p> <p>{props.items.text}</p><p>&nbsp;</p> 
          </div>
        </div>	  
      </footer>
    )
}

export default Footer