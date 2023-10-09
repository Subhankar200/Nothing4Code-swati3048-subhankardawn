document.addEventListener("DOMContentLoaded", function () {
    const blockInput = document.getElementById("blockInput");
    const blockWebsitesButton = document.getElementById("blockWebsites");
  
    blockWebsitesButton.addEventListener("click", function () {
      const blockedWebsites = blockInput.value.split('\n').map(line => line.trim());
  
      // Save the blocked websites to chrome.storage.sync
      chrome.storage.sync.set({ blockedWebsites: blockedWebsites }, function () {
        console.log("Websites blocked: " + blockedWebsites);
        // Optionally, provide user feedback that the websites have been blocked.
      });
    });
  });
  