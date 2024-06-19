<template>
    <div class="min-h-screen content-image content-section">
        <ContentDoc>
            <template #not-found>
                <h1>Document not found</h1>
            </template>
        </ContentDoc>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const url = computed(() => removeTrailingSlash(route.path));

const { data }: any = await useAsyncData("beginner", () =>
    queryContent("/beginner").where({ _path: url.value }).find()
);

useHead({
    meta: [
        //  Twitter
        {
            property: "twitter:title",
            content: data.value[0]?.title + " - " + SITE_TITLE,
        },
        {
            property: "twitter:description",
            content: data.value[0]?.description,
        },
        {
            property: "twitter:image",
            content: data.value[0]?.image,
        },
    ],
});

function removeTrailingSlash(url: string) {
    // Use regex to replace the trailing slash if it exists
    return url.replace(/\/$/, "");
}
</script>
