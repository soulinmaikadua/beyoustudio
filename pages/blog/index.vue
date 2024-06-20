<template>
    <div class="min-h-screen">
        <div>
            <h1 class="text-2xl font-bold border-b-2 py-5 md:py-32">
                Blog (ບົດຄວາມ)
            </h1>
            <div class="mt-6 grid grid-cosl-2 md:grid-cols-4 gap-4">
                <ContentList path="/blog" v-slot="{ list }">
                    <div v-for="(blog, index) in list" :key="index">
                        <nuxt-link :to="blog._path" class="text-xl">
                            <img
                                src="https://dummyimage.com/400x400/000/fff"
                                alt="work"
                            />
                            {{ blog.title }}
                        </nuxt-link>
                    </div>
                </ContentList>
            </div>
        </div>
    </div>
</template>
