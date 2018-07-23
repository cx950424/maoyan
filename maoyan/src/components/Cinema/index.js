import React,{Component} from "react";
import "./index.css";
import axios from "axios";
import DDDD from "../dddd"


class Cinema extends Component{

	constructor(){
		super();

		this.state = {
			cinemalist:[],
			ddddShow:false,
		}
	}

	render(){
		return <div>
			<div className="navbg">
				<span className="left">大连<i></i></span>
				<input className="right" placeholder="搜影院"/>
			</div>

			<div className="navbg2">
				<ul>
				<li className="left" onClick={this.dddd.bind(this)}>全城<i></i></li>
					<li className="left">品牌<i></i></li>
					<li className="left">特色<i></i></li>
				</ul>
			</div>
			<DDDD ddShow={this.state.ddddShow}/>

			<ul className="cinema">
			{
				this.state.cinemalist.map(item=>
					<li key={item.id} onClick={this.hand.bind(this,item.id)}>
					<p>{item.nm}  <span className="cinemaprice"><span className="s1">{item.sellPrice}</span><span className="s2">元起</span></span></p>
					<p className="cinemaAddr">{item.addr}<span>{item.distance}</span></p>
					<div className="cinemaAll">
						<div className={item.tag.allowRefund==1?"allowRefund":"pp"}>{item.tag.allowRefund==1?"退":""}</div>
						<div className={item.tag.endorse==1?"endorse":"pp"}>{item.tag.endorse==1?"改签":""}</div>
						<div className={item.tag.snack==1?"snack":"pp"}>{item.tag.snack==1?"小吃":""}</div>
						<div className={item.tag.vipTag==null?"pp":"vipTag"}>{item.tag.vipTag}</div>
						<div className={item.tag.hallType==null?"pp":"hallType"}>{item.tag.hallType}</div>
					</div>

					<p className="cinemacardPromotionTag">{item.promotion.cardPromotionTag}</p>

					</li>
					)
			}
			</ul>
		</div>
	}

	hand(id){
		this.props.history.push(`/shows/${id}`)
	}

	dddd(){
		this.setState({
			ddddShow:!this.state.ddddShow
		})
	}


	componentDidMount(){
		axios.get("/ajax/cinemaList?day=2018-07-17&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1531813012829&cityId=65").then(res=>{
			console.log(res.data.cinemas)
			this.setState({
				cinemalist:res.data.cinemas
			})
		})
	}


}


export default Cinema

