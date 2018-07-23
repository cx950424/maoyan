import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import  {NavLink } from "react-router-dom"

class Home extends Component{

	constructor(){
		super();

		this.state = {
			filmlist:[]
		}
	}

	render(){
		return <div>
		
			<ul id="film-ul">
					<li><NavLink to="/home/nowplaying" activeClassName="qq">正在热映</NavLink></li>
					<li><NavLink to="/home/comingsoon" activeClassName="qq">即将上映</NavLink></li>
				</ul>
	
				{
					this.props.children
				}
			<footer>
				<ul id="footer-ul">
					<li><NavLink to="/home/nowplaying" activeClassName="qq">电影</NavLink></li>
					<li><NavLink to="/cinema" activeClassName="qq">影院</NavLink></li>
					<li><NavLink to="/home/ooo" activeClassName="qq">我的</NavLink></li>

				</ul>

			</footer>

		</div>
	}

	 componentDidMount(){
	   
// https://p0.meituan.net/128.180/movie/238e2dc36beae55a71cabfc14069fe78236351.jpg
// http://p0.meituan.net/w.h     /movie/238e2dc36beae55a71cabfc14069fe78236351.jpg

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

