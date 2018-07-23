import React,{Component} from "react";
import "./index.css";


import Store from "../../redux";
class Film extends Component{

	render(){
		return <div>
		
			{this.props.children}
			
		</div>
	}	

		componentDidMount(){
			Store.dispatch({
				type:"changeTitleForMaizuo", 
			
				payload:"卖座电影"
			})
	}
}  

export default Film;
