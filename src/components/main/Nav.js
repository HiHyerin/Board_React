// import {useState,useEffect} from "react";

import {NavLink} from "react-router-dom";

function Nav(){
    return(
        <nav className="navbar navbar-inverse" style={{"border":"none"}}>
            <div className="container-fluid" style={{"backgroundColor":"#F4CCCC"}}>
                <div className="navbar-header" >
                    <a className="navbar-brand" href="/">나랑 벚꽃 보러 갈래?</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><a href="/" style={{"backgroundColor":"#F9A7A7"}}>Home</a></li>
                    <li><NavLink to="board/list" >게시판</NavLink></li>
                    <li><a href="#">갤러리</a></li>
                    <li><NavLink to="calc/calculator">계산기</NavLink></li>
                </ul>
                <form className="navbar-form navbar-left" action="/action_page.php" >
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search"/>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        </nav>
    )
}
export default Nav;
