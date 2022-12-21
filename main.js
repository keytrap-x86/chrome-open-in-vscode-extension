// Find element id 'local-panel'
var localPanel = document.getElementById("local-panel");

// The first child should be a list of 'Open' buttons
var firstChild = localPanel.children[0];

// Clone the 2nd button
var vsCode = firstChild.children[2].cloneNode(true);

// Add the new button to the list just before the Oepn with Visual Studio button
firstChild.insertBefore(vsCode, firstChild.children[2]);

var vsCodeLinkNode = vsCode.children[0];
// Change the text to 'VS Code'
vsCodeLinkNode.innerText = "Open with Visual Studio Code";

// Change the vsCode's first child's href to the VS Code protocol
vsCodeLinkNode.setAttribute(
  "href",
  vsCodeLinkNode
    .getAttribute("href")
    .replace("git-client://clone?repo", "vscode://vscode.git/clone?url")
);

// Load svg icon
var xhr = new XMLHttpRequest();
xhr.open("get", chrome.runtime.getURL(`images/icon.svg`), true);
xhr.onreadystatechange = function () {
  if (xhr.readyState != 4) return;
  var svg = xhr.responseXML.documentElement;
  svg = document.importNode(svg, true);
  svg.classList.add("mr-2");
  vsCodeLinkNode.insertBefore(svg, vsCodeLinkNode.firstChild);
};
xhr.send();
