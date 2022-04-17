export async function textChange() {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id ? tab.id : 1111 },
    func: setPageText,
  });
}

function setPageText() {
  let style = document.createElement("style");

  const cssStyle = `
body {
  fontFamily: Arial, sans-serif;
}

`;
  style.appendChild(document.createTextNode(cssStyle));
}
