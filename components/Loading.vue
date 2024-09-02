<template>
    <div class="max-w-300">
        <div
            role="status"
            class="space-y-2 animate-pulse md:space-y-0 rtl:space-x-reverse md:items-center"
        >
            <div>
                <div
                    class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-100 mb-4"
                ></div>
                <div
                    class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"
                ></div>
                <div
                    class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"
                ></div>
                <div
                    v-for="n in 4"
                    :key="n"
                    class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-100 min-w-50 mb-4"
                ></div>
            </div>
        </div>
    </div>
</template>
