// Loads Chrome extension context scripts in order.
function createScriptChain(filenames, tabId, executeInAllFrames) {
  var chain = {
    scriptFilenames: filenames,
    scriptIndex: 0,
    tabId: tabId,
    executeInAllFrames: executeInAllFrames
  };

  chain.loadChain = function loadChain() {
    this.scriptIndex = 0;
    this.loadNextScript();
  };

  chain.loadNextScript = function loadNextScript() {
    if (this.scriptIndex < this.scriptFilenames.length) {
      var filename = this.scriptFilenames[this.scriptIndex];
      ++this.scriptIndex;

      chrome.tabs.executeScript(this.tabId, {
        file: filename,
        allFrames: this.executeInAllFrames
      },
      this.loadNextScript.bind(this));
    }
  };

  return chain;
}
