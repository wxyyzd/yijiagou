import React,{Component} from "react";
import "./index.css";
import {NavLink} from 'react-router-dom';

import 'antd-mobile/dist/antd-mobile.css';
class Navbar extends Component{

	render(){
		return <div id="navbar">
		<ul>
			<li><NavLink to="/area" activeClassName="active">地区</NavLink></li>
			<li><NavLink to="/search" activeClassName="active"> <input type="text" placeholder="搜索商品" className="input"/></NavLink></li>
			<li><NavLink to="/login" activeClassName="active">消息</NavLink></li>
			

		</ul>



		</div>
	}
}


export default Navbar
