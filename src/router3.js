import React from "react";
import { BrowserRouter, NavLink, Route,Routes} from "react-router-dom";
import './navlink.css';
import Products from "./products";
import Member from "./member";
import Home from "./home";

export default function Router3() {
    return (
        <BrowserRouter>
            <nav className="nav">
                <NavLink to='/'
                    className={({ isActive }) => isActive ? "active_menu" : "menu"} 
                    style={({ isActive }) => {
                        return { fontWeight: isActive ? "bold" : "normal" };
                    }}>Home</NavLink>-&nbsp;
                <NavLink to='/products' className={({ isActive }) => isActive ? "active_menu" : "menu"}>
                Products</NavLink>-&nbsp;
                <NavLink to='/member' className={({ isActive }) => isActive ? "active_menu" : "menu"}>
                Member</NavLink>-&nbsp;
                <NavLink to='/contact' className={({ isActive }) => isActive ? "active_menu" : "menu"}>
                Contact</NavLink>
            </nav>
            <Routes style={{margin:'20px'}}>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/member" element={<Member/>}/>
                <Route path="/contact" element={<div style={{textAlign:'center'}}>Contact Page</div>}/>
                <Route path="/*" element={<h1>Error 404 - Page Not Found</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}