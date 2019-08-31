let isCalled = false, timer;  
/** 
 * @param functionTobeCalled 被包装的方法   
 * @param interval 时间间隔，可省略，默认1500毫秒 
 */  
const OneCallFun = (functionTobeCalled, interval = 1500,val=null) => {  
    if (!isCalled) {  
        isCalled = true;  
        clearTimeout(timer);  
        timer = setTimeout(() => {  
            isCalled = false;  
        }, interval);  
        if(val){
            return functionTobeCalled(val);  
        }else{
            return functionTobeCalled();  
        }
    }  
};  
export default OneCallFun;
/*
使用前
onPress={activityId => navigate('ActivityDetail', {'id': activityId})}  
使用后
import onecallfun from "Utils/OneCallFun";

*/