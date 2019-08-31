import React from "react";
import '../assets/css/BackBar.css';
import ArrowLeft from '../assets/icon/ArrowLeft';
import onecallfun from "../utils/OneCallFun";
class BackBar extends React.Component {
  // componentDidMount() {
  //   document.title = '开发中';
  //  }
 backFun(){
  this.props.history.goBack();
 }
 
  render() {
   
    return (
      <div className="BackBarBox">
         <div className="left" onClick={()=>onecallfun(()=>{this.backFun();})}><ArrowLeft fill="#333333"/></div>
         {this.props.title?<div className="middle">{this.props.title}</div>:null}
      </div>
    );
  }
}

export default BackBar;
