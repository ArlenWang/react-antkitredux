/**
 * 请求网络封装
 */
import 'whatwg-fetch'

const get=(url,successCallBack,failCallBack) =>{
       // console.log(url);
        return window.fetch(url)
        .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                 return response.json();
            }else{
                failCallBack(response);
            }
        })
        .then(function(json) {
            successCallBack(json);
        })
        .catch(function(ex) {
            failCallBack(ex);
        });
    }

    //let jsonata=JSON.parse(data);
const getStr=(url,successCallBack,failCallBack) =>{
         return window.fetch(url)
         .then(function(response) {
             if (response.status >= 200 && response.status < 300) {
                  return response.text();
             }else{
                 failCallBack(response);
             }
         })
         .then(function(str) {
             successCallBack(str);
         })
         .catch(function(ex) {
             failCallBack(ex);
         });
     }
   
const  getSagas=(url) =>{
         return window.fetch(url)
         .then(function(response) {
             if (response.status >= 200 && response.status < 300) {
                return response.json();
             }else{
                return {response};
             }
         })
         .then(function(json) {
            return {response:json};
          })
          .catch(function(ex) {
            return {ex};
         });
 
     }

 const  postSagas=(url,body) =>{
        return window.fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
           body: body
           //body: body
          })
          .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                 return response.json();
            }else{
                return {response};
            }
        }).then(function(json) {
            return {response:json};
        }).catch(function(ex) {
            return {ex};
        });
    }
    /**
     * php要调用$_POST['xx']
     * body 格式是字符串 xx=x&xxx=oo
     */
 const   post=(url, body, successCallBack, failCallBack) =>{
        return window.fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: body
          })
          .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                 return response.json();
            }else{
                failCallBack(response);
            }
        }).then(function(json) {
            successCallBack(json);
        }).catch(function(ex) {
            failCallBack(ex);
        });
    }
    /**
     * php要调用file_get_contents('php://input');或so读取 files::read_file("php://input")
     * body 格式是object{}
     */
const   postJson=(url, body, successCallBack, failCallBack) =>{
        return window.fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          })
          .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                 return response.json();
            }else{
                failCallBack(response);
            }
        }).then(function(json) {
            successCallBack(json);
        }).catch(function(ex) {
            failCallBack(ex);
        });
    }
  
    /**
     * @param url               请求网址
     * var input = document.querySelector('input[type="file"]');
     * var data = new FormData();
     * data.append('file', input.files[0]);
     * data.append('user', 'hubot');
     */
const   upload=(url,body,successCallBack,failCallBack) => {
        return window.fetch(url, {
            method: 'POST',
            body: body
          })
          .then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                 return response.json();
            }else{
                failCallBack(response);
            }
        }).then(function(json) {
            successCallBack(json);
        }).catch(function(ex) {
            failCallBack(ex);
        });
    }

const download=(url,fileName)=>{//只支持本地
    return window.fetch(url)
    .then(function(response) {
        response.blob().then(blob=>{
            var url = window.URL.createObjectURL(blob);   // 获取 blob 本地文件连接 (blob 为纯二进制对象，不能够直接保存到磁盘上)    
            var a = document.createElement('a'); 
            a.href = url; 
            a.download = decodeURIComponent(fileName); 
            document.body.appendChild(a);
            a.click();
            setTimeout(function(){
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            },1000);
            //var reader = new FileReader();
            //reader.readAsDataURL(blob);
            //reader. = function (e) {
            //    var a = document.createElement('a');
            //    a.download =decodeURIComponent(fileName);
            //    a.href = e.target.result;
            //    a.click();
            //}
        });
    
    })
    .catch(function(ex) {
        console.log(ex);
    });
}

const remotedownload=(url,fileName)=>{
    return window.fetch(url,{
        method: "GET",
   //     mode: "no-cors",//可以在这设置跨域但下载文件为空
    })
      .then(function(response) {
        response.blob().then(blob=>{
            var url = window.URL.createObjectURL(blob);   // 获取 blob 本地文件连接 (blob 为纯二进制对象，不能够直接保存到磁盘上)    
            var a = document.createElement('a'); 
            a.href = url; 
            a.download = decodeURIComponent(fileName); 
            document.body.appendChild(a);
            a.click();
            setTimeout(function(){
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            },1000);
           
        });
    
    })
    .catch(function(ex) {
        console.log(ex);
    });
}

export {
    get,
    getStr,
    post,
    getSagas,
    postSagas,
    postJson,
    upload,
    download,
    remotedownload
};