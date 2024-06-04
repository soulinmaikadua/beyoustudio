<template>
    <div class="text-center my-10">
        <div class="my-10">
            <img
                src="/logo.png"
                class="mx-auto"
                alt="Footer logo"
                style="width: 50px; height: 50px"
            />
        </div>
        <div>
            <nuxt-link to="/privacy-policy" class="underline"
                >Terms & Policy</nuxt-link
            >
        </div>
        <h3 class="my-2">BE YOU STUDIO</h3>
        <p>Play for challenge, challenge you to play</p>

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
            since 2022
        </p>
        <div class="mt-6 text-center">
            <a href="https://github.com/soulinmaikadua/beyoustudio" target="_blank" class="bg-green-100">
                <span class="sr-only">Go to Soulinmaikadua's GitHub repo</span>
                <svg
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    width="32"
                    height="32"
                    astro-icon="social/github"
                >
                    <path
                        fill="currentColor"
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                    ></path>
                </svg>
            </a>
        </div>
    </div>
</template>
