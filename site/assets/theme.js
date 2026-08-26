(function () {
  var storageKey = "kaidi-color-theme";
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  var systemPreference = window.matchMedia("(prefers-color-scheme: dark)");

  function getSavedTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      return;
    }
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    var nextTheme = theme === "dark" ? "light" : "dark";
    toggle.setAttribute("aria-label", "Use " + nextTheme + " mode");
    toggle.setAttribute("title", "Use " + nextTheme + " mode");
  }

  toggle.addEventListener("click", function () {
    var nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    saveTheme(nextTheme);
    applyTheme(nextTheme);
  });

  systemPreference.addEventListener("change", function (event) {
    if (!getSavedTheme()) {
      applyTheme(event.matches ? "dark" : "light");
    }
  });

  applyTheme(root.dataset.theme || (systemPreference.matches ? "dark" : "light"));
}());
