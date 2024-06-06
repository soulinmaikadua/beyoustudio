<template>
    <div class="grid grid-cols-1 md:grid-cols-2 my-1 mx-4 p-1 border-b">
        <div>
            <div class="flex items-center">
                <button
                    class="rounded-full p-2 border"
                    type="button"
                    @click="speakKorean(props.item.korean)"
                >
                    <IconSpeakerWave />
                </button>
                <div class="ml-4 flex">
                    <p>{{ props.item.korean }}</p>
                    <p class="ml-2">{{ props.item.read }}</p>
                </div>
            </div>
        </div>
        <div>
            <div class="flex items-center">
                <button
                    class="rounded-full p-2 border"
                    type="button"
                    @click="speakEnglish(props.item.english)"
                >
                    <IconSpeakerWave />
                </button>
                <div class="ml-4 flex">
                    <p>{{ props.item.english }}</p>
                    <p class="ml-2">{{ props.item.lao }}</p>
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