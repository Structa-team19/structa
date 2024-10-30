chrome.contextMenus.create({
  id: "copy_text",
  title: "Copy text to Structa",
  contexts: ["selection"],
  visible: true,
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log("Copy text", info, tab);
  // chrome.tabs.sendMessage(tab.id, { action: "copy_text" });
});
