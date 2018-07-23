import React,{Component} from "react"; 
import "./index.css";
import axios from "axios";


class Navbar extends Component{
	constructor(){
		super();
		this.state={
			ddddlist:null
		}
	}


	render(){
		return (
			<div className="ddddAll"> 
			{
				this.props.ddShow?
				<span>

				<ul className="dddd">
					<li>商区</li>
					<li>地铁站</li>
				</ul>
				<div className="ddddleft">
					<ul>
					{
						this.props.ddShow?
						<div>
						{
						this.state.ddddlist.map(item=>
						<li>
								{item.name}
						</li>
							)
						}
						</div>
						:null

					}
					</ul>
				</div>
				<div className="ddddright">ss</div>
				</span>
				:null
			}


				
			</div>
		)
	}


	componentDidMount(){
		axios.get("/ajax/filterCinemas?ci=65").then(res=>{
			console.log(res.data.district.subItems)
			this.setState({
				ddddlist:res.data.district.subItems
			})
		})
	}
}


export default Navbar



