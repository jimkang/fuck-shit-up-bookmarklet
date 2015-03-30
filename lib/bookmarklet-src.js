var createFuckShitUp = require('./fuck-shit-up/index').create;

var fuckShitUp = createFuckShitUp();

function modifyAllNodesWithText() {
  var allNodes = document.querySelectorAll('body *');

  for (var i = 0; i < allNodes.length; ++i) {
    var node = allNodes[i];
    if (node.tagName !== 'BR' &&
      node.innerText &&
      (!node.children || node.children.length === 0)) {

      fuckUpNode(node, i * 10);
    }
  }
}

function fuckUpNode(node, delay) {
  setTimeout(runFuckUp, delay);

  function runFuckUp() {
    fuckShitUp(node.innerText, updateNode);
  }

  function updateNode(error, text) {
    if (!error) {
      node.innerText = text;
    }
  }
}

modifyAllNodesWithText();
