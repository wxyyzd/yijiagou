import React,{Component} from "react";
import "./index.css";
import axios from "axios"
class Search_detail extends Component{
	constructor(props){
      super(props);

      this.state = {
       list:[],
      }
    }
	render(){
		return <div id="search_detail">
			detail
			<ul>
				{
					 this.state.list.map((item)=>
                  <li key={item.gid} >
                  <div className="left">
                  	<img src={item.image_default_id} alt=""/>
                  </div>
                  <div className="right">
                  <p className="shop"><span>商城</span>{item.title}</p>
                  <p className="l"> <span>满优惠</span><b>免邮</b><i>可积分</i></p>
                  <div>
                  <div>

                  	<p className="mkt_price">￥<span>{item.mkt_price}</span></p>
                  	<p className="price"><span>￥{item.price}</span><i>{item.sold_quantity}人付款</i></p>

                  </div>
                  <b className="iconfont icon-gouwuche1"></b>

                  </div>
                  
                  </div>

                  </li>
                    )
				}

			</ul>
		</div>
	}
componentDidMount(){
console.log(encodeURIComponent(this.props.match.params.id))
	
	axios.get(`/index.php/topapi?method=item.listGoods&app_area=province:360000%7Cprovince_name:%E6%B1%9F%E8%A5%BF%E7%9C%81%7Ccity:360400%7Ccity_name:%E4%B9%9D%E6%B1%9F%E5%B8%82%7Carea:360402%7Carea_name:%E6%B5%94%E9%98%B3%E5%8C%BA%7Cdefault_area:%E6%B5%94%E9%98%B3%E5%8C%BA%7Cdefault_address:%E6%B1%9F%E8%A5%BF%E7%9C%81+%E4%B9%9D%E6%B1%9F%E5%B8%82+%E6%B5%94%E9%98%B3%E5%8C%BA&n=${encodeURIComponent(this.props.match.params.id)}&page_no=1&page_size=8&v=v3`).then(res=>{
 	 var newlist=[...res.data.data.itemList]
 	  	 console.log(newlist)

 	  this.setState({
        list:newlist
      })
     
 	})
}
}


export default Search_detail