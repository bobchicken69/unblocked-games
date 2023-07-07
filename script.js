function openGamePage(page) {
    window.location.href = page;
  }
  
  
  function toggleFullscreen() {
    const gameEmbedContainer = document.getElementById('game-embed-container');
  
    if (!document.fullscreenElement) {
      if (gameEmbedContainer.requestFullscreen) {
        gameEmbedContainer.requestFullscreen();
      } else if (gameEmbedContainer.mozRequestFullScreen) {
        gameEmbedContainer.mozRequestFullScreen();
      } else if (gameEmbedContainer.webkitRequestFullscreen) {
        gameEmbedContainer.webkitRequestFullscreen();
      } else if (gameEmbedContainer.msRequestFullscreen) {
        gameEmbedContainer.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }
  function goToHomepage() {
    window.location.href = 'index.html';
  }
  
  // Rest of the script...
  