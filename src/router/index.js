
import React from "react" //解析jsx语法
import { HashRouter as Router, Route, Redirect,Switch } from "react-router-dom";

import Home from "../component/home";
import ShoppingCar from "../component/shoppingCar";
import My from "../component/my";
import Search from "../component/search"
import Classify from "../component/classify"
import Area from "../component/area"
import Search_detail from "../component/search_detail"
import App from "../App";

const router = 	(
	<Router>
		<App>
		  <Switch> 
			<Route path="/home" component={Home}/>
			<Route path="/area" component={Area}/>
			<Route path="/classify" component={Classify}/>
			<Route path="/my" component={My}/>
			<Route path="/search" component={Search}/>
			<Route path="/shoppingCar" render={()=>
				<ShoppingCar/>
			}/>
		<Route path="/Search_detail/:id" component={Search_detail}/>
			<Redirect from="*" to="/home"/>
			</Switch>
		</App>
	</Router>
)
export default router;
