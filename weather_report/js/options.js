/**
* @Author: Sonny Du <sonny>
* @Date:   03-08-17-Mar-2016
* @Email:  sunnydu999@gmail.com
* @Last modified by:   sonny
* @Last modified time: 03-08-17-Mar-2016
* @License: MIT
*/
var city = localStorage.city || 'hangzhou';
document.getElementById('city').value = city;
document.getElementById('save').onclick = function(){
  localStorage.city = document.getElementById('city').value;
  alert("保存成功!");
}
