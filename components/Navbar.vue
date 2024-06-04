<template>
    <nav class="bg-white">
        <div
            class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
            <a href="/" class="flex items-center">
                <img
                    src="/logo.png"
                    class="h-8 mr-3"
                    alt="BeYou Studio Logo"
                />
                <span
                    class="self-center text-2xl font-semibold whitespace-nowrap"
                    >BeYou Studio</span
                >
            </a>

            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white"
                >
                    <li>
                        <a
                            href="#home"
                            class="block py-2 pl-3 pr-4 bg-green-200 rounded md:bg-transparent md:p-0"
                            aria-current="page"
                            >Home</a
                        >
                    </li>
                    <li>
                        <a
                            href="#about"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-400 md:p-0"
                            >About</a
                        >
                    </li>
                    <li>
                        <a
                            href="#games"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-400 md:p-0"
                            >Game</a
                        >
                    </li>
                    <li>
                        <a
                            href="#contacts"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                            >Contact</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>