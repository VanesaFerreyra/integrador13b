import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";

class Nav extends React.Component {
    constructor(props) {
        super()
    }
    render(){
        return <nav className={style.nav}>
            <Link to={'/home'} >
                <button>Home</button>
            </Link>
            <Link to={'/about'}>
                <button>About</button>
            </Link>
            <SearchBar onSearch={this.props.onSearch} />
        </nav>
    }
}

export default Nav;
