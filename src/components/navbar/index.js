import React, {useState} from "react";
import {Link} from 'react-router-dom'
import './navbar.scss'
export default function NavBar(props) {
    const [items, setItems] = useState([1].concat(new Array(props.children.length-1).fill(0)))
    const Activate = (n) => {
      setItems(items.map((v,i) => i==n ? true:false) )
    }
    return (
    <div className="navbar navbar-expand-lg bg-light navbar-light">
    <Link to="#" id="worder" className="navbar-brand font-weight-light">Worder</Link>
    <div className="collapse navbar-collapse ml-4" id="navbarContent">
      <ul className="navbar-nav mr-auto">
        {
          props.children.map((v,i) => {
            return (
            <Item key={i} isActive={() => items[i]} onClick={() => {Activate(i)}}>
              {v}
            </Item>
            )
          })
        }
      </ul>
    </div>
  </div>)
  
}

function Item(props) {
    

    return <li className={"nav-item " + (props.isActive() ? "active" : "")} onClick={props.onClick}>
        {props.children}
    </li>
}