import React, {useState} from "react";
import {Link} from 'react-router-dom'

export default function NavBar(props) {
    const [items, setItems] = useState([1,0,0])
    const Activate = (n) => {
      setItems(items.map((v,i) => i==n?true:false) )
    }
    return (
    <div className="navbar navbar-expand-lg bg-light navbar-light">
    <Link to="#" className="navbar-brand font-weight-light">Worder</Link>
    <div className="collapse navbar-collapse ml-4" id="navbarContent">
      <ul className="navbar-nav mr-auto">
        <Item isActive={() => items[0]} onClick={() => {Activate(0)}}> 
          <Link className="nav-link" to="">Home</Link>
        </Item>
        <Item isActive={() => items[1]} onClick={() => {Activate(1)}}>  
          <Link className="nav-link" to="">example</Link>
        </Item>
        <Item isActive={() => items[2]}  onClick={() => {Activate(2)}}>
          <Link className="nav-link" to="">example</Link>
        </Item>
      </ul>
    </div>
  </div>)
  
}

function Item(props) {
    

    return <li className={"nav-item " + (props.isActive() ? "active" : "")} onClick={props.onClick}>
        {props.children}
    </li>
}