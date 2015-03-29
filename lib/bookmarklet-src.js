var createFuckShitUp = require('./fuck-shit-up/index').create;

var fuckShitUp = createFuckShitUp();

function getAllNodesWithText() {
  var allNodes = document.querySelectorAll('body *');
  var nodesWithText = [];

  for (var i = 0; i < allNodes.length; ++i) {
    var node = allNodes[i];
    if (node.innerText && (!node.children || node.children.length === 0)) {
      nodesWithText.push(node);
    }
  }

  return nodesWithText;
}

var nodesWithText = getAllNodesWithText();

nodesWithText.forEach(fuckUpNode);

function fuckUpNode(node) {
  fuckShitUp(node.innerText, updateNode);

  function updateNode(error, text) {
    if (!error) {
      node.innerText = text;
    }
  }
}
