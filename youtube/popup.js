document.addEventListener("DOMContentLoaded", function () {
    const youtubeUrlInput = document.getElementById("youtubeUrl");
    const playYoutubeButton = document.getElementById("playYoutube");
  
    playYoutubeButton.addEventListener("click", function () {
      const youtubeUrl = youtubeUrlInput.value;
      playVideoFromUrl(youtubeUrl);
    });
  
    function playVideoFromUrl(url) {
      const videoId = extractVideoId(url);
      if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        openVideoInNewTab(embedUrl);
      } else {
        alert("Invalid YouTube URL. Please enter a valid URL.");
      }
    }
  
    function extractVideoId(url) {
      // Extract the video ID from a YouTube URL
      const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu.be\/|youtube\.com\/embed\/)([\w-]+)/i);
      if (videoIdMatch) {
        return videoIdMatch[1];
      }
      return null;
    }
  
    function openVideoInNewTab(embedUrl) {
      chrome.tabs.create({ url: embedUrl });
    }
  });
  