/**
* @Author: Sonny Du <sonny>
* @Date:   03-13-17-Mar-2016
* @Email:  sunnydu999@gmail.com
* @Last modified by:   sonny
* @Last modified time: 03-13-17-Mar-2016
* @License: MIT
*/

chrome.runtime.sendMessage('Hello', function(response){
  document.write(response);
})
