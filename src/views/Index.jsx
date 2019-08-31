import React from 'react';
import SearchTop from '../components/SearchTop.jsx';
import { api } from '../config/Api';
import { get } from '../utils/NetWorking';
import { Toast } from 'antd-mobile';
// const EmptyList=()=>(<div>空白</div>)
const tabTypeID=[3,6,4]
const dropTypeID=[0,2,3,4]
class App extends React.Component {
    constructor(props){
      super(props);
      this.state={
        dataSource:[],
        tabActive:0,
        dropActive:0,
        loading:false,
      }
      this.lock=false;
      this.loading=false;
    }
    componentDidMount(){
     // this.netListdata();
    }
    componentWillUnmount(){
      this.lock=true;
    }
    loadingEnd(){
      this.loading=false;
      if(!this.lock)this.setState({loading:false});
    }
    loadingStart(){
      this.loading=true;
      this.setState({loading:true});
    }
    netListdata(cid,num){
      /*
      cid 3 美妆 4 日用品 6 美食 
      num 0 全部 2 两个组合
      */
     let req="?cid="+(cid?cid:tabTypeID[this.state.tabActive])+"&num="+(num?num:dropTypeID[this.state.dropActive]);
     let thisUrl=api.index_list+req;
      if(this.loading)return;
      this.loadingStart();
      get(thisUrl,(res)=>{
        this.loadingEnd();
        //console.log(res);
        if(res&&res['result']==='success'){
          this.setState({dataSource:res['data']});
        }else{
          if(res&&res['message'])Toast.fail(res['message'], 1);
        }
      },(erro)=>{
        this.loadingEnd();
        console.log(erro);
      });
    }
    
    render() {
      const { history,location }=this.props;
      const pageProps={history,location};
        return(
          <div className="App" style={{overflowY:"hidden"}}>
            <SearchTop  {...pageProps} cid={tabTypeID[this.state.tabActive]} num={dropTypeID[this.state.dropActive]}/>
            <div onClick={()=>{this.props.history.push('search');}} style={{marginTop:"100px",color:"#000000"}}>跳转自身列表</div>
            <div onClick={()=>{this.props.history.push('antlist');}} style={{marginTop:"100px",color:"#000000"}}>跳转ANT列表</div>
            <div onClick={()=>{this.props.history.push('antlist2');}} style={{marginTop:"100px",color:"#000000"}}>跳转ANT列表2</div>
          </div>
        );
    }
}

export default App;
