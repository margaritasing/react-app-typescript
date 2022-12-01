import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import logo from '../logo.svg'


export const Navigation = () => {
  return (
    <>
     <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="react-logo" />            
            </nav>
            <ul>
                <li>
                     <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/users">User</NavLink>
                </li>           
            </ul>        
        </div>   
     </BrowserRouter>    
    </>
  )
}
