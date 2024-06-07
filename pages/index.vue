<template>
    <main class="max-w-screen-xl mx-auto min-h-screen">
        <div class="w-full h-screen flex flex-col justify-center items-cente">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="-mt-20">
                    <img src="/gif/giphy.gif" class="mx-auto" />
                </div>
                <div class="-mt-10">
                    <h1 class="text-xl mb-10">
                        Start learning korean from zero to advanced
                    </h1>
                    <h2 class="text-xl mb-10">
                        0부터 고급까지 한국어를 배우기 시작하세요
                    </h2>
                    <h3 class="text-xl">
                        ເລີ່ມຮຽນພາສາເກົາຫຼີຕັ້ງແຕ່ສູນເຖິງຂັ້ນຂັ້ນສູງ
                    </h3>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4">
            <div>
                <h4 class="text-3xl font-bold">ຄຳສັບ</h4>
                <p>ເລີ່ມຮຽນຄຳສັບແບບງາຍໆ, ມີຫລາກລາຍຄຳຄັບ</p>
                <div class="mt-4">
                    <nuxt-link
                        to="/korean-vocabulary-lists"
                        class="px-4 py-2 border transition-5s hover:bg-gray-200"
                        >ຮຽນອ່ານເລີຍ</nuxt-link
                    >
                </div>
            </div>
            <div>
                <img src="/logo.png" />
            </div>
            <div>
                <h4 class="text-3xl font-bold">ປະໂຫຍກ</h4>
                <p>ມີຫລາກລາຍຄປະໂຫຍກທີ່ຄົນນີຍົມເວົ້າກັນສຸດໆ</p>
                <div class="mt-4">
                    <nuxt-link
                        to="/korean-phrases"
                        class="px-4 py-2 border transition-5s hover:bg-gray-200"
                        >ຮຽນເວົ້າເລີຍ</nuxt-link
                    >
                </div>
            </div>
            <div>
                <img src="/logo.png" />
            </div>
        </div>
        <div class="mt-32">
            <div class="text-center">
                <h4 class="text-3xl font-bold">
                    ຮຽນ​ຮູ້​ໄດ້​ທຸກ​ເວ​ລາ​, ທຸກ​ແຫ່ງ​ຫົນ​
                </h4>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
</script>
