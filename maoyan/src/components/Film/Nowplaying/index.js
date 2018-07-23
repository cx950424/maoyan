import React,{Component} from "react";
import "./index.css";
import axios from "axios";


class Home extends Component{

	constructor(){
		super();

		this.state = {
			filmlist:[]
		}
	}

	render(){
		return <div>
		
			
	
			<ul id="list-ul">
				{
					this.state.filmlist.map(item=>
						<li key={item.id}  onClick={this.handleClick.bind(this,item.id)} >
						
						<img src={item.img.replace("w.h","128.180")} alt=""/>	
							<div>
								<h2>{item.nm}</h2>	
								<p>{item.globalReleased===true?<b>观众评 <span>{item.sc}</span></b>:<b><span>{item.wish} </span>人想看</b>}</p>

								
								<p>主演:{item.star}</p>
								<p>{item.showInfo}</p>
							</div>
							
							<button  id={item.globalReleased===true?"button-one":"button-two"}>{item.globalReleased===true?"购票":"预售"}</button>
							
						</li>
					)
				}							
			</ul>
		

		</div>
	}

	 componentDidMount(){

	     axios.get("/ajax/movieOnInfoList?token=").then(res=>{

	      this.setState({
	      	filmlist:res.data.movieList
	      })
	    })
	
	  }
		handleClick(item){
			
	        localStorage.setItem("id",item);
			this.props.history.push(`/detail/${item}`);
		}
	
}



export default Home
