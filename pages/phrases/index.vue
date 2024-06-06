<template>
    <div>
        <h1>Hello World</h1>
        <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div
                v-for="(item, index) in PHRASES"
                :key="index"
                class="rounded border cursor-pointer"
                @click="router.push(item.route)"
            >
                <img
                    src="/assets/images/fruit.jpg"
                    style="width: 100%"
                    class="rounded-t"
                />
                <div class="p-2 text-center">
                    <h1 class="text-xl">{{ item.korean }}</h1>
                    <p>{{ item.lao }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { PHRASES } from "~/composables/phrases";
const router = useRouter();
</script>
