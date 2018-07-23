
const titlereducer = (prevState="卖座电影",data={})=>{

    let {type , payload} = data;

    switch(type){
    	case "changeTitleForMaizuo":
    		return payload
    
    	default:
    		return prevState
    }
	// return data.payload;
}


export default titlereducer;