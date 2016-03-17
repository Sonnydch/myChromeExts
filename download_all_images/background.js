/**
* @Author: Sonny Du <sonny>
* @Date:   03-18-17-Mar-2016
* @Email:  sunnydu999@gmail.com
* @Last modified by:   sonny
* @Last modified time: 03-18-17-Mar-2016
* @License: MIT
*/
chrome.runtime.onInstalled.addListener(function(){
  chrome.contextMenus.create({
    'id':'saveAll',
    'type':'normal',
    'title':'保存所有图片'
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab){
  if (info.menuItemId == 'saveAll') {
    chrome.tabs.executeScript(tab.id, {file: 'main.js'}, function(results){
      if (results && results[0] && results[0].length) {
        results[0].forEach(function(url){
          chrome.downloads.download({
            url: url,
            conflictAction: 'uniquify',
            saveAs:false
          });
        });

      }
    });

  }

});
