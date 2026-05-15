// === THEME TOGGLE LOGIC ===

const themeSelect = document.getElementById("theme-select");
const themeSeedInput = document.getElementById("theme-seed-input");
const body = document.body;

// Simple hashing function to generate a number from a string
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// Deterministic random based on a seed
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// List of available static themes (classes)
// "" (empty string) represents the original "Dark Minimalist" theme
const themes = ["", "theme-brutalist", "theme-dark-brutalist", "theme-indie-cat", "theme-random"];

// Load saved preference
const savedTheme = localStorage.getItem("focus-theme") || "";
const savedSeed = localStorage.getItem("focus-theme-seed") || "";
themeSelect.value = savedTheme;
themeSeedInput.value = savedSeed;
if (savedTheme === "theme-random") themeSeedInput.classList.remove("hidden");
applyTheme(savedTheme, savedSeed);

themeSelect.addEventListener("change", function () {
  const selectedTheme = themeSelect.value;
  const seed = themeSeedInput.value;
  
  if (selectedTheme === "theme-random") {
    themeSeedInput.classList.remove("hidden");
  } else {
    themeSeedInput.classList.add("hidden");
  }
  
  applyTheme(selectedTheme, seed);
  localStorage.setItem("focus-theme", selectedTheme);
});

themeSeedInput.addEventListener("input", function () {
  const selectedTheme = themeSelect.value;
  const seed = themeSeedInput.value;
  if (selectedTheme === "theme-random") {
    applyTheme(selectedTheme, seed);
    localStorage.setItem("focus-theme-seed", seed);
  }
});

function applyTheme(themeName, seed = "") {
  // Remove all theme classes
  themes.forEach(t => {
    if (t) body.classList.remove(t);
  });

  // Remove any previous random styles
  const oldRandomStyle = document.getElementById("random-theme-style");
  if (oldRandomStyle) oldRandomStyle.remove();

  if (themeName === "theme-random") {
    body.classList.add("theme-random");
    generateRandomTheme(seed);
  } else if (themeName) {
    body.classList.add(themeName);
  }
}

function generateRandomTheme(seedText = "") {
  let vibe;
  
  // Use a random value if no seed is provided, but keep it stable for the session if possible
  const seed = seedText ? hashCode(seedText) : Math.floor(Math.random() * 1000000);
  const getVal = (offset = 0) => seededRandom(seed + offset);

  const fonts = [
    "'Courier New', monospace",
    "system-ui, sans-serif",
    "'Georgia', serif",
    "'Impact', sans-serif",
    "'Comic Sans MS', cursive"
  ];
  const cursors = ["cell", "copy", "wait", "move", "vertical-text", "zoom-in", "grab"];
  
  vibe = {
    hue: Math.floor(getVal(1) * 360),
    font: fonts[Math.floor(getVal(2) * fonts.length)],
    bgImageId: Math.floor(getVal(3) * 1000),
    cursor: cursors[Math.floor(getVal(4) * cursors.length)],
    borderRadius: getVal(5) > 0.5 ? '0px' : '30px'
  };

  const bgColor = `hsl(${vibe.hue}, 30%, 90%)`;
  const textColor = `hsl(${vibe.hue}, 60%, 20%)`;
  const accentColor = `hsl(${(vibe.hue + 180) % 360}, 70%, 50%)`;
  const bgUrl = `https://picsum.photos/seed/${vibe.bgImageId}/800/600?blur=5`;

  const styleSheet = document.createElement("style");
  styleSheet.id = "random-theme-style";
  styleSheet.innerHTML = `
    body.theme-random {
      background-color: ${bgColor} !important;
      background-image: url('${bgUrl}') !important;
      background-size: cover !important;
      background-attachment: fixed !important;
      color: ${textColor} !important;
      font-family: ${vibe.font} !important;
      cursor: ${vibe.cursor} !important;
    }
    .theme-random .card {
      background: rgba(255, 255, 255, 0.8) !important;
      backdrop-filter: blur(10px);
      border: 4px solid ${textColor} !important;
      border-radius: ${vibe.borderRadius} !important;
      box-shadow: 10px 10px 0px ${accentColor} !important;
      color: ${textColor} !important;
    }
    .theme-random .timer-display {
      color: ${accentColor} !important;
      font-weight: 900 !important;
    }
    .theme-random button {
      background: ${textColor} !important;
      color: ${bgColor} !important;
      border: none !important;
      padding: 10px 20px !important;
      font-weight: bold !important;
      box-shadow: 4px 4px 0px ${accentColor} !important;
    }
    .theme-random .mode-btn.active {
      background: ${accentColor} !important;
      color: white !important;
    }
    .theme-random #theme-select {
      background: ${bgColor} !important;
      color: ${textColor} !important;
      border: 2px solid ${accentColor} !important;
      font-family: ${vibe.font} !important;
      padding: 5px !important;
    }
  `;
  document.head.appendChild(styleSheet);
}
