/**
* @Author: Sonny Du <sonny>
* @Date:   13-Mar-2016
* @Email:  sunnydu999@gmail.com
* @Last modified by:   sonny
* @Last modified time: 16-Mar-2016
* @License: MIT
*/



function httpRequest(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.open("GET",url,true);
  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4) {
      callback(xhr.responseText);
    }
  }
  xhr.send();
}
httpRequest('http://sneezryworks.sinaapp.com/ip.php', function(ip){
  console.log(ip);
  document.getElementById('ip_div').innerText = ip;
});
