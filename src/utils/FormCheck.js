
const   checkEmail=(value) =>{
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
}

const   checkLength=(value, length) =>{
    if (value.length >= length) {
        return true;
      }
      return false;
}

const   checkMobile=(value)=>{
let partten =/^(((1[0-9][0-9]{1})|159|153)+\d{8})$/;
return partten.test(value);
}

const checkUsername=(value)=>{
let partten =/^[a-zA-Z]{1}[0-9a-zA-Z_]{5,15}$/;
return partten.test(value);
}

const  checkTruename=(value)=>{
let partten =/^[\u4E00-\u9FA5]{2,8}$/;
return partten.test(value);
}
const  checkIncludeCN=(value)=>{
let partten =/^[\u4e00-\u9fa5]/;
return partten.test(value);
}

const  checkIdcard=(value)=>{
let partten =/^([0-9]{15}|[0-9]{17}[0-9a-zA-Z])$/;
return partten.test(value);
}

const checkPassword=(value)=>{
let partten = /^[a-zA-Z0-9_\\@\\#\\$\\%\\^\\&\\*\\(\\)\\!\\,\\.\\?\\-\\+\\|\\=]{6,16}$/;
return partten.test(value);
}
const   checkInvitecode=(value) =>{
if (value.length === 5) {
    //charAt(0) substr(0, 1)
    let firstChar=value.charAt(0).toUpperCase();
    if(firstChar==="T"||firstChar==="P"||firstChar==="A"||firstChar==="S"||firstChar==="M"||firstChar==="N"){
        return true;
    }else{
        return false; 
    }
  }else{
    return false;
  }
}

const   isnumber=(value) =>{
    let partten = /^\d+$/;
    return partten.test(value);
}
export {
checkEmail,
checkLength,
checkMobile,
checkUsername,
checkTruename,
checkIdcard,
checkPassword,
checkInvitecode,
checkIncludeCN,
isnumber
};