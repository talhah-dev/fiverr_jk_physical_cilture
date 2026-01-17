const footer = document.getElementById('footer')
footer.innerHTML = `
<!-- Footer Section -->
<footer class="bg-neutral-950">
  <div class="mx-auto max-w-7xl px-6 pt-16 md:pt-20">
    <div class="grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-4">
      <div class="lg:col-span-2">
        <a href="index.html" class="inline-flex items-center gap-3">
          <span class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-300">
            <i class="fa-solid fa-dumbbell"></i>
          </span>
          <span class="text-lg font-semibold tracking-tight text-white">
            JK Physical Culture
          </span>
        </a>

        <p class="mt-4 max-w-xl text-sm leading-relaxed text-white/65">
          Strength coaching and personal training in El Segundo &amp; the South Bay. Technique-first programming built for sustainable progress.
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <a
            href="https://www.instagram.com/jkphysicalculture"
            target="_blank"
            class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10"
          >
            <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-300">
              <i class="fa-brands fa-instagram"></i>
            </span>
            Instagram
          </a>

          <a
            href="https://www.facebook.com/jkphysicalculture"
            target="_blank"
            class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10"
          >
            <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-300">
              <i class="fa-brands fa-facebook"></i>
            </span>
            Facebook
          </a>

          <a
            href="https://www.yelp.com/biz/jk-physical-culture-el-segundo?osq=Trainers"
            target="_blank"
            class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10"
          >
            <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-300">
              <i class="fa-brands fa-yelp"></i>
            </span>
            Yelp
          </a>
        </div>
      </div>

      <div>
        <p class="text-sm font-semibold text-white">Quick Links</p>
        <ul class="mt-4 space-y-3 text-sm text-white/70">
          <li><a href="/index.html#services" class="transition hover:text-white">Programs</a></li>
          <li><a href="/index.html#how-it-works" class="transition hover:text-white">How it works</a></li>
          <li><a href="/index.html#testimonials" class="transition hover:text-white">Testimonials</a></li>
          <li><a href="/index.html#faq" class="transition hover:text-white">FAQ</a></li>
          <li><a href="/index.html#contact" class="transition hover:text-white">Contact</a></li>
        </ul>
      </div>

      <div>
        <p class="text-sm font-semibold text-white">Pages</p>
        <ul class="mt-4 space-y-3 text-sm text-white/70">
          <li><a href="about.html" class="transition hover:text-white">About</a></li>
          <li><a href="qualifications.html" class="transition hover:text-white">Qualifications</a></li>
          <li><a href="testimonials.html" class="transition hover:text-white">Reviews</a></li>
          <li><a href="personal-assessment.html" class="transition hover:text-white">Personal Assessment</a></li>
          <li><a href="mobility-class.html" class="transition hover:text-white">Mobility Class</a></li>
          <li><a href="remote-coaching.html" class="transition hover:text-white">Remote Coaching</a></li>
          <li><a href="contact.html" class="transition hover:text-white">Contact</a></li>
        </ul>
      </div>
    </div>

    <div class="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
      <div class="grid items-center gap-6 md:grid-cols-[1.2fr_.8fr]">
        <div>
          <h3 class="text-xl font-semibold text-white md:text-2xl">
            Get new posts by email
          </h3>
          <p class="mt-2 text-sm text-white/70">
            Occasional updates, training tips, and announcements.
          </p>
        </div>

        <form class="flex flex-col gap-3 sm:flex-row md:justify-end">
          <input
            type="email"
            required
            class="w-full rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-emerald-400 focus:outline-none sm:max-w-xs"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
          >
            <i class="fa-solid fa-bell"></i>
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div class="mt-10 flex flex-col gap-3 border-t border-white/10 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
      <p>Copyright © 2026 JK Physical Culture — All rights reserved.</p>
      <div class="flex flex-wrap gap-4">
        <a href="/contact" class="transition hover:text-white">Book Appointment</a>
      </div>
    </div>
  </div>
</footer>

`