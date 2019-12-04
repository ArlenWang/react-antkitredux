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
     window.storage.save({
      key: 'loginState', // 注意:请不要在key中使用_下划线符号!
      data: {
        from: 'some other site',
        userid: 'some userid',
        token: 'some token',
      },
      // 如果不指定过期时间，则会使用defaultExpires参数
      // 如果设为null，则永不过期
      expires: 1000 * 3600,
     });
    setTimeout(()=>{this.getdata() },1000)
    }
    getdata(){
      window.storage.load({
    key: 'loginState',

    // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
    autoSync: true, // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。

    // syncInBackground(默认为true)意味着如果数据过期，
    // 在调用sync方法的同时先返回已经过期的数据。
    syncInBackground: true,
    // 你还可以给sync方法传递额外的参数
    syncParams: {
      extraFetchOptions: {
        // 各种参数
      },
      someFlag: true,
    },
  })
  .then(ret => {
    // 如果找到数据，则在then方法中返回
    // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
    // 你只能在then这个方法内继续处理ret数据
    // 而不能在then以外处理
    // 也没有办法“变成”同步返回
    // 你也可以使用“看似”同步的async/await语法

    console.log(ret.userid);
    this.setState({ user: ret });
  })
  .catch(err => {
    //如果没有找到数据且没有sync方法，
    //或者有其他异常，则在catch中返回
    console.warn(err.message);
    switch (err.name) {
      case 'NotFoundError':
        // TODO;
        break;
      case 'ExpiredError':
        // TODO
        break;
    }
  });
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
