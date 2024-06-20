<template>
    <main class="max-w-screen-xl mx-auto min-h-screen">
        <div class="w-full h-screen flex flex-col justify-center items-center">
            <div class="grid grid-cols-2">
                <div>
                    <img src="/gif/giphy.gif" class="mx-auto" />
                </div>
                <div class="mt-10">
                    <h1 class="text-2xl">Welcome to BeYou Studio!</h1>
                    <h2
                        class="text-2xl mt-6 bg-green-400 p-4 rounded text-white"
                    >
                        안녕하세요! (Annyeonghaseyo!)
                    </h2>
                    <h3 class="text-xl my-6">
                        Start your journey to master Korean with our easy and
                        fun lessons. Dive into Hangul, expand your vocabulary,
                        and explore Korean culture with us.
                    </h3>
                    <nuxt-link
                        to="/beginner/"
                        class="mt-6 bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded"
                    >
                        Let's learn together!
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div class="my-6">
                <h4 class="text-3xl font-bold">Korean Hangul</h4>
                <p>
                    Dive into the fundamentals of the Korean writing system with
                    our Hangul section. Learn the alphabet, pronunciation, and
                    essential rules to read and write Korean effortlessly.
                </p>
                <div class="mt-4">
                    <nuxt-link
                        to="/beginner/"
                        class="px-4 py-2 border transition-5s rounded border-blue-200 transition-5s hover:bg-blue-100"
                        >Start Lesson</nuxt-link
                    >
                </div>
            </div>
            <div class="my-6">
                <h4 class="text-3xl font-bold">Vocabularies</h4>
                <p>
                    Expand your Korean vocabulary with our comprehensive
                    Vocabularies section. Explore diverse categories ranging
                    from everyday essentials to specialized topics, enhancing
                    your language skills effectively.
                </p>
                <div class="mt-4">
                    <nuxt-link
                        to="/korean-vocabulary-lists/"
                        class="px-4 py-2 border transition-5s rounded border-blue-200 transition-5s hover:bg-blue-100"
                        >Start Lesson</nuxt-link
                    >
                </div>
            </div>

            <div class="my-6">
                <h4 class="text-3xl font-bold">Phrases</h4>
                <p>
                    Master practical Korean phrases and sentences in real-life
                    contexts through our Phrase/Sentence section. Perfect for
                    learners looking to communicate confidently in various
                    situations, from greetings to travel essentials.
                </p>
                <div class="mt-4">
                    <nuxt-link
                        to="/korean-phrases/"
                        class="px-4 py-2 border transition-5s rounded border-blue-200 transition-5s hover:bg-blue-100"
                        >Start Lesson</nuxt-link
                    >
                </div>
            </div>

            <div class="my-6">
                <h4 class="text-3xl font-bold">Conversations</h4>
                <p>
                    Immerse yourself in conversational Korean with our
                    Conversation section. Discover dialogues, role-plays, and
                    interactive exercises designed to improve your speaking and
                    listening skills, making language learning engaging and
                    effective.
                </p>
                <div class="mt-4">
                    <nuxt-link
                        to="/korean-conversations/"
                        class="px-4 py-2 border transition-5s rounded border-blue-200 transition-5s hover:bg-blue-100"
                        >Start Lesson</nuxt-link
                    >
                </div>
            </div>
        </div>
        <div class="mt-32">
            <div class="text-center">
                <h4 class="text-3xl font-bold">Learn anytime, anywhere.</h4>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts"></script>
