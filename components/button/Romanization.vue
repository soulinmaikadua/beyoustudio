<template>
    <div>
        <button
            class="border p-2 h-10 w-10"
            :class="
                romanization
                    ? 'bg-white hover:bg-gray-100'
                    : 'bg-blue-500 text-white border-blue-500'
            "
            aria-label="korean"
            @click="emit('click2')"
        >
            가
        </button>
        <button
            class="border-t border-r border-b p-2 h-10 w-10"
            :class="
                romanization
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'bg-white hover:bg-gray-100'
            "
            aria-label="english"
            @click="emit('click1')"
        >
            Aa
        </button>
    </div>
</template>
<script setup lang="ts">
defineProps({
    romanization: {
        type: Boolean,
        default: true,
    },
});
const emit = defineEmits(["click1", "click2"]);
</script>
