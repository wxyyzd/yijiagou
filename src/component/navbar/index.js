import React,{Component} from "react";
import "./index.css";
import {NavLink} from 'react-router-dom';
import { SearchBar} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
class Navbar extends Component{

	render(){
		return <div id="navbar">
					<div className="left">
				<NavLink to="/area" activeClassName="active">地区</NavLink>
					</div>
					<div className="right">
				<NavLink to="/search" activeClassName="active">
				     <SearchBar
     
				        placeholder="Search"
				        defaultValue="搜索商品"
				        cancelText="搜索"
				        onSubmit={value => console.log(value, 'onSubmit')}
				        onClear={value => console.log(value, 'onClear')}
				        onFocus={() => console.log('onFocus')}
				        onBlur={() => console.log('onBlur')}
				        onCancel={() => console.log('onCancel')}
				        showCancelButton
				        onChange={this.onChange}
				      />
				     
				</NavLink>   

			</div>	
		</div>
	}
}


export default Navbar
