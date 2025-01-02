// Helper function to get a cookie value by name
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return decodeURIComponent(value);
  }
  return null;
}

// Apply saved preferences from cookies
function applyPreferences() {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", `${savedFontSize}px`);
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    document.getElementById("fontcolor").value = savedFontColor;
  }
}

// Save preferences to cookies
function savePreferences(event) {
  event.preventDefault();

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  document.cookie = `fontsize=${encodeURIComponent(fontSize)}; path=/; max-age=31536000`;
  document.cookie = `fontcolor=${encodeURIComponent(fontColor)}; path=/; max-age=31536000`;

  document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);
  document.documentElement.style.setProperty("--fontcolor", fontColor);

  alert("Preferences saved!");
}

// Event Listener for Form Submission
document
  .getElementById("preferencesForm")
  .addEventListener("submit", savePreferences);

// Apply preferences on page load
applyPreferences();
