import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import { Carousel, WingBlank } from 'antd-mobile';
class Detail_s extends Component{
	constructor(props){
		super(props);
		this.state={
			data:'',
			list:[]
		}
	}
	render(){
		return <div id="detail_s">
			 <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.list.map((item,index)=> (
            <a
              key={index}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={item}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      <div className="tt">
      <div>
      <p><span>商铺</span>{this.state.data.title}</p>
      <b></b>
      </div>
      <p className="pp">48小时内发货</p>
      <p className="p_bm">
      <span>￥{this.state.data.price}</span>
      <i>￥{this.state.data.mkt_price}</i>
     
      
      <b className="last"><span>剩余</span><i>{this.state.data.realStore}</i>件</b>
      <b className="middle">可积分</b>
      <b className="first">免邮</b>
      </p>
      </div>
      <p className="p_xq">促销满优惠，满49￥立减10￥</p>
      <p className="p_xq">规格</p>
      <p className="p_xq">图片</p>
      <div className="footer">
      <footer>
      <div>
      <span>-</span>
      <input disabled type="number" value="1"/>
      <span>+</span>
      </div>
      <div>
       <b className="iconfont icon-gouwuche1"></b>
      </div>
      <div>
        加入购物车
      </div>

      </footer>
      </div>
		</div>
	}

	componentDidMount(){
		 axios.get(`/index.php/topapi?method=item.detail&item_id=${this.props.match.params.id}&showLoading=true&longitude=121.59347778&latitude=38.94870994&v=v3&_rand=0.18885321148919898&accessToken=dfcc47bac7507cacbb91a0bce418e0550c7425888591423ae3b31ec5a156b473		
`).then(res=>{
   
       console.log(res.data.data.item)
    this.setState({
        data:res.data.data.item,
        list:res.data.data.item.images
      })
    console.log(this.state.data)
    console.log(this.state.data.title)
     
  })
	}
}


export default Detail_s