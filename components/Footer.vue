<template>
    <div class="max-w-screen-xl mx-auto my-10 px-4">
        <div class="my-4">
            <img
                src="/logo.png"
                alt="Footer logo"
                style="width: 50px; height: 50px"
            />
            <h1 class="text-xl my-1">BeYouStudio.Pro</h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mt-6">
            <div>
                <h2>LEARN KOREAN</h2>
                <ul class="mt-4">
                    <li class="text-blue-500 hover:underline">
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li class="text-blue-500 hover:underline">
                        <nuxt-link to="/beginner/">Korean Hangul</nuxt-link>
                    </li>
                    <li class="text-blue-500 hover:underline">
                        <nuxt-link to="/korean-vocabulary-lists/"
                            >Vocabularies</nuxt-link
                        >
                    </li>
                    <li class="text-blue-500 hover:underline">
                        <nuxt-link to="/korean-phrases/"
                            >Phrases / Sentences</nuxt-link
                        >
                    </li>
                    <li class="text-blue-500 hover:underline">
                        <nuxt-link to="/korean-conversations/"
                            >Conversations</nuxt-link
                        >
                    </li>
                    <li class="text-blue-500 hover:underline">
                        <nuxt-link to="/eps-topik">EPS TOPIK</nuxt-link>
                    </li>
                </ul>
            </div>
            <div>
                <h2>ABOUT US</h2>
                <ul class="mt-4">
                    <li class="text-blue-500 hover:underline">
                        <nuxt-link to="/about-us/">About Us</nuxt-link>
                    </li>
                    <li class="text-blue-500 hover:underline">
                        <nuxt-link to="/contact-us/">Contact Us</nuxt-link>
                    </li>
                    <li class="text-blue-500 hover:underline">
                        <nuxt-link to="/blog/">Blog </nuxt-link>
                    </li>
                </ul>
            </div>
            <div>
                <h2>FOLLOW US</h2>
                <ul class="mt-4">
                    <li class="text-blue-500 hover:underline">
                        <a
                            href="https://facebook.com/beyoustudio98"
                            target="_blank"
                        >
                            <img
                                src="/social/facebook.png"
                                alt="Facebook Logo"
                                class="h-8 w-8"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mt-10 text-center">
            <p class="flex justify-center items-center">
                Made with
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 text-red-500"
                >
                    <path
                        d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                    />
                </svg>
                Since 2024
            </p>
            <nuxt-link to="/privacy-policy" class="hover:underline"
                >Terms & Policy</nuxt-link
            >
        </div>
    </div>
</template>
