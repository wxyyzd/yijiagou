import React,{Component} from "react";
import "./index.css";
import axios from "axios";

class Template extends Component{

	constructor(){
		super();
		this.state={
			filminfo:[],
			temlist:[],
		}
	}
	render(){
				
		return (<div>
		
				<div id="film">
					<ul>
						{
							this.state.temlist.map((item,index)=>
						       <li key={item.item_id} onClick={this.handClick.bind(this,item.gid)}>
							       	<img src={item.image_default_id} key={item.item_id} />
							       <h3>{item.title}</h3>
								       <div className="temp">
									       <p>￥{item.mkt_price}</p>
									       <h4>￥{item.price}</h4>
									       <h5>{item.sold_quantity}人付款</h5>
									       </div>
						       </li>
						       )
						}
					</ul>
				</div>

			    </div>);
			}

	componentDidMount(){
		console.log(this.props.match.params.myid)
		axios.get(`/index.php/topapi?method=item.listGoods&cat_id=${this.props.match.params.myid}&page_no=1&page_size=8&v=v3&_rand=0.4511459553498196&accessToken=52727852a7e03c8064405745051df208240aa4557d5f0b5594aa1f5dd26fc940&app_area=province:210000%7Cprovince_name:%E8%BE%BD%E5%AE%81%E7%9C%81%7Ccity:210200%7Ccity_name:%E5%A4%A7%E8%BF%9E%E5%B8%82%7Carea:210202%7Cdefault_area:%E5%A4%A7%E8%BF%9E%E5%B8%82%7Cdefault_address:%E8%BE%BD%E5%AE%81%E7%9C%81+%E5%A4%A7%E8%BF%9E%E5%B8%82+`)
		.then(res=>{
				console.log(res.data.data.brandData);
				console.log(res.data.data.itemList);
			this.setState({
				
				filminfo:res.data.data.brandData,
				temlist:res.data.data.itemList
							})	
					})
				}
				  	handClick(item){
						console.log(this.props);
				        localStorage.setItem("id",item);
						this.props.history.push(`/Detail/${item}`);
					}
	}



export default Template