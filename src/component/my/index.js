import React,{Component} from "react";
import "./index.css";

class My extends Component{

	render(){
		return <div id="my">
		<p>我的订单<span>查看更多订单</span></p>
		<ul className="u1">
		<li>待付款</li>
		<li>待发货</li>
		<li>待收货</li>
		<li>待销费</li>
		<li>退换货</li>
		</ul>
		<p>我的钱包</p>
		
		<ul className="u2">
		<li>电子购物卡</li>
		<li>返利卷</li>
		<li>积分</li>
		<li>领劵激活</li>
		</ul>
		<ul className="u3">
		<li>电子购物卡</li>
		<li>返利卷</li>
		<li>积分</li>
		<li>领劵激活</li>
		<li>电子购物卡</li>
		<li>返利卷</li>
		<li>积分</li>
		<li>领劵激活</li>
		<li>电子购物卡</li>
		<li>返利卷</li>
		<li>积分</li>
		<li>领劵激活</li>
		</ul>
		</div>
	}
}


export default My