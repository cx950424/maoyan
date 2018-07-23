import React,{Component} from "react"; 
import "./index.css"
import axios from "axios"



class Showsinfo extends Component{
	constructor(){
		super();
		this.state={
			showsinfolist:null
		}
	}



	render(){
		return (
			<div>
				{
					this.state.showsinfolist?
					<div className="showsinfo2">

					<p className="showsinfop1">{this.state.showsinfolist.showData.movies[0].nm}<span className="s1">{this.state.showsinfolist.showData.movies[0].sc}</span></p>
							<p className="showsinfop2">{this.state.showsinfolist.showData.movies[0].desc}</p>
							<p className="showsinfop3">
								{
									this.state.showsinfolist.showData.movies[0].shows.map(item=>
										<span>
											{item.dateShow}
										</span>
										)
								}
							</p>

							<div className="showsinfodiv1">
								{
									this.state.showsinfolist.showData.movies[0].shows[0].plist.map(item=>
										<div className="All">
											<div>
												<p>{item.tm}</p>
											</div>
											<div className="lang">
												<p>{item.lang}
												{item.tp}</p>
												<p className="ting">{item.th}</p>
											</div>
											<div className="vip">
											<span className="s1">￥{item.vipPrice}</span><span className="s2">{item.vipPriceName}{item.vipPrice}</span>
											</div>

											<button>购票</button>

										</div>
										)
								}
							</div>

						</div>
					:null
				}

			</div>
		)
	}


	componentDidMount(){
		axios.get("/ajax/cinemaDetail?cinemaId=6151&movieId=1200486").then(res=>{
			console.log(res.data)
			this.setState({
				showsinfolist:res.data
			})
		})
		
	}
}


export default Showsinfo



