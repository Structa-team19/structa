chrome.contextMenus.create({
  id: "create_note",
  title: chrome.i18n.getMessage("create_note"),
  contexts: ["all"],
});

chrome.contextMenus.create({
  id: "copy_text",
  title: chrome.i18n.getMessage("copy_text"),
  contexts: ["all"],
  visible: true,
});

chrome.contextMenus.create({
  id: "screenshot",
  title: chrome.i18n.getMessage("screenshot"),
  contexts: ["all"],
  visible: true,
});

chrome.contextMenus.onClicked.addListener((info) => {
  switch (info.menuItemId) {
    case "screenshot":
      chrome.tabs.captureVisibleTab((dataUrl) => {
        console.log(dataUrl);
      });
  }
});
