import React,{Component} from "react";
import "./index.css";
import ReactSwipe from "react-swipe";
import axios from "axios";
class Home extends Component{
	// constructor(){
	// 	super();

	// 	this.state = {
	// 		homelist:[],
	// 	}
	// }
	render(){
		return (<div>
		{
			// <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto: 3000}} key={this.state.homelist.length}>
			//              // {
			//              // 	this.state.homelist.map((item,index)=>
			//              // 		<img src={item.link} key={item.id} alt={item.linkinfo}/>
			//              // 	)
			//              }
			// </ReactSwipe>
		}
			

		</div>);
	}

//  componentDidMount(){
// 	    axios.get("/index.php/topapi?method=widgets&platform=app2&tml=index&showLoading=true&v=v3&_rand=0.7747976743183231").then(res=>{
// 	      console.log(res.data.data[0].setting.pic);
	      
// 	      this.setState({
// 	      	homelist:res.data.data[0].setting.pic,
// 	      })
// 	    })
// 	  }
}
export default Home