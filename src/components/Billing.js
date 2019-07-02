import React from 'react'

function Billing(){
    return(
		<div className="row">
			<div className="col-sm-6 col-lg-6 centerPhoto">
				<img alt="billing" src="/images/02.jpg" data-holder-rendered="true"></img>
			</div>
			<div className="col-sm-6 col-lg-6 order">
				<blockquote className="blockquote">
				  <h2>Биллинг</h2><p>&nbsp;</p>
				  <small className="blockquote-footer">С помощью платформы можно внедрить в сервис решение для расчетов с клиентами — электронные кошельки, ЭДС или подключить возможность холдирования и списания средств со счетов.</small> 
				</blockquote>
			</div>
		</div>
    )
}


export default Billing