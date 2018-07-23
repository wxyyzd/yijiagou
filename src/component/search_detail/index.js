import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import ReactDOM from "react-dom";
import { PullToRefresh, Button } from 'antd-mobile';

class Search_detail extends Component{
	constructor(props){
      super(props);

      this.state = {
       list:[],
       refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,

      }
    }
componentDidMount(){
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
  axios.get(`/index.php/topapi?method=item.listGoods&app_area=province:360000%7Cprovince_name:%E6%B1%9F%E8%A5%BF%E7%9C%81%7Ccity:360400%7Ccity_name:%E4%B9%9D%E6%B1%9F%E5%B8%82%7Carea:360402%7Carea_name:%E6%B5%94%E9%98%B3%E5%8C%BA%7Cdefault_area:%E6%B5%94%E9%98%B3%E5%8C%BA%7Cdefault_address:%E6%B1%9F%E8%A5%BF%E7%9C%81+%E4%B9%9D%E6%B1%9F%E5%B8%82+%E6%B5%94%E9%98%B3%E5%8C%BA&n=${encodeURIComponent(this.props.match.params.id)}&page_no=1&page_size=8&v=v3`).then(res=>{
   var newlist=[...res.data.data.itemList]
       console.log(newlist)
    this.setState({
      height: hei,
        list:newlist
      })
     
  })
}
detailClick(item){
 this.props.history.push(`/detail_s/${item}`)
}
     render() {
    return (<div id="search_detail">
        <Button
        style={{ marginBottom: 15 }}
        onClick={() => this.setState({ down: !this.state.down })}
      >
        direction: {this.state.down ? 'down' : 'up'}
      </Button>
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
        direction={this.state.down ? 'down' : 'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
          this.setState({ refreshing: true });
          axios.get(`/index.php/topapi?method=item.listGoods&app_area=province:360000%7Cprovince_name:%E6%B1%9F%E8%A5%BF%E7%9C%81%7Ccity:360400%7Ccity_name:%E4%B9%9D%E6%B1%9F%E5%B8%82%7Carea:360402%7Carea_name:%E6%B5%94%E9%98%B3%E5%8C%BA%7Cdefault_area:%E6%B5%94%E9%98%B3%E5%8C%BA%7Cdefault_address:%E6%B1%9F%E8%A5%BF%E7%9C%81+%E4%B9%9D%E6%B1%9F%E5%B8%82+%E6%B5%94%E9%98%B3%E5%8C%BA&n=${encodeURIComponent(this.props.match.params.id)}&page_no=2&page_size=8&v=v3`).then(res=>{
   var newlist=[...this.state.list,...res.data.data.itemList]
       console.log(newlist)

    this.setState({
      refreshing: false,
        list:newlist
      })
     
  })
           
        }}
      >
        <ul >
				{
					 this.state.list.map((item)=>
                  <li key={item.gid} onClick={this.detailClick.bind(this,item.gid)} >
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
      </PullToRefresh>
    </div>);
  }
	

}


export default Search_detail