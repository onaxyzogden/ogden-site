document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("page-enter");
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      document.body.classList.remove("page-enter");
    });
  });

  document.querySelectorAll('a[href]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const href = link.getAttribute('href') || '';
      const isHash = href.startsWith('#');
      const isExternal = /^https?:/i.test(href) && !href.includes(location.host);
      const isMail = href.startsWith('mailto:') || href.startsWith('tel:');
      const newTab = link.target === '_blank';
      if (isHash || isExternal || isMail || newTab) return;
      e.preventDefault();
      document.body.classList.add('page-leave');
      setTimeout(function () { window.location.href = href; }, 180);
    });
  });

  const form = document.getElementById("bbosIntakeForm");
  const successBox = document.getElementById("successBox");
  if (form && successBox) {
    form.addEventListener("submit", function (e) {
      const endpoint = form.getAttribute("data-endpoint") || "";
      if (!endpoint || endpoint.includes("YOUR_FORM_ENDPOINT")) {
        e.preventDefault();
        successBox.style.display = "block";
        successBox.innerHTML = "Demo mode is active. Replace the form endpoint in the HTML with your real Formspree, Tally, Basin, or other submission URL.";
        form.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // Lightweight click analytics hooks for Plausible/Fathom or custom scripts later
  document.querySelectorAll("[data-track]").forEach((el) => {
    el.addEventListener("click", () => {
      const eventName = el.getAttribute("data-track");
      if (window.plausible) {
        window.plausible(eventName);
      }
      if (window.fathom && window.fathom.trackEvent) {
        window.fathom.trackEvent(eventName);
      }
      console.log("Track:", eventName);
    });
  });
});