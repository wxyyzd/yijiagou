import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import {ActivityIndicator } from "antd-mobile"
import ReactSwipe from 'react-swipe';

class Detail extends Component{

	constructor(){
		super();
		this.state={
			detalist:[],

			animating:true
		}
	}
	render(){
	
		return (<div>
		
				<div>
				
						{
							this.state.detalist?
							<ReactSwipe id="carousel" swipeOptions={{continuous: true,auto: 3000,stopPropagation:true}} key={this.state.detalist.length}>
			             {
			             	this.state.detalist.map((item,index)=>
						       
						       		<img src={item} key={item.default_sku_id}/>
						      
						       )
							
			             }
							</ReactSwipe>
							:null
						}
					
				</div>

				<ActivityIndicator
                toast
                text="Loading..."
                animating={this.state.animating}
              />
			    </div>);
			}

	componentDidMount(){
		console.log(this.props.match.params.daid)
		axios.get(`/index.php/topapi?method=item.detail&item_id=${this.props.match.params.daid}&showLoading=true&longitude=121.59347778&latitude=38.94870994&v=v3&_rand=0.9563941358014232&accessToken=52727852a7e03c8064405745051df208240aa4557d5f0b5594aa1f5dd26fc940`)
		.then(res=>{

				console.log(res.data);
			let obj = res.data.data.item.images
			var list = [];
			for (let i in obj) 
			list.push(obj[i]) 
				console.log(list);
				
			this.setState({
				
				detalist:list,

				animating:false
							})	
					})
				}
	}



export default Detail