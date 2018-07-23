import React,{Component} from "react"; 
import "./index.css"
import {connect} from "react-redux";

class Navbar extends Component{
	render(){
		return (
			<nav> 
				
				<div id="id-home">

				  
					<span>{'猫眼电影'}</span>


				</div>
				
				
			</nav>
		)
	}


	componentDidMount(){
		
	}
}


export default connect(
	(state)=>{
		return {
			mytitle:state.titlereducer
		}
	},

	null
	)(Navbar)



