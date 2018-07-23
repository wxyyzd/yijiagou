import React,{Component} from "react";
import "./index.css";
import {NavLink} from 'react-router-dom'
import {connect} from "react-redux";
class Footer extends Component{

	render(){
		return (
			<div id="footer">
			{
				this.props.myfooter?
			
				<aside>

					<ul>
					 <li><NavLink to="/home" activeClassName="active"><b className="iconfont icon-shouye"></b>首页</NavLink></li>
					 <li><NavLink to="/classify" activeClassName="active"><b className="iconfont icon-fenlei"></b>分类</NavLink></li>
					 <li><NavLink to="/shoppingCar" activeClassName="active"><b className="iconfont icon-gouwuche1"></b>购物车</NavLink></li>
					 <li><NavLink to="/my" activeClassName="active"><b className="iconfont icon-wode"></b>我的易家</NavLink></li>
					
					</ul>
				</aside>:null}
			</div>
		)
	}
}


export default connect(

	(state)=>{return {

			myfooter:state.footerreducer }  },null)(Footer)