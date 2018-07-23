import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import {NavLink} from "react-router-dom"

// import Store from "../../redux"
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
			
				<img src={this.state.filminfo.img.replace("w.h","71.100")} id="img-two" alt=""/>		
				<div id="div-center">
					<h2>{this.state.filminfo.nm}</h2>
						
					<p>{this.state.filminfo.enm}</p>

					<p>{this.state.filminfo.sc}</p>

					<p>{this.state.filminfo.cat}</p>
					<p>{this.state.filminfo.src}/{this.state.filminfo.dur}分钟</p>
					<p>{this.state.filminfo.pubDesc}</p>
					
				</div>
					

				<div id="div-right"><NavLink to="/home/list">></NavLink></div>
					
				</div>


				:null


			}

		{
			<div id="detail-text">
			<button id="detail-button">特惠购票</button>
				{
					this.state.filminfo?<p>{this.state.filminfo.dra}</p>:null
					
				}
			</div>
			}	
			</div>
	
	}      
    
			
	componentDidMount(){
		
		axios.get(`/ajax/detailmovie?movieId=${this.props.match.params.myid}`).then(res=>{
			console.log(res.data.detailMovie)

			this.setState({
				filminfo:res.data.detailMovie
			})

		 // headleClick(){
		 //  	this.setState({
		 //  		isShow:!this.state.isShow
		 //  	})
		 //  }
			
			// Store.dispatch({
			// 	type:"changeTitleForMaizuo", 
			
			// 	payload:res.data.data.film.name 
			// })
		})
	}
}


export default Detail