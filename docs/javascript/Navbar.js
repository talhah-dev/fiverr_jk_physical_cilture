const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<header class="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur shadow">
    <div class="max-w-7xl mx-auto px-6">
        <div class="flex items-center h-20 md:h-24">

            <div class="flex items-center w-1/4 flex-1">
                <a href="/index.html">
                    <img src="/docs/assets/logo.png" class="md:h-9 h-7" alt="Roofing Logo">
                </a>
            </div>

            <nav class="hidden lg:flex items-center justify-center gap-10 w-2/4 font-semibold text-gray-900">
                <a href="/index.html" class="hover:text-yellow-500 transition">Home</a>
                <a href="/about.html" class="hover:text-yellow-500 transition">About</a>

                <div class="relative group">
                    <button class="flex items-center gap-2 hover:text-yellow-500 transition">
                        Services
                        <i class="fa-solid fa-chevron-down text-sm"></i>
                    </button>

                    <div class="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div class="w-72 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">

                            <a href="/commercial-roofing.html" class="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition">
                                <span class="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center text-gray-900">
                                    <i class="fa-solid fa-building"></i>
                                </span>
                                <span class="font-semibold">Commercial Roofing</span>
                            </a>

                            <a href="/multi-family-roofing.html" class="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition">
                                <span class="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center text-gray-900">
                                    <i class="fa-solid fa-people-roof"></i>
                                </span>
                                <span class="font-semibold">Multi-Family Roofing</span>
                            </a>

                            <a href="/roof-repair.html" class="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition">
                                <span class="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center text-gray-900">
                                    <i class="fa-solid fa-screwdriver-wrench"></i>
                                </span>
                                <span class="font-semibold">Roof Repair</span>
                            </a>

                            <a href="/residential-roofing.html" class="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition">
                                <span class="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center text-gray-900">
                                    <i class="fa-solid fa-house"></i>
                                </span>
                                <span class="font-semibold">Residential Roofing</span>
                            </a>

                            <a href="/new-roofing.html" class="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition">
                                <span class="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center text-gray-900">
                                    <i class="fa-solid fa-helmet-safety"></i>
                                </span>
                                <span class="font-semibold">New Roofing</span>
                            </a>

                        </div>
                    </div>
                </div>

                <a href="/faq.html" class="hover:text-yellow-500 transition">FAQ</a>
                <a href="/contact.html" class="hover:text-yellow-500 transition">Contact</a>
            </nav>

            <div class="hidden lg:flex justify-end w-1/4">
                <a href="/contact.html"
                    class="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg transition">
                    Free Estimate
                </a>
            </div>

            <button id="menuBtn" class="lg:hidden ml-auto text-gray-900 text-2xl">
                <i class="fa-solid fa-bars"></i>
            </button>

        </div>
    </div>
</header>

<div class="h-20 md:h-24"></div>

<div id="mobileMenu"
    class="fixed inset-0 z-50 bg-gray-900 text-white transform translate-x-full transition-transform duration-500 ease-in-out">

    <div class="flex items-center justify-between px-6 h-20 border-b border-gray-800">
        <span class="text-xl font-bold">Menu</span>
        <button id="closeMenu" class="text-2xl">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>

    <nav class="flex flex-col px-6 pt-10 text-lg font-semibold">
        <a href="/index.html" class="hover:text-yellow-400 block py-3 transition">Home</a>
        <a href="/about.html" class="hover:text-yellow-400 block py-3 transition">About</a>

        <button id="mobileServicesBtn" class="flex items-center justify-between block py-3 hover:text-yellow-400 transition">
            <span>Services</span>
            <i id="mobileServicesIcon" class="fa-solid fa-chevron-down text-sm transition-transform duration-300"></i>
        </button>

        <div id="mobileServicesList" class="max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
            <div class="mt-3 flex flex-col gap-3 pl-3 text-base">
                <a href="/residential-roofing.html" class="hover:text-yellow-400 transition">Residential Roofing</a>
                <a href="/commercial-roofing.html" class="hover:text-yellow-400 transition">Commercial Roofing</a>
                <a href="/multi-family-roofing.html" class="hover:text-yellow-400 transition">Multi-Family Roofing</a>
                <a href="/roof-repair.html" class="hover:text-yellow-400 transition">Roof Repair</a>
                <a href="/new-roofing.html" class="hover:text-yellow-400 transition">New Roofing</a>
            </div>
        </div>

        <a href="/faq.html" class="hover:text-yellow-400 block py-3 transition">FAQ</a>
        <a href="/contact.html" class="hover:text-yellow-400 block py-3 transition">Contact</a>

        <a href="/contact.html"
            class="mt-6 inline-flex items-center justify-center bg-yellow-500 text-gray-900 font-bold py-4 rounded-xl">
            Free Estimate
        </a>
    </nav>
</div>
`;

const menuBtn = document.getElementById('menuBtn');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
});

const mobileServicesBtn = document.getElementById('mobileServicesBtn');
const mobileServicesList = document.getElementById('mobileServicesList');
const mobileServicesIcon = document.getElementById('mobileServicesIcon');

mobileServicesBtn.addEventListener('click', () => {
    const isOpen = mobileServicesList.style.maxHeight && mobileServicesList.style.maxHeight !== '0px';

    if (isOpen) {
        mobileServicesList.style.maxHeight = '0px';
        mobileServicesIcon.style.transform = 'rotate(0deg)';
    } else {
        mobileServicesList.style.maxHeight = mobileServicesList.scrollHeight + 'px';
        mobileServicesIcon.style.transform = 'rotate(180deg)';
    }
});
