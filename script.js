const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open menu");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const recipient = "arfikhan0275@gmail.com";

  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`);
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\nProject details:\n${data.get("message")}`
  );
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});


// Carry the selected service into the contact form when a service CTA is clicked.
document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    const serviceSelect = document.getElementById("service");
    const requestedService = link.getAttribute("data-service");
    const matchingOption = Array.from(serviceSelect.options).find((option) =>
      option.text.toLowerCase() === requestedService.toLowerCase() ||
      (requestedService.includes("Social Media") && option.text === "Social media marketing") ||
      (requestedService.includes("Web Development") && option.text === "Website development") ||
      (requestedService.includes("SEO") && option.text === "SEO & website optimization") ||
      (requestedService.includes("Landing") && option.text === "Landing page development") ||
      (requestedService.includes("Lead Pages") && option.text === "Something else")
    );
    if (matchingOption) serviceSelect.value = matchingOption.value;
  });
});
