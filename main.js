
searchGoogleMaps = function (word) {
  const query = word.selectionText;

  // console.log(query);

  if (query) {
    chrome.tabs.create({
      url: encodeURI("https://www.google.com/maps/search/?api=1&query="
        + query)
    });
  } else {
    // If selection is empty, error
    alert("No address is selected. Please select an address before selecting Search Google Maps.");
  }
};

chrome.contextMenus.removeAll(function () {
  chrome.contextMenus.create({
    id: "1",
    title: "Search in Google Maps",
    contexts: ["selection"],  // ContextType
  });
})

chrome.contextMenus.onClicked.addListener(searchGoogleMaps);