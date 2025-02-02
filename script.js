// script.js
function updateUTCTime() {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const now = new Date();
    const utcTime = now.toUTCString();
    currentTimeElement.textContent = `${utcTime}`;
  }
  
  // Update the time immediately and every second
  updateUTCTime();
  setInterval(updateUTCTime, 1000);