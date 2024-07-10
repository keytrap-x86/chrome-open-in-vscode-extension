const buttons = document.querySelectorAll('button');
let targetButton = null;

buttons.forEach((button) => {
  const spans = button.querySelectorAll('span');
  spans.forEach((span) => {
    const innerSpan = span.querySelector('span[data-component="text"]');
    if (innerSpan && innerSpan.textContent.trim() === 'Code') {
      targetButton = button;
    }
  });
});

if (!targetButton) {
  console.log('Could not find the button');
} else {
  const newButton = document.createElement('button');
  newButton.type = 'button';
  newButton.className = 'Button--secondary Button ml-auto';
  newButton.style.background = '#007ACC';
  newButton.style.color = 'white';
  newButton.textContent = 'Open in VS Code';
  newButton.onclick = () => {
    const url = window.location.href;
    const vscodeUrl = `vscode://vscode.git/clone?url=${url}`;
    window.open(vscodeUrl);
  };

  setTimeout(() => {
    targetButton.after(newButton);
  }, 0);
}
