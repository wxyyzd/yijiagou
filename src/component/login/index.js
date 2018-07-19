import React,{Component} from "react";
import "./index.css";
import {NavLink} from "react-router-dom"
class Login extends Component{

	render(){
		return <div id="login">
		<div className="top">
		<span >
			<NavLink to="/my" activeClassName="active" className="iconfont icon-jiantouarrowhead7"></NavLink>
		</span>
		<span>登陆</span>
		<span><NavLink to="/register" activeClassName="active">注册</NavLink></span>
		</div>
		<ul>
			<li><span>姓名：</span><input type="text"/></li>
			<li><span>密码：</span><input type="text"/></li>
			<li><button>登陆</button></li>
		</ul>
		
		<span className="tu"><img src="http://www.yijiago.com/h5/static/css/static/images/loginbg.8b53d69.png" alt=""/></span>
		<p className="red">温馨提示</p>
		<p>联盛会员无需注册，请直接用绑定会员卡的手机号码登录，密码为手机后6位。为了您的账户安全，请及时在登录后修改用户密码！</p>

		</div>
	}
}


export default Login