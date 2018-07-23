
import React from "react" //解析jsx语法
import { HashRouter as Router, Route, Redirect,Switch } from "react-router-dom";

import Home from "../component/home";
import ShoppingCar from "../component/shoppingCar";
import My from "../component/my";
import Search from "../component/search"
import Classify from "../component/classify"
import Template from "../component/template"
import Detail from "../component/Detail"
import App from "../App";

const router = 	(
	<Router>
		<App>

		  <Switch> 
		 
			<Route path="/home" component={Home}/>
			<Route path="/classify" component={Classify}/>
			<Route path="/my" component={My}/>
			<Route path="/search" component={Search}/>
			<Route path="/template/:myid" component={Template}/>
			<Route path="/Detail/:daid" component={Detail}/>
			<Route path="/shoppingCar" render={()=>
				<ShoppingCar/>
			}/>
		
			<Redirect from="*" to="/home"/>
			</Switch>
		</App>
	</Router>
)
export default router;
