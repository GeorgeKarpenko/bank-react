import React from 'react'

function Bank(){
    return(
		<div className="row">
			<div className="col-sm-6 col-lg-6">
				<blockquote className="blockquote">
				  <h2>Виртуальный банк</h2>
					<p>&nbsp;</p>
				  <small className="blockquote-footer">APIBank дает возможность создать 
	виртуальный банк под собственным брендом или в ко-бренде с нами. 

	Открывайте клиентам счета и выпускайте 
	брендированные дебетовые карты VISA 
	или Mastercard на лицензии крупных банков. </small> 
				</blockquote>
			</div>
			<div className="col-sm-6 col-lg-6 centerPhoto">
				<blockquote className="blockquote">
				  <img alt="bank" src="/images/01.jpg" data-holder-rendered="true" />
				</blockquote>
			</div>
		</div>
    )
}

export default Bank