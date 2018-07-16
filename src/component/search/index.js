import React,{Component} from "react";
import "./index.css";
import { SearchBar} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
class Search extends Component{


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
        onCancel={() => console.log('onCancel')}
        showCancelButton
        onChange={this.onChange}
      />
    </div>);
  }
}


export default Search