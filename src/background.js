/**
 * 拡張機能インストール時の処理
 * インストール時のイベント関数で、コンテキストメニューを登録します。
 */
 chrome.runtime.onInstalled.addListener(function() {
    const menu = chrome.contextMenus.create({
      type: "normal",
      id: "open-github",
      title: "Open in GitHub",
      contexts:["selection"]
    });
  });
  
   // add listener for click on self defined menu item
   chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId ="OpenSN"&& clickData.selectionText){
        const userName = clickData.selectionText;
        const urlToOpen = "https://github.com/"+userName;

        chrome.tabs.query({ active: true, lastFocusedWindow: true }, (result) => {
            const currentTab = result[0];
            chrome.tabs.create({
              url: urlToOpen,
              index: currentTab.index + 1,
              active: true,
            });
          });
    }
  });