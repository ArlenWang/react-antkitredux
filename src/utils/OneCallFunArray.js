let isCalled = [], timer;  
//let lastIndex=0
/** 
 * @param functionTobeCalled 被包装的方法   
 * @param interval 时间间隔，可省略，默认1500毫秒  规则如果点击了其他按钮，任何其他按钮都可以点击
 */  
const OneCallFunArray = (i,functionTobeCalled, interval = 1500,val=null) => {  
    //console.log(isCalled);
    if (!isCalled[i]) {  
        isCalled[i] = 1;  
        clearTimeout(timer);  
        //lastIndex=i;
        for (let index = 0; index < isCalled.length; index++) {
           if(i!==index)isCalled[index] = 0;  
        }
        timer = setTimeout(() => {  
           //console.log(i);
           //console.log(lastIndex);
           isCalled[i] = 0;  
        }, interval);  
        if(val){
            return functionTobeCalled(val);  
        }else{
            return functionTobeCalled();  
        }
    }  
};  
export default OneCallFunArray;
/*
使用前
onPress={activityId => navigate('ActivityDetail', {'id': activityId})}  
使用后
import onecallfun from 'Utils/OneCallFunArray';  

//...  
onPress={activityId => onecallfun(1,() => navigate('ActivityDetail', {'id': activityId}))}  
*/