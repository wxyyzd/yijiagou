import React,{Component} from "react";
import "./index.css";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
class My extends Component{

	render(){
		return <div id="my">
		<div className="top">
		<NavLink to="/login">
		<p className="shezhi">
		<span>设置<b className="iconfont icon-xiaoxi"></b></span>
		</p>
		<div className="bm"><b className="iconfont icon-denglu"></b ><b className="small">登陆/注册</b></div>
		</NavLink>
		</div>



		<p className="dingdan">我的订单<span >查看更多订单<i className="iconfont icon-arrow-right-copy-copy-copy"></i></span></p>
		<ul className="u1">
		<li><b className="iconfont icon-wodedaifukuan"></b>待付款</li>
		<li><b className="iconfont icon-tubiaolunkuo-"></b>待发货</li>
		<li><b className="iconfont icon-daishouhuo"></b>待收货</li>
		<li><b className="iconfont icon-xiaofei01"></b>待销费</li>
		<li><b className="iconfont icon-tuihuanhuo"></b>退换货</li>
		</ul>
		<p>我的钱包</p>
		
		<ul className="u2" id="u2">
		<li><b className="iconfont icon-gouwuqia"></b>电子购物卡</li>
		<li><b className="iconfont icon-fanli"></b>返利卷</li>
		<li><b className="iconfont icon-jifen"></b>积分</li>
		<li><b className="iconfont icon-lingquanzhongxin"></b>领劵激活</li>
		</ul>
		<ul className="u3">
		<li><b className="iconfont icon-membership-card_icon"></b>会员卡</li>
		<li><b className="iconfont icon-chakantieziguanzhu  red" ></b>商品关注</li>
		<li><b className="iconfont icon-guanzhudianpu red"></b>店铺关注</li>
		<li><b className="iconfont icon-weibiaoti2fuzhi06 red"></b>待评论</li>
		<li><b className="iconfont icon-dizhi blue"></b>地址管理</li>
		<li><b className="iconfont icon-xiaoxi origin"></b>联系客服</li>
		<li><b className="iconfont icon-zuji zise"></b>浏览足迹</li>
		<li><b className="iconfont icon-gerenxinxi green"></b>个人信息</li>
		<li><b className="iconfont icon-jifen"></b>积分兑换</li>
		<li><b className="iconfont icon-choujiang"></b>积分抽奖</li>
		<li><b className="iconfont "></b></li>
		<li><b className="iconfont "></b></li>
		</ul>
		</div>
	}
	componentDidMount(){
		 this.props.isshow(true)
	}
}


export default connect(
  null,{
    isshow(data){
      return {
        type:"ishow",
        payload:data
      }
    },

  })(My)