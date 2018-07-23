
import React from "react" ;
import { BrowserRouter as Router, Route, Redirect,Switch } from "react-router-dom";

import Home from "../components/Home";
import Card from "../components/Card";
import Nowplaying from "../components/Film/Nowplaying"
import Comingsoon from "../components/Film/Comingsoon"
import Detail from "../components/Detail"
import List from "../components/List"
import Cinema from "../components/Cinema";
import Shows from "../components/shows";
import App from "../App";

import {Provider} from "react-redux";
import Store  from "../redux";
var auth = {
	isAuth:false
}

const router = 	(

	<Provider store={Store}>
	<Router>
		<App>

		  <Switch> 
		
			<Route path="/home" render={()=>
				<Home>
				   <Switch>
					<Route path="/home/nowplaying" component={Nowplaying}/>
					<Route path="/home/comingsoon" component={Comingsoon}/>
					<Route path="/home/list" component={List}/>
					<Redirect from="/home" to="/home/nowplaying"/>
				
					</Switch>
				</Home>
			}/>
			{<Route path="/card" component={Card}/>}

			<Route path="/card" render={()=>

				auth.isAuth?<Card/>:<Home/>
			}/>

			<Route path="/detail/:myid" component={Detail}/>
			<Route path="/cinema" component={Cinema}/>
			<Route path="/shows/:id" component={Shows}/>
			<Redirect from="*" to="/home"/>
			</Switch>
		</App>
	</Router>

	</Provider>
)


export default router;


//vue mode
// history /home /film
// hash   #/home #/film
// 
//React mode
//BrowserRouter  --- history  /home
//HashRouter --- hash #/home

