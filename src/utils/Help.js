
const getsearch=(location)=>{ 
    let url = location.search; //获取url中"?"符后的字串 
    let theRequest = []; 
    if (url.indexOf("?") !== -1) { 
      let strs = url.substr(1); 
      strs = strs.split("&"); 
     for(let i = 0; i < strs.length; i ++) { 
       theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
     } 
   } 
   return theRequest; 
 }

 export {
    getsearch,
 }