import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import ReactSwipe from 'react-swipe';
import Showsinfo from "../Showsinfo";

class shows extends Component{
	constructor(){
		super();

		this.state = {
			showslist:null,
			imglist: null,
			showindex:0,
			food:null,
			

		}
	}


	render(){
		return (
			<div>
				{
					this.state.showslist?
					<div className="showsinfo">
						<p className="p1">{this.state.showslist.cinemaData.nm}</p>
						<p className="p2">{this.state.showslist.cinemaData.addr}</p>
						<div><i className="iconfont icon-map"></i></div>
					</div>
					:null
				}


				{
					this.state.imglist?
						<div>

						<ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
						{
							this.state.imglist.map(item=>

								<img onMouseUp={this.a.bind(this)} className="showsswipe" src={item.img.replace("w.h","148.208")}  key={item.id}/>
								)
						}
			            </ReactSwipe>

			            <Showsinfo/>

			            </div>
				 :null
				}

				{
					this.state.food?
					<div className="food">
					{
						this.state.food.map(item=>
								<div>
									<img src={item.imageUrl.replace("w.h","144.144")}/>
									<p>{item.title}</p>

									<span className="s1">￥{item.price}</span>
									<span className="s2">{item.curNumberDesc}</span>
									<button>去购买</button>
								</div>
							)
					}
					</div>
					:null
				}



			</div>
		)
	}


	a(){
		console.log("index")
	}


	componentDidMount(){

		axios.get(`/ajax/cinemaDetail?cinemaId=${this.props.match.params.id}`).then(res=>{
			console.log(res.data)
			this.setState({
				showslist:res.data
			})
		})

		axios.get(`/ajax/cinemaDetail?cinemaId=${this.props.match.params.id}`).then(res=>{
			console.log(res.data.showData.movies)
			this.setState({
				imglist:res.data.showData.movies

			})
		})

		axios.get(`/ajax/cinemaDetail?cinemaId=${this.props.match.params.id}`).then(res=>{
			console.log(res.data.showData.movies)
			this.setState({
				food:res.data.dealList.dealList

			})
		})
	}
}


export default shows


