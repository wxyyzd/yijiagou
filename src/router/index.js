
import React from "react" //解析jsx语法
import { HashRouter as Router, Route, Redirect,Switch } from "react-router-dom";
import {Provider} from "react-redux";
import Store  from "../redux";

import Home from "../component/home";
import ShoppingCar from "../component/shoppingCar";
import My from "../component/my";
import Search from "../component/search"
import Classify from "../component/classify"

import Template from "../component/template"
import Detail from "../component/Detail"

import Area from "../component/area"
import Search_detail from "../component/search_detail"
import Login from "../component/login"
import Register from "../component/register"
import Detail_s from "../component/detail_s"

import App from "../App";

const router = 	(
	<Provider store={Store}>
	<Router>
		<App>
		  <Switch> 

			<Route path="/home" component={Home}/>
		
			<Route path="/login" component={Login}/>
			<Route path="/register" component={Register}/>

			<Route path="/area" component={Area}/>
			<Route path="/classify" component={Classify}/>
			<Route path="/my" component={My}/>
			<Route path="/search" component={Search}/>
			<Route path="/template/:myid" component={Template}/>
			<Route path="/Detail/:daid" component={Detail}/>
			<Route path="/shoppingCar" render={()=>
				<ShoppingCar/>
			}/>
		<Route path="/detail_s/:id" component={Detail_s}/>
		<Route path="/Search_detail/:id" component={Search_detail}/>
			<Redirect from="*" to="/home"/>
			</Switch>
		</App>
	</Router>
	</Provider>
)
export default router;
