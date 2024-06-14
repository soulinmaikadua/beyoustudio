<template>
    <div>
        <ContentList path="/blog" v-slot="{ list }">
            <div v-for="(blog, index) in list" :key="index">
                <nuxt-link :to="blog._path" class="text-xl">{{
                    blog.title
                }}</nuxt-link>
            </div>
        </ContentList>
    </div>
</template>
<script setup lang="ts">
const { data } = await useAsyncData("blog", () => queryContent("/blog").find());
</script>