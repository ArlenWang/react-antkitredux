import React from "react";
import { ActivityIndicator} from 'antd-mobile';

class PageLoad extends React.Component {
    
    render() {
        return <div style={{paddingTop: "18vh",
                            textAlign:'center',
                            paddingBottom: "15vh"}}>
            <div style={{width:"30vw",margin:"auto"}}>
                <div style={{marginLeft:"13vw"}}><ActivityIndicator size="large"/></div>
                <div style={{ marginTop: 8 ,color:"#FFF"}}>加载中...</div>
                </div>
            </div>
    }


}

export default PageLoad;