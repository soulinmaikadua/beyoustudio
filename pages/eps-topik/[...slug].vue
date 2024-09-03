<template>
    <div>
        <div>
            <div v-if="splitWords(route.params.slug[1])">
                <h1 class="text-2xl font-bold">
                    {{ splitWords(route.params.slug[1]) }}
                </h1>
            </div>
            <div class="border my-3"></div>
            <div v-if="workRelated.length > 0" class="mt-4">
                <p class="my-2">
                    [{{ currentIndex + 1 }}/{{ workRelated.length }}]
                </p>
                <img
                    v-if="workRelated[currentIndex]?.image"
                    :src="workRelated[currentIndex]?.image"
                    :alt="`Photo ${currentIndex}`"
                />
                <p>{{ workRelated[currentIndex].english }}</p>
                <p>{{ workRelated[currentIndex].question }}</p>
                <ul class="mt-4">
                    <li
                        v-for="(item, index) in workRelated[currentIndex]
                            .choices"
                        :key="index"
                    >
                        <input
                            v-model="answer"
                            type="radio"
                            :id="`radio-${index}`"
                            name="answer"
                            :value="item"
                            :disabled="isCheck"
                        />
                        <label :for="`radio-${index}`" class="ml-2">{{
                            item
                        }}</label>
                    </li>
                </ul>
                <div v-if="isCheck && answer" class="mt-4">
                    <div
                        v-if="answer === workRelated[currentIndex].answer"
                        class="bg-green-100 border border-green-500 rounded py-2 px-4"
                    >
                        <p class="text-green-500">Correct: {{ answer }}.</p>
                    </div>
                    <div
                        v-else
                        class="bg-red-100 border border-red-500 rounded py-2 px-4"
                    >
                        <p class="text-red-500">
                            Wrong: {{ answer }}
                            <span class="text-green-500"
                                >Correct:
                                {{ workRelated[currentIndex].answer }}</span
                            >
                        </p>
                    </div>
                </div>

                <div class="mt-4">
                    <button
                        v-if="isCheck"
                        class="px-4 py-1 border transition-5s rounded border-blue-200 transition-5s hover:bg-blue-100"
                        aria-label="next"
                        @click="onNext"
                    >
                        Next
                    </button>
                    <button
                        v-else
                        class="px-4 py-1 border transition-5s rounded border-blue-200 transition-5s hover:bg-blue-100"
                        aria-label="check"
                        @click="onCheck"
                    >
                        Check
                    </button>
                </div>
            </div>
            <div v-else>
                Loading...
                <!-- <Loading /> -->
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const route: any = useRoute();
const loading = ref(false);
const currentIndex = ref(0);
const workRelated = ref([] as any);
const answer = ref(null);
const isCheck = ref(false);
const fetchWorkRelated = () => {
    loading.value = true;
    useAPI()
        .get(`/${route?.params?.slug[1]}.json`)
        .then((data: any) => {
            workRelated.value = data.data as any[];
        })
        .catch((err: any) => {
            console.log(err);
        })
        .finally(() => {
            loading.value = false;
        });
};
fetchWorkRelated();

const onCheck = () => {
    if (!answer.value) return;
    isCheck.value = true;
};
const onNext = () => {
    if (!isCheck.value) return;
    answer.value = null;
    isCheck.value = false;
    currentIndex.value = currentIndex.value + 1;
};
const splitWords = (word: string) => {
    const splitWords = word.split("-");
    // Capitalize the first letter of each word and join them with a space
    const result = splitWords
        .map(
            (w: string) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
        )
        .join(", ");
    return result;
};
useHead({
    title: splitWords(route.params.slug[1]) + " - " + SITE_TITLE,
    meta: [
        // Open Graph / Facebook
        {
            property: "og:title",
            content: splitWords(route.params.slug[1]) + " - " + SITE_TITLE,
        },
        {
            property: "og:description",
            content: splitWords(route.params.slug[1]),
        },
        //  Twitter
        {
            property: "twitter:title",
            content: splitWords(route.params.slug[1]) + " - " + SITE_TITLE,
        },
        {
            property: "twitter:description",
            content: splitWords(route.params.slug[1]),
        },
    ],
});
</script>
