import React from 'react'

function Nav(props){
    const navElements = props.items.manu.map(nav =>
      <li key = {nav.name} className="nav-item" className={nav.class}><a className="nav-link disabled" href={nav.a}>{nav.name}</a></li>
    )
    return(
    <nav className="navbar navbar-expand-lg navbar-light container">
      <img alt={props.items.alt} src={props.items.img} data-holder-rendered="true" />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {navElements}
        </ul>
      </div>
    </nav>
    )
}

export default Nav