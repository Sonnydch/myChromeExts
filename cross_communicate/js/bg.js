/**
* @Author: Sonny Du <sonny>
* @Date:   03-12-17-Mar-2016
* @Email:  sunnydu999@gmail.com
* @Last modified by:   sonny
* @Last modified time: 03-13-17-Mar-2016
* @License: MIT
*/

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  if(message == 'Hello'){
    sendResponse('Hello from background');
  }
});
