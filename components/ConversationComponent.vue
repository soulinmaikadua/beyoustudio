<template>
    <div class="grid grid-cols-1 md:grid-cols-2 my-1 mx-4 p-1" :class="class">
        <div>
            <div class="flex items-center">
                <button
                    class="rounded-full p-2 border hover:bg-gray-100"
                    type="button"
                    @click="speakKorean(props.item.korean)"
                >
                    <IconSpeakerWave />
                </button>
                <div class="ml-4 flex">
                    <p>{{ props.item.korean }}</p>
                    <p v-if="props.romanization" class="ml-2">
                        {{ props.item.read }}
                    </p>
                </div>
            </div>
        </div>
        <div>
            <div class="flex items-center">
                <button
                    v-if="props.english"
                    class="rounded-full p-2 border hover:bg-gray-100"
                    type="button"
                    @click="speakEnglish(props.item.english)"
                >
                    <IconSpeakerWave />
                </button>
                <div class="ml-4 flex">
                    <p v-if="props.english">{{ props.item.english }}</p>
                    <p v-if="props.lao" class="ml-2">{{ props.item.lao }}</p>
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
    english: {
        type: Boolean,
        default: true,
    },
    lao: {
        type: Boolean,
        default: true,
    },
    romanization: {
        type: Boolean,
        default: true,
    },
    speechRate: {
        type: Number,
        default: 1,
    },
    class: {
        type: String,
        default: "",
    },
});

function speakKorean(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ko-KR"; // Korean language
    utterance.rate = props.speechRate;
    window.speechSynthesis.speak(utterance);
}
function speakEnglish(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US"; // English language
    utterance.rate = props.speechRate;
    window.speechSynthesis.speak(utterance);
}
</script>