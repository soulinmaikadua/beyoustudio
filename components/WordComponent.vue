<template>
    <div>
        <div class="bg-blue-100 p-4 flex items-center">
            <button
                class="rounded-full p-2 border border-blue-200"
                type="button"
                @click="speakKorean(item.korean)"
            >
                <IconSpeakerWave />
            </button>
            <div class="ml-4">
                <h1 class="text-xl font-bold">
                    {{ props.item.korean }} {{ props.item.read
                    }}<span class="text-red-500 text-sm ml-2"
                        >({{ props.item.speech }})</span
                    >
                </h1>
                <p>{{ props.item.lao }}</p>
                <p>{{ props.item.english }}</p>
            </div>
        </div>
        <div
            v-for="(example, index) in props.item.examples"
            :key="index"
            class="bg-white p-4"
        >
            <div class="flex items-center">
                <button
                    class="rounded-full p-2 border"
                    type="button"
                    @click="speakKorean(example.korean)"
                >
                    <IconSpeakerWave />
                </button>
                <div class="ml-4">
                    <p>{{ example.korean }}</p>
                    <p>{{ example.read }}</p>
                </div>
            </div>
            <div class="flex items-center">
                <button
                    class="rounded-full p-2 border"
                    type="button"
                    @click="speakEnglish(example.english)"
                >
                    <IconSpeakerWave />
                </button>
                <div class="ml-4">
                    <p>{{ example.english }}</p>
                    <p>{{ example.lao }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    item: {
        type: Object,
        default: () => {},
    },
});

function speakKorean(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ko-KR"; // Korean language
    window.speechSynthesis.speak(utterance);
}
function speakEnglish(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US"; // English language
    window.speechSynthesis.speak(utterance);
}
</script>
