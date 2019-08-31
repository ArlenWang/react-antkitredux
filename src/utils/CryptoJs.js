import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import Base64 from 'crypto-js/enc-base64';
import md5   from "crypto-js/md5";
import enchex from "crypto-js/enc-hex";
import ZeroPadding from "crypto-js/pad-zeropadding";
    const encodeText=(value,key) =>{
       return AES.encrypt(value, key).toString();
    }
    const decodeText=(value,key) =>{
        return AES.decrypt(value, key).toString(Utf8);
    }
    
    const encodeObject=(value,key) =>{
        let vv=Utf8.parse(value);
        return AES.encrypt(JSON.stringify(vv), key).toString();
     }
     const decodeObject=(value,key) =>{
        let bytes=AES.decrypt(value, key);
        return JSON.parse(bytes.toString(Utf8));
    }
    const enbase64=(value) =>{
        return Base64.stringify(Utf8.parse(value));
     }
     const debase64=(value) =>{
         return Base64.parse(value).toString(Utf8);
     }
     const hexencode=(value,lockkey) =>{
        let key0=md5(lockkey).toString();
        let key=enchex.parse(key0);
        let iv0=md5(key0).toString();
        let iv=enchex.parse(iv0);
        let opinion = {iv:iv, padding:ZeroPadding};
        return AES.encrypt(value, key,opinion).toString();
     }

     const hexdecode=(value,lockkey) =>{
        let key0=md5(lockkey).toString();
        let key=enchex.parse(key0);
        let iv0=md5(key0).toString();
        let iv=enchex.parse(iv0);
        let opinion = {iv:iv, padding:ZeroPadding};
        return AES.decrypt(value, key,opinion).toString(Utf8);
     }

export {
    encodeText,
    decodeText,
    encodeObject,
    decodeObject,
    enbase64,
    debase64,
    hexencode,
    hexdecode
};