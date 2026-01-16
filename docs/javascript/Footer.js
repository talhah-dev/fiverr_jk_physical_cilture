const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="bg-gray-900 text-gray-300 pt-20">
        <div class="max-w-7xl mx-auto px-6">

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">

                <div data-aos="fade-up">
                    <img src="/docs/assets/logo.png" alt="Roofers Logo" class="h-10 mb-6">
                    <p class="text-gray-400 mb-6">
                        Providing trusted residential and commercial roofing services
                        with quality craftsmanship and long-lasting results.
                    </p>
                    <div class="flex gap-4">
                        <a href="#"
                            class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-500 hover:text-gray-900 transition">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#"
                            class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-500 hover:text-gray-900 transition">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#"
                            class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-500 hover:text-gray-900 transition">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="200">
                    <h4 class="text-white text-lg font-bold mb-6">Quick Links</h4>
                    <ul class="space-y-4">
                        <li><a href="/index.html" class="hover:text-yellow-400 transition">Home</a></li>
                        <li><a href="/about.html" class="hover:text-yellow-400 transition">About Us</a></li>
                        <li><a href="/services.html" class="hover:text-yellow-400 transition">Services</a></li>
                        <li><a href="/faq.html" class="hover:text-yellow-400 transition">FAQ</a></li>
                        <li><a href="/contact.html" class="hover:text-yellow-400 transition">Contact Us</a></li>
                    </ul>
                </div>

                <div data-aos="fade-up" data-aos-delay="400">
                    <h4 class="text-white text-lg font-bold mb-6">Our Services</h4>
                    <ul class="space-y-4">
                        <li><a href="/residential-roofing.html" class="hover:text-yellow-400 transition">Residential
                                Roofing</a></li>
                        <li><a href="/commercial-roofing.html" class="hover:text-yellow-400 transition">Commercial
                                Roofing</a></li>
                        <li><a href="/multi-family-roofing.html" class="hover:text-yellow-400 transition">Multi-Family
                                Roofing</a></li>
                        <li><a href="/roof-repair.html" class="hover:text-yellow-400 transition">Roof Repair</a></li>
                        <li><a href="/new-roofing.html" class="hover:text-yellow-400 transition">New Roofing</a></li>
                    </ul>
                </div>

                <div data-aos="fade-up" data-aos-delay="600">
                    <h4 class="text-white text-lg font-bold mb-6">Contact Info</h4>
                    <ul class="space-y-5">
                        <li class="flex gap-4">
                            <i class="fa-solid fa-location-dot text-yellow-400 mt-1"></i>
                            <span>San Antonio, TX</span>
                        </li>
                        <li class="flex gap-4">
                            <i class="fa-solid fa-phone text-yellow-400 mt-1"></i>
                            <a href="tel:+1234567890" class="hover:text-yellow-400 transition">(123) 456-7890</a>
                        </li>
                        <li class="flex gap-4">
                            <i class="fa-solid fa-envelope text-yellow-400 mt-1"></i>
                            <a href="mailto:info@roofers.com"
                                class="hover:text-yellow-400 transition">info@roofers.com</a>
                        </li>
                        <li class="flex gap-4">
                            <i class="fa-solid fa-clock text-yellow-400 mt-1"></i>
                            <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
                        </li>
                    </ul>
                </div>

            </div>

            <div
                class="border-t border-white/10 py-8 flex justify-center text-center items-center gap-4 text-sm">
                <p class="text-gray-400">
                    © 2026 Roofers. All Rights Reserved.
                </p>
            </div>

        </div>
    </footer>
`