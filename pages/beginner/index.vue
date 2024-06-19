<template>
    <div class="min-h-screen">
        <div>
            <h1 class="text-xl font-bold my-2">구절 ປະໂຫຍກ</h1>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="col-span-2">
                    <ContentList path="/beginner" v-slot="{ list }">
                        <div
                            v-for="(item, index) in list"
                            :key="index"
                            class="flex items-center"
                        >
                            <div class="w-16 h-16 my-1">
                                <nuxt-link :to="item.route">
                                    <img
                                        :src="item?.image"
                                        style="width: 100%"
                                        class="rounded"
                                        :alt="item?.lao"
                                    />
                                </nuxt-link>
                            </div>
                            <div class="ml-4 border-b w-full">
                                <nuxt-link :to="item.route">
                                    <h1 class="text-xl">{{ item.title }}</h1>
                                    <p>{{ item.date }}</p>
                                </nuxt-link>
                            </div>
                        </div>
                    </ContentList>
                </div>
                <div class="bg-green-200">
                    <h1>Hello World</h1>
                </div>
            </div>
        </div>
    </div>
</template>
