import React from 'react';
import BackBar from '../components/BackBar';
import ReactDOM from 'react-dom';
import { api } from '../config/Api';
import { get } from '../utils/NetWorking';
import { Toast } from 'antd-mobile';
//import { getsearch } from '../utils/Help';
const EmptyList=()=>(<div>空白</div>)
const tabTypeID=[3,6,4]
const dropTypeID=[0,2,3,4]
class App extends React.Component {
  constructor(props){
    super(props);
    // let searchA=getsearch(this.props.location);
    this.scollNum=0;
    this.state={
      menuTop:338,
      isAlpha:false,
      dataSource:[
        {title:"dsfsfdsfds"},
        {title:"23132"},
        {title:"321321"},
        {title:"4324243243"}
      ],
     
      loading:false,
    }
    this.changeAlpha=false;
    this.lock=false;
    this.loading=false;
    console.log(this.state);
  }
  
  componentWillUnmount(){
    this.lock=true;
  }
  componentDidMount() {
     this.positionInit();
     //this.netListdata();
   }

  positionInit(){
    let topV=ReactDOM.findDOMNode(this.rightBtn).offsetTop;
    topV=topV+58;
    this.setState({menuTop:topV});
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
  rowData=(data)=>{
    return (<div>
     {data.map((item,index)=>{
      return  <div key={index} style={{height:"20px"}}>{item.title}</div>
     })}
    </div>);
  }
   onScrollEvent=()=>{
    this.scollNum++;
    let thisNum=parseInt(this.scollNum,10);
      if(!this.state.isAlpha&&!this.changeAlpha&&!this.lock){
        this.setState({isAlpha:true});
        this.changeAlpha=true;
      }
    setTimeout(()=>{this.changeAlpha=false;},300);
    setTimeout(()=>{  
      if(thisNum===this.scollNum){
        if(this.state.isAlpha)this.setState({isAlpha:false});
        }
     },500);
    }
    render() {
      const { history,location }=this.props;
      const pageProps={history,location};
      
        return(
          <div className="App" onScrollCapture={() => this.onScrollEvent()}>
            <BackBar {...pageProps} ref={leftB=>{this.rightBtn=leftB}}/>
            {this.state.dataSource&&this.state.dataSource.length>0?this.rowData(this.state.dataSource):<EmptyList/>}
          </div>
        );
    }
}

export default App;
