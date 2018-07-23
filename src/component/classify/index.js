import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import { Tabs, WhiteSpace } from 'antd-mobile';
import ReactDOM from "react-dom";
import 'antd-mobile/dist/antd-mobile.css';
import {ActivityIndicator } from "antd-mobile"

class Classify extends Component{
	
	constructor(){
		super();

		this.state = {
			classify:[],
			ifylist:[],
			grainlist:[],
			oillist:[],
			fushilist:[],
			freshlist:[],

			animating:true
		}
	}

	render(){
	const tabs = [
		  // this.state.ifylist.map((item,index)=>{
		  // 	title:{item.cat_name}})
		  { title: '推荐分类' },
		  { title: '粮油副食' },
		  { title: '生鲜熟食' },
		  { title: '全球购' },
		  { title: '酒饮冲调' },
		  { title: '个人洗护' }, 
		  { title: '家居日化' }, 
		  { title: '日用百货' }, 
		  { title: '母婴玩具' },  
		];
		return (<div>
			<div style={{ height: 450}}>
			    <WhiteSpace />
			    <Tabs tabs={tabs}
			      initalPage={'t2'}
			      tabBarPosition="left"
			      tabDirection="vertical"
			    >
			       <div id="ify">
			        		<ul >
			        		{
			        		this.state.classify.map((item,index)=>
			        			<li key={item.cat_id} onClick={this.handleClick.bind(this,item.cat_id)}>
				        			<img src={item.cat_logo} key={item.cat_id} alt={item.cat_logo}/>
				        			<h3>{item.cat_name}</h3>
			        			</li>
								)
			        		}
			        		</ul>
			      </div>
			      <div className="grain">			      		
			      		<dl>
			      			<dt></dt>
			      				<dd>	<ul>
			        		{
			        			this.state.grainlist.map((item,index)=>
			        			<li key={item.cat_id}>
				        			<img src={item.cat_logo} key={item.cat_id} alt={item.cat_logo}/>
				        			<h3>{item.cat_name}</h3>
			        			</li>
								)
			        		}
			        		</ul>
			        	</dd>
			      	</dl>
			      	<dl>
			      			<dt></dt>
			      				<dd>	<ul>
			        		{
			        			this.state.oillist.map((item,index)=>
			        			<li key={item.cat_id}>
				        			<img src={item.cat_logo} key={item.cat_id} alt={item.cat_logo}/>
				        			<h3>{item.cat_name}</h3>
			        			</li>
								)
			        		}
			        		</ul>
			        	</dd>
			      	</dl>
			      	<dl>
			      			<dt></dt>
			      				<dd>	<ul>
			        		{
			        			this.state.fushilist.map((item,index)=>
			        			<li key={item.cat_id}>
				        			<img src={item.cat_logo} key={item.cat_id} alt={item.cat_logo}/>
				        			<h3>{item.cat_name}</h3>
			        			</li>
								)
			        		}
			        		</ul>
			        	</dd>
			      	</dl>	
			      </div>
			      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
			        <ul>
			        		{
			        			this.state.freshlist.map((item,index)=>
			        			<li>
				        			<img src={item.cat_logo} key={item.cat_id} alt={item.cat_logo}/>
				        			<h3>{item.cat_name}</h3>
			        			</li>
								)
			        		}
			        		</ul>
			       </div>
			       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
			        Content of second tab
			      </div>
			       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
			        Content of second tab
			      </div>
			      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
			        Content of second tab
			      </div>
			      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
			        Content of second tab
			      </div>
			    </Tabs>
			    <WhiteSpace />
			  </div>
			  	<ActivityIndicator
                toast
                text="Loading..."
                animating={this.state.animating}
              />
		</div>);
	}


componentDidMount(){
	axios.get("/index.php/topapi?method=category.itemCategory&cat_id=0&showLoading=true&v=v3&_rand=0.05888537839809138").then(res=>{
		// console.log(res.data.data.cat_rel_hot);
		console.log(res.data.data.data);
		this.setState({
			classify:res.data.data.cat_rel_hot,	
			ifylist:res.data.data.data,	
		})
	})
	axios.get("/index.php/topapi?method=category.itemCategory&cat_id=391&showLoading=true&v=v3&_rand=0.03198304489568127").then(res=>{
		
		let obj = res.data.data.lv2
		var list =[];
		for (let i in obj)
			list.push(obj[i])
				console.log(list);

		let obja = list[0].lv3
		var lista=[];
		for (let i in obja) {
			lista.push(obja[i])
			}
				console.log(lista)

				let objb = list[1].lv3
				var listb=[];
				for (let i in objb) {
					listb.push(objb[i])
					}

					let objc = list[2].lv3
					var listc=[];
					for (let i in objc) {
						listc.push(objc[i])
						}

		this.setState({
			grainlist:lista,
			oillist:listb,
			fushilist:listc,

			
			animating:false
		})
	})

	
	
  }
  	handleClick(item){
		
		console.log(this.props);

        localStorage.setItem("id",item);
		this.props.history.push(`/template/${item}`);
	}
  }	


export default Classify