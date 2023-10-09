document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const saveTaskButton = document.getElementById("saveTask");
  
    // Load the saved task from chrome.storage if available
    chrome.storage.sync.get(["dailyTask"], function (data) {
      if (data.dailyTask) {
        taskInput.value = data.dailyTask;
      }
    });
  
    saveTaskButton.addEventListener("click", function () {
      const task = taskInput.value;
  
      // Save the task to chrome.storage.sync
      chrome.storage.sync.set({ dailyTask: task }, function () {
        console.log("Task saved: " + task);
        // Optionally, provide user feedback that the task has been saved.
      });
    });
  });
  