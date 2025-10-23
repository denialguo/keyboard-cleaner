// Try to enter fullscreen quietly (may fail silently)
document.addEventListener("DOMContentLoaded", () => {
  document.body.requestFullscreen?.().catch(() => {
    // Do nothing if browser blocks it
  });
});

// Block most browser shortcuts
document.addEventListener("keydown", (e) => {
  const blocked =
    e.ctrlKey || e.metaKey || e.altKey ||
    ["F5", "F12"].includes(e.key) ||
    (e.key.toLowerCase() === "r" && e.ctrlKey);

  if (blocked) {
    e.preventDefault();
    e.stopPropagation();
  }
});

// Disable right-click
window.oncontextmenu = () => false;

// Warn before closing tab
window.onbeforeunload = function () {
  return "Keyboard lock is still active. Are you sure you want to leave?";
};
