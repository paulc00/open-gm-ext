searchGoogleMaps = function(word){
  const query = word.selectionText;

  // console.log(query);
  // TODO: If selection is empty, error

  chrome.tabs.create({url: encodeURI("https://www.google.com/maps/search/?api=1&query="
+ query)});
};

chrome.contextMenus.removeAll(function() {
  chrome.contextMenus.create({
   id: "1",
   title: "Search in Google Maps",
   contexts:["selection"],  // ContextType
  }); })

chrome.contextMenus.onClicked.addListener(searchGoogleMaps);