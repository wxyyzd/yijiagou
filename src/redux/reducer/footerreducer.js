
const footerreducer = (prevState=true,data={})=>{
	
	console.log(data);
    let {type , payload} = data;//ES6 解构
    switch(type){
    	case "isshow":
    		return payload
    
    	default:
    		return prevState
    }
	// return data.payload;
}
export default footerreducer;