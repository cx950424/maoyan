import React,{Component} from "react"; //为了一会继承
import {NavLink } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import "./index.css"

class Sidebar extends Component{


	render(){
		return (
			<div>
			<ReactCSSTransitionGroup
			                 transitionName="example"
			                 transitionEnterTimeout={500}
			                 transitionLeaveTimeout={300}>
			{
				this.props.myshow?

				<aside>

					<ul onClick={()=>{
						this.props.myevent();
					}}>
					 <li><NavLink to="/home" activeClassName="active">home</NavLink></li>
					 <li><NavLink to="/film" activeClassName="active">film</NavLink></li>
					 <li><NavLink to="/card" activeClassName="active">card</NavLink></li>

					</ul>
				</aside>
				:null
			}

			</ReactCSSTransitionGroup>
			</div>
		)
	}
}


export default Sidebar


