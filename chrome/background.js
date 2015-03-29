var scriptchain = createScriptChain(['bookmarklet.js'], null, false);

chrome.browserAction.onClicked.addListener(function respondToClick(tab) {
  scriptchain.loadChain();
});

