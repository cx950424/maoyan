
const listreducer= (prevstate=[],data={})=>{

	let{type,payload} =  data;

	switch(type){
		case "changemaoyanList":
		 return [...prevstate,...payload]
		 default:
		 return prevstate;
	}


	// return prevstate;
}


export default listreducer;