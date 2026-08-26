(function () {
  var section = document.querySelector(".publication-section");
  var buttons = Array.from(section.querySelectorAll("[data-publication-filter]"));
  var years = Array.from(section.querySelectorAll("[data-publication-year]"));

  function paperMatches(paper, filter) {
    if (filter === "all") return true;
    if (filter === "preprints") return paper.dataset.preprint === "true";
    return paper.dataset.selected === "true";
  }

  function applyFilter(filter) {
    years.forEach(function (year) {
      var papers = Array.from(year.querySelectorAll(".paper"));
      papers.forEach(function (paper) {
        paper.hidden = !paperMatches(paper, filter);
      });
      year.hidden = !papers.some(function (paper) { return !paper.hidden; });
    });

    buttons.forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.publicationFilter === filter));
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyFilter(button.dataset.publicationFilter);
    });
  });

  applyFilter("selected");
}());
