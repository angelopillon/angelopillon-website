/* angelopillon.com — calm interface layer (November 2026).
   Native scrolling only: no smooth-scroll library, nothing pinned, scrubbed, split or parallaxed.
   What is left: the header turns solid after the top of the page, and one FAQ answer is open at a time. */
const d = document, root = d.documentElement;
root.classList.add("js-calm");
window.APLenis = null;

/* header: translucent bar once the page has moved; it never hides or slides */
const header = d.querySelector(".site-header");
if (header) {
  const onScroll = () => header.classList.toggle("is-solid", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* FAQ: one answer open at a time */
const faqs = Array.from(d.querySelectorAll(".faq details"));
faqs.forEach((dt) => dt.addEventListener("toggle", () => { if (dt.open) faqs.forEach((o) => { if (o !== dt) o.open = false; }); }));

/* numbers that used to count up are shown as they are */
d.querySelectorAll("[data-count]").forEach((el) => {
  const to = parseFloat(el.getAttribute("data-count")), dec = parseInt(el.getAttribute("data-dec") || "0", 10);
  if (!isNaN(to)) el.textContent = to.toLocaleString(root.lang || "en", { minimumFractionDigits: dec, maximumFractionDigits: dec });
});
