import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import {NavLink} from "react-router-dom"


class Detail extends Component{
	constructor(){
		super();

		this.state = {
			filminfo :null
		}
	}

	render(){
		return <div>
			{
				this.state.filminfo?
				<div id="detail-div">
			
				{this.state.filminfo.dra}
					
				</div>
				:null
			}
		</div>
	}      
    

	componentDidMount(){
		
		axios.get(`/ajax/detailmovie?movieId=${this.props.match.params.myid}`).then(res=>{

			this.setState({
				filminfo:res.data.detailMovie
			})

			console.log(res.data.detailMovie)

			
			// Store.dispatch({
			// 	type:"changeTitleForMaizuo", 
			
			// 	payload:res.data.data.film.name 
			// })
		})
	}
}


export default Detail