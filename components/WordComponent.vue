<template>
    <div>
        <div class="bg-blue-100 p-4 flex items-center border-b border-blue-200">
            <button
                class="rounded-full p-2 border border-blue-200"
                type="button"
                @click="speakKorean(item.korean)"
            >
                <IconSpeakerWave />
            </button>
            <div class="ml-4">
                <h1 class="text-xl font-bold">
                    {{ props.item.korean
                    }}{{ props.item?.emoji ? ` ${props.item.emoji}` : "" }}
                    <span v-if="props.romanization">{{ props.item.read}}</span>
                    <span
                        v-if="props.item.speech"
                        class="text-red-500 text-sm ml-2"
                        >({{ props.item.speech }})</span
                    >
                </h1>
                <p v-if="props.lao">{{ props.item.lao }}</p>
                <p v-if="props.english">{{ props.item.english }}</p>
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
                    <p v-if="props.romanization">{{ example.read }}</p>
                </div>
            </div>
            <div class="flex items-center">
                <button
                    v-if="english"
                    class="rounded-full p-2 border"
                    type="button"
                    @click="speakEnglish(example.english)"
                >
                    <IconSpeakerWave />
                </button>
                <div class="ml-4">
                    <p v-if="props.english">{{ example.english }}</p>
                    <p v-if="props.lao">{{ example.lao }}</p>
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
    english:{
        type:Boolean,
        default: true,
    },
    lao:{
        type:Boolean,
        default: true,
    },
    romanization:{
        type:Boolean,
        default: true,
    }
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
