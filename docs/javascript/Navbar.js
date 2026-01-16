const navbar = document.getElementById("navbar");

navbar.innerHTML = `
  <header class="fixed w-full top-0 z-50 bg-neutral-950/70 backdrop-blur-xl border-b border-white/10">
    <nav class="mx-auto max-w-7xl px-6">
      <div class="flex h-20 md:h-24 items-center justify-between">
        <a href="index.html" class="inline-flex items-center gap-3">
          <span class="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-300">
            <i class="fa-solid fa-dumbbell"></i>
          </span>
          <span class="text-base font-semibold tracking-tight text-white">
            JK Physical Culture
          </span>
        </a>

        <div class="hidden items-center lg:flex">
          <a href="index.html#services" class="rounded-xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white">
            Programs
          </a>

          <a href="personal-assessment.html" class="rounded-xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white">
            Personal Assessment
          </a>

          <a href="mobility-class.html" class="rounded-xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white">
            Mobility Class
          </a>

          <a href="remote-coaching.html" class="rounded-xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white">
            Remote Coaching
          </a>

          <a href="testimonials.html" class="rounded-xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white">
            Testimonials
          </a>

          <a href="qualifications.html" class="rounded-xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white">
            Qualifications
          </a>

          <a
            href="contact.html"
            class="ml-2 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-neutral-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
          >
            <i class="fa-solid fa-calendar-check"></i>
            Contact
          </a>
        </div>

        <button
          id="navToggle"
          type="button"
          aria-controls="mobileNav"
          aria-expanded="false"
          class="lg:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2.5 text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
        >
          <span class="sr-only">Open menu</span>
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
      </div>
    </nav>

    <div
      id="mobileNav"
      class="lg:hidden overflow-hidden border-t border-white/10 bg-neutral-950/90 backdrop-blur-xl transition-all duration-300 ease-out max-h-0 opacity-0"
    >
      <div class="mx-auto max-w-7xl px-6 py-4">
        <div class="grid gap-2">
          <a href="index.html#services" class="rounded-xl px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-white">
            <i class="fa-solid fa-dumbbell mr-2 text-emerald-300"></i>Programs
          </a>

          <a href="personal-assessment.html" class="rounded-xl px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-white">
            <i class="fa-solid fa-clipboard-check mr-2 text-emerald-300"></i>Personal Assessment
          </a>

          <a href="mobility-class.html" class="rounded-xl px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-white">
            <i class="fa-solid fa-person-running mr-2 text-emerald-300"></i>Mobility Class
          </a>

          <a href="remote-coaching.html" class="rounded-xl px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-white">
            <i class="fa-solid fa-video mr-2 text-emerald-300"></i>Remote Coaching
          </a>

          <a href="testimonials.html" class="rounded-xl px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-white">
            <i class="fa-solid fa-quote-left mr-2 text-emerald-300"></i>Testimonials
          </a>

          <a href="qualifications.html" class="rounded-xl px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-white">
            <i class="fa-solid fa-award mr-2 text-emerald-300"></i>Qualifications
          </a>

          <a
            href="contact.html"
            class="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
          >
            <i class="fa-solid fa-envelope"></i>
            Contact / Book
          </a>
        </div>
      </div>
    </div>
  </header>
`;

const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");

const openMenu = () => {
  mobileNav.classList.remove("max-h-0", "opacity-0");
  mobileNav.classList.add("max-h-[520px]", "opacity-100");
  navToggle.setAttribute("aria-expanded", "true");
};

const closeMenu = () => {
  mobileNav.classList.add("max-h-0", "opacity-0");
  mobileNav.classList.remove("max-h-[520px]", "opacity-100");
  navToggle.setAttribute("aria-expanded", "false");
};

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  isOpen ? closeMenu() : openMenu();
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => closeMenu());
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
