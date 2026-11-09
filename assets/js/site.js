/* angelopillon.com — core behaviour (no dependencies) */
(function () {
  "use strict";
  var d = document, root = d.documentElement, body = d.body;
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function recall(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function $(s, c) { return (c || d).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || d).querySelectorAll(s)); }

  /* ---------- toast ---------- */
  var toastEl = null, toastT = null;
  function toast(msg) {
    if (!toastEl) { toastEl = d.createElement("div"); toastEl.className = "toast"; toastEl.setAttribute("role", "status"); body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.hidden = false;
    clearTimeout(toastT); toastT = setTimeout(function () { toastEl.hidden = true; }, 2200);
  }
  window.APtoast = toast;

  /* ---------- mobile menu ---------- */
  var menuBtn = $(".menu-btn");
  function closeMenu() { body.classList.remove("menu-open"); if (menuBtn) menuBtn.setAttribute("aria-expanded", "false"); if (window.APLenis) window.APLenis.start(); }
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      var open = body.classList.toggle("menu-open");
      if (window.APLenis) { if (open) window.APLenis.stop(); else window.APLenis.start(); }
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $$(".nav a").forEach(function (a) { a.addEventListener("click", closeMenu); });
    d.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
  }
  d.addEventListener("click", function (e) {
    $$("details.lang[open]").forEach(function (det) { if (!det.contains(e.target)) det.removeAttribute("open"); });
  });

  /* ---------- consent + analytics (GA4, Consent Mode v2) ---------- */
  var GA = root.getAttribute("data-ga");
  var consentEl = $("#consent");
  function loadAnalytics() {
    if (!GA || window.__ga4) return;
    window.__ga4 = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag("consent", "default", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied" });
    window.gtag("consent", "update", { analytics_storage: "granted" });
    window.gtag("js", new Date());
    window.gtag("config", GA, { anonymize_ip: true });
    var s = d.createElement("script");
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA);
    s.async = true;
    d.head.appendChild(s);
  }
  function showConsent(v) { if (consentEl) consentEl.hidden = !v; }
  var consent = recall("ap_consent");
  if (consent === "yes") loadAnalytics();
  else if (consent === null && consentEl) setTimeout(function () { showConsent(true); }, 700);
  $$("[data-consent]").forEach(function (b) {
    b.addEventListener("click", function () {
      var yes = b.getAttribute("data-consent") === "yes";
      store("ap_consent", yes ? "yes" : "no");
      showConsent(false);
      if (yes) loadAnalytics();
      else if (window.__ga4) { window.gtag("consent", "update", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "denied" }); }
    });
  });
  $$("[data-consent-open]").forEach(function (b) { b.addEventListener("click", function () { showConsent(true); }); });

  /* ---------- table of contents starts folded on small screens ---------- */
  var tocD = $(".toc details");
  if (tocD && window.matchMedia && matchMedia("(max-width:1040px)").matches) tocD.removeAttribute("open");

  /* ---------- article: progress, TOC scrollspy, share ---------- */
  var prog = $(".progress"), art = $("article .prose");
  if (prog && art) {
    var ticking = false;
    var upd = function () {
      var r = art.getBoundingClientRect(), h = r.height - innerHeight * 0.6;
      var p = h > 0 ? Math.min(1, Math.max(0, -r.top / h)) : 0;
      prog.style.transform = "scaleX(" + p.toFixed(4) + ")";
      ticking = false;
    };
    addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
    upd();
  }
  var tocLinks = $$(".toc a[href^='#']");
  if (tocLinks.length && "IntersectionObserver" in window) {
    var map = {};
    tocLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var heads = Object.keys(map).map(function (id) { return d.getElementById(id); }).filter(Boolean);
    var active = null;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          if (active) active.classList.remove("is-active");
          active = map[en.target.id]; if (active) active.classList.add("is-active");
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    heads.forEach(function (h) { io.observe(h); });
  }
  $$("[data-share='copy']").forEach(function (b) {
    b.addEventListener("click", function () {
      var url = location.href.split("#")[0];
      var done = function () { toast(b.getAttribute("data-done") || "Link copied"); };
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, function () { prompt("", url); });
      else { prompt("", url); }
    });
  });
  $$("[data-share='native']").forEach(function (b) {
    if (!navigator.share) { b.remove(); return; }
    b.addEventListener("click", function () { navigator.share({ title: d.title, url: location.href.split("#")[0] }).catch(function () {}); });
  });

  /* ---------- hub: search + category filter ---------- */
  var hub = $("[data-hub]");
  if (hub) {
    var q = $("[data-hub-search]", hub), chips = $$("[data-filter]", hub), rows = $$("[data-row]", hub);
    var empty = $(".hub-empty", hub), count = $(".hub-count", hub), cat = "all";
    var norm = function (s) { return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); };
    var apply = function () {
      var term = norm(q && q.value).trim(), shown = 0;
      rows.forEach(function (r) {
        var okCat = cat === "all" || (r.getAttribute("data-cat") || "").split(" ").indexOf(cat) >= 0;
        var okQ = !term || norm(r.getAttribute("data-text")).indexOf(term) >= 0;
        r.hidden = !(okCat && okQ); if (!r.hidden) shown++;
      });
      if (empty) empty.hidden = shown > 0;
      if (count) count.textContent = (count.getAttribute("data-tpl") || "{n}").replace("{n}", shown);
    };
    if (q) q.addEventListener("input", apply);
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        cat = c.getAttribute("data-filter");
        chips.forEach(function (x) { x.setAttribute("aria-pressed", x === c ? "true" : "false"); });
        apply();
      });
    });
    var params = new URLSearchParams(location.search);
    if (params.get("q") && q) q.value = params.get("q");
    apply();
  }

  /* ---------- estimate (list prices) ---------- */
  var est = $("[data-estimate]");
  if (est) {
    var sel = $("select", est), out = $("output", est), nEl = $("[data-n]", est), n = 1;
    var fmt = est.getAttribute("data-fmt") || "from EUR {p}";
    var refresh = function () {
      var opt = sel.options[sel.selectedIndex], p = parseInt(opt.getAttribute("data-price"), 10) || 0;
      var total = p * n, pack = (opt.getAttribute("data-pack") || "").split(":");
      if (pack.length === 2) { var size = parseInt(pack[0], 10), price = parseInt(pack[1], 10); if (size > 1 && price > 0) total = Math.floor(n / size) * price + (n % size) * p; }
      nEl.textContent = n; out.textContent = fmt.replace("{p}", total.toLocaleString());
    };
    $("[data-minus]", est).addEventListener("click", function () { n = Math.max(1, n - 1); refresh(); });
    $("[data-plus]", est).addEventListener("click", function () { n = Math.min(30, n + 1); refresh(); });
    sel.addEventListener("change", refresh);
    var go = $("[data-estimate-go]", est);
    if (go) go.addEventListener("click", function () {
      var form = $("#contact-form");
      if (!form) return;
      var opt = sel.options[sel.selectedIndex];
      var svc = $("select[name=service]", form);
      if (svc) { for (var i = 0; i < svc.options.length; i++) if (svc.options[i].value === opt.value) svc.selectedIndex = i; }
      var ta = $("textarea[name=message]", form);
      var line = (est.getAttribute("data-msg") || "{s}, {n} track(s)").replace("{s}", opt.textContent).replace("{n}", n);
      if (ta && ta.value.indexOf(line) < 0) ta.value = line + (ta.value ? "\n" + ta.value : "\n");
      form.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(function () { if (ta) ta.focus({ preventScroll: true }); }, 450);
    });
    refresh();
  }

  /* ---------- contact form (Netlify Forms) ---------- */
  var form = $("#contact-form");
  if (form) {
    var status = $(".form-status", form);
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var btn = $("button[type=submit]", form);
      btn.disabled = true;
      status.className = "form-status"; status.textContent = form.getAttribute("data-busy") || "Sending…";
      var data = new URLSearchParams(new FormData(form)).toString();
      fetch(form.getAttribute("action") || "/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: data })
        .then(function (r) { if (!r.ok) throw new Error(r.status); status.textContent = form.getAttribute("data-ok"); status.className = "form-status is-ok"; form.reset(); })
        .catch(function () { status.innerHTML = form.getAttribute("data-err"); status.className = "form-status is-err"; })
        .finally(function () { btn.disabled = false; });
    });
  }

  /* ---------- year, service worker ---------- */
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  if (root.getAttribute("data-sw") === "1" && "serviceWorker" in navigator) {
    addEventListener("load", function () { navigator.serviceWorker.register("/sw.js").catch(function () {}); });
  }
})();
