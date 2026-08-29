(function () {
  var storageKey = "kaidi-color-theme";
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  var systemPreference = window.matchMedia("(prefers-color-scheme: dark)");
  var emailLinks = document.querySelectorAll(".encoded-email");

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

  emailLinks.forEach(function (link) {
    var address = window.atob(link.dataset.email);
    if (link.hasAttribute("data-display-email")) {
      link.textContent = address.replace("@", " [at] ").replace(/\./g, " [dot] ");
    }

    link.addEventListener("click", function () {
      var subject = link.dataset.subject;
      window.location.href = "mailto:" + address + (subject ? "?subject=" + encodeURIComponent(subject) : "");
    });
  });

  applyTheme(root.dataset.theme || (systemPreference.matches ? "dark" : "light"));
}());
