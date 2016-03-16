/**
* @Author: Sonny Du <sonny>
* @Date:   03-23-16-Mar-2016
* @Email:  sunnydu999@gmail.com
* @Last modified by:   sonny
* @Last modified time: 03-23-16-Mar-2016
* @License: MIT
*/

function my_clock(el){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = m>=10?m:('0'+m);
  s = s>10?s:('0'+s);
  el.innerHTML = h+":"+m+":"+s;
  setTimeout(function(){my_clock(el)},1000);
}

var clock_div = document.getElementById('clock_id');
my_clock(clock_div);
