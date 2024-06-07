<template>
    <div class="min-h-screen">
        <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div
                v-for="(item, index) in VOCABULARIES"
                :key="index"
                class="rounded border cursor-pointer"
                @click="router.push(item.route)"
            >
                <img :src="item.image" style="width: 100%" class="rounded-t" />
                <div class="p-2 text-center">
                    <h1 class="text-xl">{{ item.korean }}</h1>
                    <p>{{ item.lao }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { VOCABULARIES } from "~/composables/vocabularies";
const router = useRouter();
</script>
