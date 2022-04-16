export async function textChange(){
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id ? tab.id : 1111 },
    function: setPageBackgroundColor,
  });

}

