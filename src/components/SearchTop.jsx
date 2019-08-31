import React from "react";
import '../assets/css/SearchTop.css';
import {InputItem,Toast } from 'antd-mobile';
import onecallfun from "../utils/OneCallFun";
import SearchIcon from '../assets/icon/SearchIcon';
class SearchTop extends React.Component {
  // componentDidMount() {
  //   document.title = '开发中';
  //  }
  state={
    inputvalue:"",
  }
  searchFun(){
  if(this.state.inputvalue===""){
    Toast.fail('请输入搜索内容', 1);
    return;
  }
  let req="/search?cid="+this.props.cid+"&num="+this.props.num;
  this.props.history.push(req);
  }
  changInput=(val)=>{
    this.setState({inputvalue:val});
  }
  render() {
   
    return (
      <div className="searchbox">
        <InputItem placeholder="输入关键字" value={this.state.inputvalue} onChange={this.changInput}/>
        <div className="searchBtn" onClick={()=>onecallfun(()=>{this.searchFun();})}><SearchIcon fill="white"/><span>搜索</span></div>
      </div>
    );
  }
}

export default SearchTop;
