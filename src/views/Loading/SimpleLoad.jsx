import React from "react";
import { ActivityIndicator} from 'antd-mobile';

class SimpleLoad extends React.Component {
    
    render() {
        return <div style={{  textAlign:'center',}}>
                <div style={{width:"20vw",margin:"auto"}}>
                   <ActivityIndicator size="small"/>
                </div>
            </div>
    }


}

export default SimpleLoad;