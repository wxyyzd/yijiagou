import React,{Component} from "react";
import "./index.css";
import { SearchBar} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import axios from "axios";
class Search extends Component{
constructor(props){
      super(props);

      this.state = {
       list:[]
     
      }
    }
  render() {
    return (<div>
    
      
      <SearchBar
     
        placeholder="Search"
        defaultValue="搜索商品"
        cancelText="搜索"
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onCancel={() =>console.log('onCancel')  }
        showCancelButton
        onChange={this.onChange}

      />
     <ul>
   
      </ul>
    </div>);
  }
  componentDidMount(){
   axios.get(`/index.php/topapi?method=widgets&platform=app2&tml=keywords&v=v3&_rand=0.12988579616324247&accessToken=427f211097c60a99366a3ca20ffa3e680c7425888591423ae3b31ec5a156b473`).then(res=>{
      this.setState({
        list:res.data.data[0].params.pic
      })
      console.log(this.state.list)
    })
  }
}


export default Search