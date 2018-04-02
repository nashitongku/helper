"use strict"

/**
 * 向导航栏的URL添加Url参数
 * @param {[type]} name
 * @param {[type]} value
 */
function addParam(name, value){  
    let currentUrl = window.location.href.split('#')[0];
    if (/\?/g.test(currentUrl)) {  
        if (/name=[-\w]{4,25}/g.test(currentUrl)) {  
            currentUrl = currentUrl.replace(/name=[-\w]{4,25}/g, name + "=" + value);  
        } else {  
            currentUrl += "&" + name + "=" + value;  
        }  
    } else {  
        currentUrl += "?" + name + "=" + value;  
    }  
    if (window.location.href.split('#')[1]) {  
        window.location.href = currentUrl + '#' + window.location.href.split('#')[1];  
    } else {  
        window.location.href = currentUrl;
    }  
}

/**
 * 获取url参数值
 * @param {[type]} name
 */
function getParam(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

/**
 * 修改URL参数值
 * @param  {[type]} name
 * @param  {[type]} value
 * @return {[type]}
 */
function updateParam(name,value){
    let url = window.location.href;
    let pattern=name+'=([^&]*)';
    let replaceText=name+'='+value; 
    if(url.match(pattern)){
        let tmp='/('+ name+'=)([^&]*)/gi';
        tmp=url.replace(eval(tmp),replaceText);
        url = tmp;
    }else{
        if(url.match('[\?]')){ 
          url = url+'&'+replaceText; 
        }else{ 
          url = url+'?'+replaceText; 
        } 
    }
    return window.location.href = url
}


export const urlHelper = {
    addUrlParam,
    getUrlParam,
    updateUrlParam
};

export {getParam};

export {addParam};

export {updateParam};