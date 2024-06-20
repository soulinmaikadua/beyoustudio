<template>
    <div class="min-h-screen">
        <div>
            <h1 class="text-xl font-bold my-2">
                Learn Korean Hangul Alphabet (ຮຽນ​ຮູ້​ຫນັງ​ສື Hangul
                ພາ​ສາ​ເກົາ​ຫຼີ​)
            </h1>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="col-span-2">
                    <ContentList path="/beginner" v-slot="{ list }">
                        <div
                            v-for="(item, index) in list"
                            :key="index"
                            class="flex items-center"
                        >
                            <div class="w-20 my-1">
                                <nuxt-link :to="item._path">
                                    <img
                                        :src="item?.image"
                                        style="width: 100%"
                                        class="my-auto"
                                        :alt="item?.lao"
                                    />
                                </nuxt-link>
                            </div>
                            <div class="ml-4 border-b w-full">
                                <nuxt-link :to="item._path">
                                    <h1 class="text-xl">{{ item.title }}</h1>
                                    <p>
                                        <time :datetime="item.date">{{
                                            item.date
                                        }}</time>
                                    </p>
                                </nuxt-link>
                            </div>
                        </div>
                    </ContentList>
                </div>
                <div></div>
            </div>
        </div>
    </div>
</template>
