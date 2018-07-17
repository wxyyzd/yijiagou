import React,{Component} from "react";
import "./index.css";
import {NavLink} from 'react-router-dom';
import Search from "../search";
import 'antd-mobile/dist/antd-mobile.css';
class Navbar extends Component{

	render(){
		return <div id="navbar">
					<div className="left">
				<NavLink to="/area" activeClassName="active">地区</NavLink>
					</div>
					<div className="right">
				<NavLink to="/search" activeClassName="active">
				<div className="inner">
				   <Search/>
				  </div> 
				</NavLink>   

			</div>	
		</div>
	}
}


export default Navbar
