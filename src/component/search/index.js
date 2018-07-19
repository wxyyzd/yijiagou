import React,{Component} from "react";
import "./index.css";
import { SearchBar} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import axios from "axios";
class Search extends Component{
constructor(props){
      super(props);

      this.state = {
       list:[],
       listHistory:[]
     
      }
    }
  render() {
    return (<div id="search">
    
      
      <SearchBar
        ref="searchVal"
        placeholder="搜索商品"
        defaultValue=""
        cancelText="搜索"
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onCancel={this.hangleClick.bind(this)
          
      }
        showCancelButton
        onChange={this.onChange}

      />
      <p><b>热搜</b></p>
     <ul className="u1">
         {
                 this.state.list.map((item)=>
                  <li key={item.id} >{item.linkinfo}</li>
                    )
                   }
      </ul>
      <p><b>历史搜索</b></p>
      <ul className="u2">
         {
                 this.state.listHistory.map((item)=>
                  <li key={item.id} >{item.val}</li>
                    )
                   }
      </ul>
      <div className="but"><button onClick={this.buttonclick.bind(this)}>清除历史记录</button></div>

    </div>);
  }
  hangleClick(){
    let comment = {val: this.refs.searchVal.state.value,id:Date.now()}
    console.log(comment)
          let list = JSON.parse(localStorage.getItem('cmts') || '[]')
          list.unshift(comment)
      
          localStorage.setItem('cmts', JSON.stringify(list))
  }
  buttonclick(){
    localStorage.removeItem('cmts');
    this.setState({
      listHistory:[]
    })
    console.log(111)
  }
  componentDidMount(){
     var list = JSON.parse(localStorage.getItem('cmts') || '[]')
          this.setState({
            listHistory:list
          })



    let obj = {}; 
    let newlish=[];
   axios.get(`/index.php/topapi?method=widgets&platform=app2&tml=keywords&v=v3&_rand=0.12988579616324247&accessToken=427f211097c60a99366a3ca20ffa3e680c7425888591423ae3b31ec5a156b473`).then(res=>{
    obj=res.data.data[0].params.pic;
  for (let i in obj) {
    newlish.push(obj[i]); 
   
}
console.log(newlish);
      this.setState({
        list:newlish
      })
      console.log(this.state.list)
    
    });
let val=localStorage.getItem('val');
console.log(val)
  }
}


export default Search