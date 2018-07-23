import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import { Carousel, WingBlank } from 'antd-mobile';
import ReactSwipe from 'react-swipe';


class Comingsoon extends Component{

	constructor(){
		super();

		this.state = {
			filmlist:[],
			swipelist:null,
			
		}
	}

	render(){
		return <div>
			<p id="pppp">近期最受期待</p>
					{
						this.state.swipelist?

						  <ReactSwipe className="carousel" swipeOptions={{continuous: true}}>
				            	{
				            		this.state.swipelist.map(item=>
				            			<div className="borderBottom">
				            				<img key={item.id} src={item.img.replace("w.h","170.230")} className="class-img"/>
				            				<p>{item.nm}</p>
				            				<p>{item.comingTitle}</p>
				            			</div>
				            			)
				            	}
				        </ReactSwipe>
	
						:null
					}


			 
	
			<ul id="coming-ul">
				{
					this.state.filmlist.map(item=>
						<li key={item.id}  onClick={this.handleClick.bind(this,item.id)} >
						<h2>{item.comingTitle}</h2>
						<img src={item.img.replace("w.h","128.180")} alt=""/>	
							<div>
								<h2>{item.nm}</h2>	
								<p>{item.globalReleased===true?<b>观众评 <span>{item.sc}</span></b>:<b><span>{item.wish} </span>人想看</b>}</p>

								
								<p>主演:{item.star}</p>
								<p>{item.rt} 上映</p>
							</div>
							
							<button  id={item.preShow===true?"button-one":"button-two"}>{item.preShow===true?"想看":"预售"}</button>
							
						</li>
					)
				}							
			</ul>
		

		</div>
	}

	 componentDidMount(){

	 	 axios.get("/ajax/mostExpected?ci=65&limit=10&offset=0&token=").then(res=>{

	      this.setState({
	      	swipelist:res.data.coming
	      })
	    })

	     axios.get("/ajax/comingList?ci=65&token=&limit=16").then(res=>{

	      this.setState({
	      	filmlist:res.data.coming
	      })
	    })
	
	  }

		handleClick(item){
			
	        localStorage.setItem("id",item);
			this.props.history.push(`/detail/${item}`);
		}
		handleClickOne(item){
			
	        localStorage.setItem("id",item);
			this.props.history.push(`/detail/${item}`);
		}
	
}



export default Comingsoon







