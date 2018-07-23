import React,{Component} from "react";
import "./index.css";

class Register extends Component{

render(){
		return <div id="register">
		<ul>
			<li><span>姓名：</span><input type="text"/></li>
			<li><span>密码：</span><input type="text"/></li>
			<li><button>注册</button></li>
		</ul>
		
		<span className="tu"><img src="http://www.yijiago.com/h5/static/css/static/images/loginbg.8b53d69.png" alt=""/></span>
		<p className="red">温馨提示</p>
		<p>可以直接通过手机号注册！！！！</p>

		</div>
	}
}


export default Register