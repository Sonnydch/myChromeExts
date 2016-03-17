/**
* @Author: Sonny Du <sonny>
* @Date:   03-18-17-Mar-2016
* @Email:  sunnydu999@gmail.com
* @Last modified by:   sonny
* @Last modified time: 03-18-17-Mar-2016
* @License: MIT
*/
[].map.call(document.getElementsByTagName('img'), function(img){
  return img.src;
})
