import React from "react";
//import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import NavLink from "../NavLink/NavLink";

class Nav extends React.Component {
    constructor(props) {
        super()
    }
    render(){
        return <nav className={style.nav}>
            <NavLink to={'/home'} >
                <span>Home</span>
            </NavLink>
            <NavLink to={'/about'}>
                <span>About</span>
            </NavLink>
            <NavLink to={'/favorites'}><span>Favorites</span></NavLink>
            <SearchBar onSearch={this.props.onSearch} />
        </nav>
    }
}

export default Nav;
