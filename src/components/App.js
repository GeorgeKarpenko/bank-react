import React from 'react'
import Nav from './Nav'
import Header from './Header'
import API from './API'
import Busines from './Busines'
import Bank from './Bank'
import Billing from './Billing'
import Server from './Server'
import Application from './Application'
import Footer from './Footer'
import Items from './Items'
import MetaTags from 'react-meta-tags'
import db from '../db'
//<Bank />
//<Billing />
//<Server />

function App(){
    return(
	<div>
		<MetaTags>
            <title>Bank</title>
    		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
    		<meta name="viewport" content="width=device-width, initial-scale=1" />
            /*<meta property="og:image" content="path/to/image.jpg" />*/
	  	</MetaTags>
        <Nav items = {db.Nav}/>
		<header>
        	<Header items = {db.Header} />
		</header>
        <hr />
        <div className="container">
            <API h2 = {db.API.h2}/>
            <Busines items = {db.Busines} />
            <Items items = {db.Bank} />
            <Items items = {db.Billing} />
            <Server items = {db.Server} />
            <Application items = {db.Application} />
        </div>
        <Footer items = {db.Footer} />
	</div>
    )
}

export default App