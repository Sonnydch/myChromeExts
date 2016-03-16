/**
* @Author: Sonny Du <sonny>
* @Date:   16-Mar-2016
* @Email:  sunnydu999@gmail.com
* @Last modified by:   sonny
* @Last modified time: 03-23-16-Mar-2016
* @License: MIT
*/
function httpRequest(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.open("Get", url, true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
      callback(true);
    }
  }
  xhr.onerror = function(){
    callback(false);
  }
  xhr.send();
}

setInterval(function(){
  httpRequest('https://www.baidu.com/', function(status){
    chrome.browserAction.setIcon({
      path: 'images/'+(status?'online.png':'offline.png')
    });
  });
},1000);
