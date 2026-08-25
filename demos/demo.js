const theme = document.body.dataset.theme;
const page = document.body.dataset.page;

const themes = {
  editorial: { label: "Kaidi Xu", footer: "City University of Hong Kong" },
  lab: { label: "KAIDI.XU", footer: "CityUHK / HKAI-Sci" },
  institutional: { label: "Professor Kaidi Xu", footer: "Department of Data Science · City University of Hong Kong" }
};

const pages = [
  ["overview", "Overview", "index.html"],
  ["publications", "Publications", "publications.html"],
  ["group", "Group", "group.html"],
  ["teaching", "Teaching", "teaching.html"]
];

const overview = `
  <section class="hero">
    <div>
      <h1>Kaidi Xu</h1>
      <div class="appointments">
        <div class="appointment"><div><strong>Associate Professor</strong><a href="https://www.ds.cityu.edu.hk/">Department of Data Science, City University of Hong Kong</a></div></div>
        <div class="appointment"><div><strong>Deputy Director</strong><a href="https://www.cityu.edu.hk/hkai-sci/">The Hong Kong Institute of AI for Science (HKAI-Sci)</a></div></div>
      </div>
      <div class="actions"><a href="mailto:kaidixu@cityu.edu.hk">Email</a><a href="https://scholar.google.com/citations?hl=en&amp;user=lYK0wlsAAAAJ">Google Scholar</a><a href="https://github.com/Verified-Intelligence">GitHub</a><a href="#">CV</a></div>
    </div>
    <div class="portrait-wrap"><img class="portrait" src="../assets/kaidi_photo_2025.jpg" alt="Portrait of Kaidi Xu"></div>
  </section>
  <section class="section biography"><p class="section-label">Biography</p><div class="prose"><p>Kaidi Xu is an Associate Professor in the Department of Data Science at City University of Hong Kong. He also serves as Deputy Director of The Hong Kong Institute of AI for Science (HKAI-Sci). He received his Ph.D. from Northeastern University and M.S. from the University of Florida in 2021 and 2017, respectively. He then served as an Assistant Professor in the Department of Computer Science at Drexel University from 2021 to 2025.</p><p>His primary research interest is Trustworthy AI, including formal verification, practical adversarial attacks, and uncertainty quantification. Prof. Xu has published extensively in top-tier venues across machine learning, computer vision, and natural language processing, and has served as area chair for leading conferences and associate editor for ACM Computing Surveys.</p><p>He is a four-time champion of the International Verification of Neural Networks Competition (VNN-COMP 2021, 2022, 2023, 2024), recipient of Drexel’s Faculty Research Excellence Award, and winner of the Best Paper Award at the NeurIPS 2024 GenAI4Health workshop. He is among the Stanford World’s Top 2% Scientists in 2025. As Principal Investigator, Prof. Xu has led multiple research projects funded by the U.S. NSF and national laboratories. His work bridges rigorous theoretical guarantees with practical AI robustness solutions, advancing the safety and reliability of AI systems in real-world applications.</p></div></section>
  <section class="section recruiting"><h2>Open Positions</h2><p>I’m seeking highly motivated students with a strong background in deep learning, offering full financial support. Interested candidates are strongly encouraged to contact me via email, including a resume, publication list, and transcripts. Two postdocs and five PhD positions are available for Spring/Fall 2027.</p></section>
  <section class="section recent-news"><p class="section-label">Recent News</p><ul class="news-list"><li><time>05 / 2026</time><span>Two papers were accepted (2× ICML)!</span></li><li><time>04 / 2026</time><span>Three papers were accepted (1× ACL, 1× AIED, 1× ICDM)!</span></li><li><time>03 / 2026</time><span>I am serving as an Area Chair for NeurIPS and COLM 2026.</span></li><li><time>01 / 2026</time><span>Five papers were accepted (3× ICLR, 1× EACL, 1× CPAL)!</span></li><li><time>11 / 2025</time><span>Two papers were accepted to AAAI 2026 (1 oral, 1 poster)!</span></li></ul><a class="more-link" href="news.html">View all news →</a></section>`;

const publications = `
  <header class="content-header"><h1>Publications</h1><a href="https://scholar.google.com/citations?hl=en&amp;user=lYK0wlsAAAAJ">Google Scholar ↗</a></header>
  <section class="section"><div class="filter-tabs" aria-label="Publication filters"><button aria-pressed="true">Selected</button><button aria-pressed="false">All publications</button><button aria-pressed="false">Preprints</button></div><div class="publication-year"><h2>2023</h2><div><article class="paper"><time class="paper-month" datetime="2023-07">July</time><div class="paper-body"><h3>Are diffusion models vulnerable to membership inference attacks?</h3><p class="paper-authors">Jinhao Duan, Fei Kong, Shiqi Wang, Xiaoshuang Shi, Kaidi Xu</p><div class="paper-footer"><span class="paper-venue">ICML</span><div class="paper-links"><a href="#">Paper</a><a href="#">Code</a></div></div></div></article><article class="paper"><time class="paper-month" datetime="2023-11">November</time><div class="paper-body"><h3>Semantic adversarial attacks via diffusion models</h3><p class="paper-authors">Chenan Wang, Jinhao Duan, Chaowei Xiao, Edward Kim, Matthew Stamm, Kaidi Xu</p><div class="paper-footer"><span class="paper-venue">BMVC</span><div class="paper-links"><a href="#">Paper</a></div></div></div></article></div></div><div class="publication-year"><h2>2022</h2><div><article class="paper"><time class="paper-month" datetime="2022-12">December</time><div class="paper-body"><h3>General cutting planes for bound-propagation-based neural network verification</h3><p class="paper-authors">Huan Zhang, Shiqi Wang, Kaidi Xu, et al.</p><div class="paper-footer"><span class="paper-venue">NeurIPS</span><div class="paper-links"><a href="#">Paper</a><a href="#">Code</a></div></div></div></article><article class="paper"><time class="paper-month" datetime="2022-07">July</time><div class="paper-body"><h3>A branch and bound framework for stronger adversarial attacks of ReLU networks</h3><p class="paper-authors">Huan Zhang, Shiqi Wang, Kaidi Xu, et al.</p><div class="paper-footer"><span class="paper-venue">ICML</span><div class="paper-links"><a href="#">Paper</a></div></div></div></article></div></div></section>`;

const group = `
  <header class="content-header"><h1>Group</h1></header>
  <p class="demo-notice"><strong>Demo roster:</strong> names, portraits, research interests, and dates below are fictional placeholders for design review.</p>
  <section class="people-section"><h2>Current PhD Students</h2><div class="member-list"><article class="member"><img class="member-photo" src="../assets/demo-john-doe.png" alt="Fictional demo portrait of John Doe"><div><h3><a href="#">John Doe</a></h3><p class="member-meta">PhD Student · Joined 2025</p><p>Formal verification and neural network robustness.</p><a class="member-link" href="#">Personal homepage ↗</a></div></article><article class="member"><img class="member-photo" src="../assets/demo-jane-smith.png" alt="Fictional demo portrait of Jane Smith"><div><h3><a href="#">Jane Smith</a></h3><p class="member-meta">PhD Student · Joined 2024</p><p>Uncertainty quantification and trustworthy language models.</p><a class="member-link" href="#">Personal homepage ↗</a></div></article></div></section>
  <section class="people-section"><h2>Current Master’s Students</h2><div class="member-list"><article class="member"><img class="member-photo" src="../assets/demo-emily-chen.png" alt="Fictional demo portrait of Emily Chen"><div><h3><a href="#">Emily Chen</a></h3><p class="member-meta">Master’s Student · Joined 2026</p><p>Adversarial machine learning and AI security.</p><a class="member-link" href="#">Personal homepage ↗</a></div></article></div></section>
  <section class="people-section"><h2>Alumni</h2><div class="member-list"><article class="member"><img class="member-photo" src="../assets/demo-michael-lee.png" alt="Fictional demo portrait of Michael Lee"><div><h3><a href="#">Michael Lee</a></h3><p class="member-meta">Ph.D. 2025 · Joined 2021</p><p>Postdoctoral Researcher, Example University.</p><a class="member-link" href="#">Personal homepage ↗</a></div></article></div></section>
  <section class="section recruiting"><h2>Join the group</h2><p>We are seeking highly motivated students and postdoctoral researchers with strong backgrounds in deep learning. Fully supported positions are available for Spring and Fall 2027.</p></section>`;

const teaching = `
  <header class="content-header"><h1>Teaching</h1></header>
  <section class="section"><article class="course"><time class="course-term">2026–27<span>Semester A</span></time><div><span class="course-code">CS486</span><h2>Robust Machine Learning</h2><p>Adversarial examples, robustness, certification, and reliable deployment.</p></div><a href="#">Syllabus</a></article><article class="course"><time class="course-term">2025–26<span>Semester B</span></time><div><span class="course-code">CS613</span><h2>Machine Learning</h2><p>Foundations, algorithms, optimization, and modern applications.</p></div><a href="#">Syllabus</a></article><article class="course"><time class="course-term">2025–26<span>Semester A</span></time><div><span class="course-code">CS616</span><h2>Robust Deep Learning</h2><p>Advanced topics in attacks, defenses, and neural network verification.</p></div><a href="#">Syllabus</a></article></section>`;

const news = `
  <header class="content-header"><h1>News</h1></header>
  <section class="section news-archive">
    <div class="publication-year"><h2>2026</h2><ul class="news-list"><li><time datetime="2026-05">May</time><span>Two papers were accepted (2× ICML)!</span></li><li><time datetime="2026-04">Apr</time><span>Three papers were accepted (1× ACL, 1× AIED, 1× ICDM)!</span></li><li><time datetime="2026-03">Mar</time><span>I am serving as an Area Chair for NeurIPS and COLM 2026.</span></li><li><time datetime="2026-01">Jan</time><span>Five papers were accepted (3× ICLR, 1× EACL, 1× CPAL)!</span></li></ul></div>
    <div class="publication-year"><h2>2025</h2><ul class="news-list"><li><time datetime="2025-11">Nov</time><span>Two papers were accepted to AAAI 2026 (1 oral, 1 poster)!</span></li><li><time datetime="2025-10">Oct</time><span>I am serving as an Area Chair for ARR OCT 2026!</span></li><li><time datetime="2025-08">Aug</time><span>I am serving as an Area Chair for ICLR 2026!</span></li><li><time datetime="2025-08">Aug</time><span>Four papers were accepted (1× ACM MM, 1× ICCV, 2× EMNLP).</span></li><li><time datetime="2025-05">May</time><span>Three papers were accepted (1× ICML, 2× ACL)!</span></li><li><time datetime="2025-03">Mar</time><span>I am serving as an Area Chair for NeurIPS 2025!</span></li></ul></div>
    <div class="publication-year"><h2>2024</h2><ul class="news-list"><li><time datetime="2024-09">Sep</time><span>Four papers were accepted (1× NDSS, 1× EMNLP, 2× NeurIPS)!</span></li><li><time datetime="2024-07">Jul</time><span>Three papers were accepted (1× ECCV, 1× ACM MM, 1× RSS)!</span></li><li><time datetime="2024-05">May</time><span>Received the Faculty Research Excellence Award from CCI at Drexel.</span></li><li><time datetime="2024-03">Mar</time><span>Received an NSF grant on decision-embedded deep learning for transit systems.</span></li></ul></div>
  </section>`;

const content = { overview, publications, group, teaching, news };
const tabMarkup = pages.map(([id, label, href]) => `<a href="${href}"${id === page ? ' aria-current="page"' : ""}>${label}</a>`).join("");

document.title = `Kaidi Xu — ${page === "news" ? "News" : pages.find(([id]) => id === page)?.[1] || "Overview"}`;
document.body.insertAdjacentHTML("afterbegin", `<header class="site-header"><div class="header-inner"><a class="wordmark" href="index.html">${themes[theme].label}</a><nav class="tabs" aria-label="Primary navigation">${tabMarkup}</nav></div></header><main class="page-main">${content[page]}</main><footer><div class="footer-inner"><span>© 2026 Kaidi Xu</span><span>${themes[theme].footer}</span></div></footer>`);
