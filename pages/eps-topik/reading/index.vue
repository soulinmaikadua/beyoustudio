<template>
    <div>
        <div>
            <div>
                <h1 class="text-2xl font-bold">Reading</h1>
            </div>
            <div class="border my-3"></div>
            <div v-if="reading.length > 0" class="mt-4">
                <p class="my-2">
                    [{{ currentIndex + 1 }}/{{ reading.length }}]
                </p>
                <img
                    v-if="reading[currentIndex]?.image"
                    :src="reading[currentIndex]?.image"
                    :alt="`Photo ${currentIndex}`"
                />
                <p>{{ reading[currentIndex].english }}</p>
                <p>{{ reading[currentIndex].question }}</p>
                <ul class="mt-4">
                    <li
                        v-for="(item, index) in reading[currentIndex].choices"
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
                        v-if="answer === reading[currentIndex].answer"
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
                                {{ reading[currentIndex].answer }}</span
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
const loading = ref(false);
const currentIndex = ref(0);
const reading = ref([] as any);
const answer = ref(null);
const isCheck = ref(false);
const fetchReading = () => {
    loading.value = true;
    useAPI()
        .get(`/reading.json`)
        .then((data: any) => {
            reading.value = data.data as any[];
        })
        .catch((err: any) => {})
        .finally(() => {
            loading.value = false;
        });
};

fetchReading();

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

useHead({
    title: "Reading - " + SITE_TITLE,
    meta: [
        // Open Graph / Facebook
        {
            property: "og:title",
            content: "Reading - " + SITE_TITLE,
        },
        //  Twitter
        {
            property: "twitter:title",
            content: "Reading - " + SITE_TITLE,
        },
    ],
});
</script>
