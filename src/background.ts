// export {}
// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });

// function reddenPage() {
//     document.body.style.backgroundColor = 'red';
//   }
  
//   chrome.action.onClicked.addListener((tab) => {
      
//     if(!tab.url.includes("chrome://")) {
//       chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: reddenPage
//       });
//     }
//   });
export {};